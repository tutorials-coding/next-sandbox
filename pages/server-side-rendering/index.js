import Link from 'next/link'
import { getByIdsRange } from '../../lib/utils'

function Page({ data }) {
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/server-side-rendering/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  // Pass data to the page via props
  return {
    props: {
      data: getByIdsRange(data, 1, 50),
    },
  }
}

export default Page
