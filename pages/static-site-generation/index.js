import Link from 'next/link'
import { getByIdsRange } from '../../lib/utils'

function Page({ data }) {
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/static-site-generation/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
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
