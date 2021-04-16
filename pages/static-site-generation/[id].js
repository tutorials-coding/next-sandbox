import { getByIdsRange } from '../../lib/utils'

function Page({ data }) {
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    paths: getByIdsRange(data, 1, 5).map((post) => ({
      params: { id: String(post.id) },
    })),
    fallback: false,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  // Pass post data to the page via props
  return {
    props: {
      data,
    },
  }
}
export default Page
