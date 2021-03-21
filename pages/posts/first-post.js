import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FirsPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      {/* <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="profile image"
      /> */}
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  )
}
