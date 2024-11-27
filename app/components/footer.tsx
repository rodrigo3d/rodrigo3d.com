'use client'

import { metaData, socialLinks } from 'app/config'
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRss,
  FaXTwitter
} from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'

const YEAR = new Date().getFullYear()

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Read more about Seminole tax hike"
    >
      <Icon />
    </a>
  )
}

function SocialLinks() {
  return (
    <div className="float-right flex gap-3.5 text-lg transition-opacity duration-300 hover:opacity-90">
      {socialLinks.twitter && (
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      )}
      {socialLinks.instagram && (
        <SocialLink
          href={`https://instagram.com/${socialLinks.instagram}`}
          icon={FaInstagram}
        />
      )}
      {socialLinks.github && (
        <SocialLink
          href={`https://github.com/${socialLinks.github}`}
          icon={FaGithub}
        />
      )}
      {socialLinks.linkedin && (
        <SocialLink
          href={`https://linkedin.com/in/${socialLinks.linkedin}`}
          icon={FaLinkedinIn}
        />
      )}
      {metaData.email && (
        <a href={`mailto:${metaData.email}`} rel="noopener noreferrer">
          <TbMailFilled />
        </a>
      )}
      {/* <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={metaData.email} icon={TbMailFilled} /> */}
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <small className="mt-16 block text-[#1C1C1C] dark:text-[#D4D4D4] lg:mt-24">
      <time>© {YEAR}</time>{' '}
      <a
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  )
}
