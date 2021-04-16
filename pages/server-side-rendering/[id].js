function Page({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Page
