'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageGridProps {
  images: {
    src: string
    alt: string
    href?: string
  }[]
  columns?: 2 | 3 | 4 // Accepts 2, 3, or 4 columns
}

const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => (
  <div
    className={clsx('p-4-- rounded-lg bg-red-900/80', {
      //  'relative inset-0 animate-pulse rounded-lg bg-gray-300':
      'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
        isLoading
    })}
  >
    <div className="space-y-3">
      <div className="h-14 rounded-lg bg-gray-700" />
      <div className="h-3 w-11/12 rounded-lg bg-gray-700" />
      <div className="h-3 w-8/12 rounded-lg bg-gray-700" />
    </div>
  </div>
)

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3
}) => {
  const gridClass = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4'
  }[columns]

  const [isLoading, setIsLoading] = useState(true)

  return (
    <section>
      <div className={`grid ${gridClass} my-8 gap-4`}>
        {images.map((image, index) => {
          return (
            <>
              <div key={index + 20} className="relative aspect-square">
                {isLoading && (
                  <div
                    key={image.href + '1111'}
                    className="absolute inset-0 animate-pulse rounded-lg bg-black/20 dark:bg-white/20"
                  />
                )}
                {image.href ? (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={image.href}
                    className="block h-full w-full"
                  >
                    <Image
                      key={index}
                      alt={image.alt}
                      src={image.src}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority
                      className={`rounded-lg object-cover ${isLoading ? 'hidden' : 'block'}`}
                      onLoad={() => setIsLoading(false)}
                    />
                  </a>
                ) : (
                  <Image
                    key={index}
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                    className={`rounded-lg object-cover ${isLoading ? 'hidden' : 'block'}`}
                    onLoad={() => setIsLoading(false)}
                  />
                )}
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}
