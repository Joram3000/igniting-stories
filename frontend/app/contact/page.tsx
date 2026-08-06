import type {Metadata} from 'next'
import Image from 'next/image'

import styles from '@/app/contact/page.module.scss'
import {sanityFetch} from '@/sanity/lib/live'
import {contactPageQuery} from '@/sanity/lib/queries'

const defaults = {
  heading: 'Tip een verhaal',
  body: 'Ken jij iemand die zich op een inspirerende manier inzet om het leven mooier te maken? Of heb je zelf zo’n verhaal? Stuur me een mailtje: vertel kort wie het is en waarom dit verhaal verteld mag worden.',
  email: 'angela@kibbelingmedia.nl',
  mailSubject: 'Verhaaltip voor Igniting Stories',
  mailButtonText: 'Mail je verhaaltip',
  directText: 'Of mail direct naar',
  metaTitle: 'Contact',
  metaDescription: 'Tip een verhaal of neem contact op met Igniting Stories.',
}

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({query: contactPageQuery, stega: false})

  return {
    title: page?.metaTitle || defaults.metaTitle,
    description: page?.metaDescription || defaults.metaDescription,
  }
}

export default async function ContactPage() {
  const {data: page} = await sanityFetch({query: contactPageQuery})
  const email = page?.email || defaults.email
  const mailSubject = page?.mailSubject || defaults.mailSubject
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}`

  return (
    <section className={styles.section}>
      <div className={`container ${styles.tweeKolom}`}>
        <div>
          <h1>{page?.heading || defaults.heading}</h1>
          <p className={styles.tekst}>{page?.body || defaults.body}</p>
          <p className={styles.mailKnop}>
            <a href={mailtoHref} className={styles.knopOutline}>
              {page?.mailButtonText || defaults.mailButtonText}
            </a>
          </p>
          <p className={styles.direct}>
            {page?.directText || defaults.directText} <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className={styles.kaderGroen}>
          <Image src="/images/portret-zon.jpg" alt="Angela Poll" width={1280} height={1600} />
        </div>
      </div>
    </section>
  )
}
