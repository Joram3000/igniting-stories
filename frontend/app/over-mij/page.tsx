import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/app/over-mij/page.module.scss'
import {sanityFetch} from '@/sanity/lib/live'
import {overMijPageQuery} from '@/sanity/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({query: overMijPageQuery, stega: false})

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  }
}

export default async function OverMijPage() {
  const {data: page} = await sanityFetch({query: overMijPageQuery})
  const paragraphs = (page?.body ?? '').split(/\n{2,}/).filter(Boolean)

  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.tweeKolom}`}>
          <div>
            <h1>{page?.heading}</h1>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.tekst}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.kaderOranje}>
            <Image src="/images/portret-lach.jpg" alt="Angela Poll" width={1067} height={1600} />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.cta}>
            <h2>{page?.ctaHeading}</h2>
            <p className={styles.ctaTekst}>{page?.ctaText}</p>
            <Link href="/contact" className={styles.knopVol}>
              {page?.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
