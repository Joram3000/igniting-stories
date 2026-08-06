import Image from 'next/image'

import styles from '@/app/components/Footer.module.scss'
import {sanityFetch} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'

const defaultTagline = 'Verhalen die aansteken'

export default async function Footer() {
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image src="/images/logo-orange.png" alt="Igniting Stories" width={48} height={48} />
        <span className={styles.copy}>
          &copy; {year} Igniting Stories &middot; {settings?.footerTagline || defaultTagline}
        </span>
      </div>
    </footer>
  )
}
