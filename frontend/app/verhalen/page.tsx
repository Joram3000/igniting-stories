import type {Metadata} from 'next'

import styles from '@/app/verhalen/page.module.scss'
import Onboarding from '@/app/components/Onboarding'
import VerhaalCard from '@/app/components/VerhaalCard'
import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery, verhalenPageQuery} from '@/sanity/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({query: verhalenPageQuery, stega: false})

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  }
}

export default async function VerhalenPage() {
  const [{data: posts}, {data: page}] = await Promise.all([
    sanityFetch({query: allPostsQuery}),
    sanityFetch({query: verhalenPageQuery}),
  ])

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectieKop}>
          <h1>{page?.heading}</h1>
          <p>{page?.intro}</p>
        </div>
        {posts && posts.length > 0 ? (
          <div className="verhalen-grid">
            {posts.map((post) => (
              <VerhaalCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <Onboarding />
        )}
      </div>
    </section>
  )
}
