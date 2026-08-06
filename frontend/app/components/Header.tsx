'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import styles from '@/app/components/Header.module.scss'

const links = [
  {href: '/', label: 'Home'},
  {href: '/verhalen', label: 'Verhalen'},
  {href: '/over-mij', label: 'Over mij'},
  {href: '/contact', label: 'Contact'},
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <Image src="/images/logo-wide.png" alt="Igniting Stories" width={224} height={64} priority />
        </Link>

        <ul className={styles.links}>
          {links.map(({href, label}) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

            return (
              <li key={href}>
                <Link href={href} className={isActive ? styles.linkActief : styles.link}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
