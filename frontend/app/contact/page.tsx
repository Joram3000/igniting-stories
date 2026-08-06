import type {Metadata} from 'next'
import Image from 'next/image'

import styles from '@/app/contact/page.module.scss'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tip een verhaal of neem contact op met Igniting Stories.',
}

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.tweeKolom}`}>
        <div>
          <h1>Tip een verhaal</h1>
          <p className={styles.tekst}>
            Ken jij iemand die zich op een inspirerende manier inzet om het leven mooier te
            maken? Of heb je zelf zo&rsquo;n verhaal? Stuur me een mailtje: vertel kort wie het is
            en waarom dit verhaal verteld mag worden.
          </p>
          <p className={styles.mailKnop}>
            <a
              href="mailto:angela@kibbelingmedia.nl?subject=Verhaaltip%20voor%20Igniting%20Stories"
              className={styles.knopOutline}
            >
              Mail je verhaaltip
            </a>
          </p>
          <p className={styles.direct}>
            Of mail direct naar <a href="mailto:angela@kibbelingmedia.nl">angela@kibbelingmedia.nl</a>
          </p>
        </div>
        <div className={styles.kaderGroen}>
          <Image src="/images/portret-zon.jpg" alt="Angela Poll" width={1280} height={1600} />
        </div>
      </div>
    </section>
  )
}
