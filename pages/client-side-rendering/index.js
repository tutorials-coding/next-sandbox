import { useState, useEffect } from 'react'
import Link from 'next/link'

function Page() {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    setPosts(data)
  }, [])

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/client-side-rendering/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Page
