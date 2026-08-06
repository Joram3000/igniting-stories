import type {Metadata} from 'next'

import styles from '@/app/verhalen/page.module.scss'
import Onboarding from '@/app/components/Onboarding'
import VerhaalCard from '@/app/components/VerhaalCard'
import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery} from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Verhalen',
  description:
    'Interviews met mensen die zich op een inspirerende manier inzetten om het leven mooier te maken.',
}

export default async function VerhalenPage() {
  const {data: posts} = await sanityFetch({query: allPostsQuery})

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectieKop}>
          <h1>Verhalen</h1>
          <p>Interviews met mensen die een vuurtje aanwakkeren. In tekst en beeld.</p>
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
