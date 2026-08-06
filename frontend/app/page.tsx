import Link from 'next/link'
import NextImage from 'next/image'

import styles from '@/app/page.module.scss'
import VerhaalCard from '@/app/components/VerhaalCard'
import Onboarding from '@/app/components/Onboarding'
import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'

export default async function Page() {
  const {data: posts} = await sanityFetch({query: allPostsQuery})
  const recentPosts = (posts as AllPostsQueryResult) ?? []
  const featuredPosts = recentPosts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={`container ${styles.tweeKolom}`}>
          <div>
            <svg
              className={styles.doodle}
              viewBox="0 0 260 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 40 C 50 5, 90 5, 120 30 S 170 55, 195 35 S 230 10, 258 22"
                stroke="#FC9F57"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <p className={styles.kicker}>
              Verhalen die je aansteken
              <br />
              met positieve energie
            </p>
            <h1 className={styles.titel}>
              Igniting
              <br />
              Stories
            </h1>
            <div className={styles.knoppen}>
              <Link href="/verhalen" className={styles.knopOranje}>
                Bekijk verhalen
              </Link>
              <Link href="/contact" className={styles.knopGroen}>
                Aanmelden
              </Link>
            </div>
          </div>

          <div className={styles.heroCollage}>
            <div className={styles.fotoGroot}>
              <NextImage
                src="/images/vrouw.jpg"
                alt="Portret van een lachende vrouw"
                width={1200}
                height={1500}
              />
            </div>
            <div className={styles.fotoKlein}>
              <NextImage
                src="/images/gitarist.jpg"
                alt="Gitarist tijdens een optreden"
                width={468}
                height={268}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Angela */}
      <section className={styles.section}>
        <div className={`container ${styles.angelaGrid}`}>
          <div className={styles.angelaKop}>
            <svg
              className={styles.doodle}
              viewBox="0 0 260 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 30 C 30 60, 60 55, 80 30 S 110 2, 135 22 S 175 55, 205 40 S 245 15, 258 25"
                stroke="#368F8B"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <h2>Angela Poll</h2>
            <p className={styles.subtitel}>Verhalenvanger</p>
          </div>
          <div className={`${styles.kaderCreme} ${styles.angelaFoto}`}>
            <NextImage
              src="/images/portret-zon.jpg"
              alt="Angela Poll in het zonlicht"
              width={1280}
              height={1600}
            />
          </div>
          <div className={styles.angelaTekst}>
            <p className={styles.tekst}>
              Met mijn pen, camera en creatieve blik help ik mensen en organisaties verhalen te
              vertellen die inspireren. Niet door ze mooier te maken dan ze zijn, maar door te laten
              zien wat er al <em>&iacute;s</em>. Verhalen, visies en acties van degenen die een
              positieve invloed willen maken op hun <em>directe</em> omgeving.
            </p>
            <Link href="/over-mij" className={styles.knopOutline}>
              Meer over mij
            </Link>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className={`${styles.section} ${styles.bandGroen}`}>
        <div className={`container ${styles.tweeKolom}`}>
          <div className={styles.kaderCreme}>
            <NextImage
              src="/images/angela-camera.jpg"
              alt="Angela met camera in een heideveld"
              width={1076}
              height={1434}
            />
          </div>
          <div>
            <h2 className={styles.kopPaars}>What I do</h2>
            <div className={styles.widGrid}>
              {[
                'Inspirerende verhalen vangen in video, copy en fotografie',
                'Het uitwerken van een contentstrategie om van identiteit naar impact te groeien',
                'Creatieve samenwerkingen met mensen en organisaties',
                'Een identiteit creatief en concreet vormgeven in kleur, beeld, tekst en webdesign (UX & UI)',
              ].map((text, i) => (
                <div key={text} className={styles.widItem}>
                  <span className={styles.widNr}>{i + 1}.</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verhalen */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectieKop}>
            <h2>Verhalen die aansteken</h2>
            <p>
              Elke dag hoor je wel iets over wat er niet goed gaat in de wereld. Deprimerend.
              Igniting Stories focust op verhalen die een vuurtje aanwakkeren. Mensen die zich op
              een inspirerende manier inzetten om het leven mooier te maken. Verhalen die een
              glimlach ontvlambaar maken.
            </p>
          </div>
          {featuredPosts.length > 0 ? (
            <div className="verhalen-grid">
              {featuredPosts.map((post) => (
                <VerhaalCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <Onboarding />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.cta}>
            <h2>Ken jij iemand met een vonk?</h2>
            <p className={styles.ctaTekst}>
              Iemand die zich inzet om het leven een beetje mooier te maken en wiens verhaal verteld
              mag worden? Tip me. Wie weet zit diegene binnenkort tegenover mij.
            </p>
            <Link href="/contact" className={styles.knopOranje}>
              Tip een verhaal
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
