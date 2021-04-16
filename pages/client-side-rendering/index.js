import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getByIdsRange } from '../../lib/utils'

function Page() {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    setPosts(getByIdsRange(data, 1, 5))
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
