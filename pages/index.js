import Link from 'next/link'

import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>
            <Link href={'/client-side-rendering'}>
              <a>Client Side Rendering</a>
            </Link>
          </li>
          <li>
            <Link href={'/server-side-rendering'}>
              <a>Server Side Rendering</a>
            </Link>
          </li>
          <li>
            <Link href={'/static-site-generation'}>
              <a>Static Site Generation</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
