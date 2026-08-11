import type {Metadata} from 'next'
import Image from 'next/image'

import styles from '@/app/contact/page.module.scss'
import {sanityFetch} from '@/sanity/lib/live'
import {contactPageQuery} from '@/sanity/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({query: contactPageQuery, stega: false})

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
  }
}

export default async function ContactPage() {
  const {data: page} = await sanityFetch({query: contactPageQuery})
  const email = page?.email
  const mailSubject = page?.mailSubject
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(mailSubject ?? '')}`

  return (
    <section className={styles.section}>
      <div className={`container ${styles.tweeKolom}`}>
        <div>
          <h1>{page?.heading}</h1>
          <p className={styles.tekst}>{page?.body}</p>
          <p className={styles.mailKnop}>
            <a href={mailtoHref} className={styles.knopOutline}>
              {page?.mailButtonText}
            </a>
          </p>
          <p className={styles.direct}>
            {page?.directText} <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className={styles.kaderGroen}>
          <Image src="/images/portret-zon.jpg" alt="Angela Poll" width={1280} height={1600} />
        </div>
      </div>
    </section>
  )
}
