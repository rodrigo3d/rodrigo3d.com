'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="prose prose-neutral dark:prose-invert">
      <p>
        Oops! Something went wrong...{' '}
        <a
          className="cursor-pointer"
          onClick={() => {
            reset()
          }}
        >
          maybe try refreshing
        </a>
        ?
      </p>
    </div>
  )
}
