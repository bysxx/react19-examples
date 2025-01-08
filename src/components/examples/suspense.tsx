import { Suspense, use } from 'react'

const commentsPromise = new Promise<string[]>((resolve) => {
  setTimeout(() => {
    resolve(['Hello', 'Suspense', 'with', 'use'])
  }, 1000)
})

function Comments() {
  const comments = use(commentsPromise)
  return comments.map((comment) => (
    <li className="" key={comment}>
      - {comment}
    </li>
  ))
}

export function SuspenseExample() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        <Comments />
      </ul>
    </Suspense>
  )
}
