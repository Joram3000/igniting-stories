import Image from 'next/image'

import styles from '@/app/components/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image src="/images/logo-orange.png" alt="Igniting Stories" width={48} height={48} />
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} Igniting Stories &middot; Verhalen die aansteken
        </span>
      </div>
    </footer>
  )
}
