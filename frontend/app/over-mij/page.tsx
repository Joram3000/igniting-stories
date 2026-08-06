import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/app/over-mij/page.module.scss'

export const metadata: Metadata = {
  title: 'Over mij',
  description: 'Wie zit er achter Igniting Stories?',
}

export default function OverMijPage() {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.tweeKolom}`}>
          <div>
            <h1>Beelddenker</h1>
            <p className={styles.subtitel}>Verhalenvanger</p>
            <p className={styles.tekst}>
              Ik ben Angela Poll. Ik haal mijn dagelijkse dopamine uit inspirerende, hoopvolle
              verhalen en visies. Ik geloof dat we die nodig hebben om elkaar beter te begrijpen.
              Althans, daar hoop ik op.
            </p>
            <p className={styles.tekst}>
              Door de jaren heen heb ik met verschillende disciplines leren werken om die
              verhalen vast te leggen, of te transformeren naar een vorm die de doelgroep goed
              kan bereiken. Video, foto, tekst, geluid of een combinatie daarvan: als ik datgene
              maar kan vastleggen waar de belangrijkste boodschap in zit.
            </p>
            <p className={styles.tekst}>
              Met Igniting Stories interview ik mensen die zich op een inspirerende manier
              inzetten om het leven mooier te maken. In tekst en beeld. Verhalen die een glimlach
              ontvlambaar maken.
            </p>
          </div>
          <div className={styles.kaderOranje}>
            <Image src="/images/portret-lach.jpg" alt="Angela Poll" width={1067} height={1600} />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.cta}>
            <h2>Samenwerken of een verhaal tippen?</h2>
            <p className={styles.ctaTekst}>Ik hoor graag van je.</p>
            <Link href="/contact" className={styles.knopVol}>
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
