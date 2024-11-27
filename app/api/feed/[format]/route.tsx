import { metaData } from 'app/config'
import { getBlogPosts } from 'app/lib/posts'
import { Feed } from 'feed'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ format: string }> }
) {
  // We sometimes artificially delay a reponse for demo purposes.
  // Don't do this in real life :)
  const { searchParams } = new URL(request.url)
  const delay = searchParams.get('delay')
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)))
  }

  const BaseUrl = metaData.baseUrl.endsWith('/')
    ? metaData.baseUrl
    : `${metaData.baseUrl}/`

  const feed = new Feed({
    title: metaData.title,
    description: metaData.description,
    id: BaseUrl,
    link: BaseUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      metaData.title
    }`,
    generator: 'Feed for Node.js',
    feedLinks: {
      json: `${BaseUrl}feed.json`,
      atom: `${BaseUrl}atom.xml`,
      rss: `${BaseUrl}rss.xml`
    }
  })

  const allPosts = await getBlogPosts()

  allPosts.forEach((post) => {
    const postUrl = `${BaseUrl}blog/${post.slug}`
    const categories = post.metadata.tags
      ? post.metadata.tags.split(',').map((tag) => tag.trim())
      : []

    feed.addItem({
      title: post.metadata.title,
      id: postUrl,
      link: postUrl,
      description: post.metadata.summary,
      category: categories.map((tag) => ({
        name: tag,
        term: tag
      })),
      date: new Date(post.metadata.publishedAt)
    })
  })

  const format = (await params).format

  if (['rss', 'atom', 'json'].includes(format)) {
    // RSS
    if (format === 'rss') {
      const rssContent = feed.rss2()
      return new NextResponse(rssContent, {
        status: 200,
        headers: {
          'content-type': 'application/xml'
        }
      })
    }

    // ATOM
    if (format === 'atom') {
      const atomContent = feed.atom1()
      return new NextResponse(atomContent, {
        status: 200,
        headers: {
          'content-type': 'application/xml'
        }
      })
    }

    // JSON
    if (format === 'json') {
      const jsonContent = feed.json1()
      return new NextResponse(jsonContent, {
        status: 200,
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  } else {
    return NextResponse.json({
      status: 400,
      error: 'Bad Request. Invalid format, please try again.'
    })
  }
}
