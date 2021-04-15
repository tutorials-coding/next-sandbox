import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()

  const [post, setPost] = useState([])
  useEffect(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
    )
    const data = await res.json()
    setPost(data)
  }, [])

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Page
