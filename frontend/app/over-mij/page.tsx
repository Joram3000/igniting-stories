import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/app/over-mij/page.module.scss'
import {sanityFetch} from '@/sanity/lib/live'
import {overMijPageQuery} from '@/sanity/lib/queries'

const defaults = {
  heading: 'Nieuwsgierig',
  body: `Ik ben Angela Poll. Ik haal mijn dagelijkse dopamine uit inspirerende, hoopvolle verhalen en visies. Ik geloof dat we dat nodig hebben om elkaar beter te begrijpen en hopelijk verder te komen om de wereld een mooiere plek te maken. Zo steken we elkaar aan, op een goede manier.

Door de jaren heen heb ik met verschillende disciplines leren werken om die verhalen vast te leggen, of te transformeren naar een vorm die de doelgroep goed kan bereiken. Video, foto, tekst, geluid of een combinatie daarvan: als ik datgene maar kan vastleggen waar de belangrijkste boodschap in zit.

Als kind deed ik niets liever dan mijn fantasie gebruiken en verhalen schrijven, of ze zelf ‘spelen’. Totdat ik door een schoolopdracht het interviewen ontdekte. Nadat ik de lokale dierenarts aan een verhoor had onderworpen, wist ik het: ik wil dit altijd blijven doen.

Een paar jaar na mijn bachelor Journalistiek heb ik een traineeship Digital Marketing gedaan, zodat ik ook leerde hoe je content inzet als strategie om verbinding te maken met je doelgroep. Ook pakte ik de camera weer op om mensen en momenten op een mooie manier vast te leggen. In 2024 besloot ik hierin verder te gaan met een opleiding Film & Edit, waar ik naast documentaire ook het fictie-filmdomein verkende. Niet-waargebeurde verhalen tot leven wekken is óók heel interessant, en zeker wanneer aandachtig doordachte cinematografie daar een grote rol in speelt. Ik probeer dit dan ook altijd terug te laten komen in wat ik maak.

Ik volg waar mijn nieuwsgierigheid me leidt. En ik hoop dat onze paden elkaar kruisen om jouw verhaal te ontdekken!`,
  ctaHeading: 'Samenwerken of een verhaal tippen?',
  ctaText: 'Ik hoor graag van je.',
  ctaButtonText: 'Neem contact op',
  metaTitle: 'Over mij',
  metaDescription: 'Wie zit er achter Igniting Stories?',
}

export async function generateMetadata(): Promise<Metadata> {
  const {data: page} = await sanityFetch({query: overMijPageQuery, stega: false})

  return {
    title: page?.metaTitle || defaults.metaTitle,
    description: page?.metaDescription || defaults.metaDescription,
  }
}

export default async function OverMijPage() {
  const {data: page} = await sanityFetch({query: overMijPageQuery})
  const paragraphs = (page?.body || defaults.body).split(/\n{2,}/).filter(Boolean)

  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.tweeKolom}`}>
          <div>
            <h1>{page?.heading || defaults.heading}</h1>
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
            <h2>{page?.ctaHeading || defaults.ctaHeading}</h2>
            <p className={styles.ctaTekst}>{page?.ctaText || defaults.ctaText}</p>
            <Link href="/contact" className={styles.knopVol}>
              {page?.ctaButtonText || defaults.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
