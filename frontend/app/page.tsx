import {Fragment} from 'react'
import Link from 'next/link'
import NextImage from 'next/image'

import styles from '@/app/page.module.scss'
import VerhaalCard from '@/app/components/VerhaalCard'
import Onboarding from '@/app/components/Onboarding'
import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery, homePageQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'

const defaults = {
  heroHeading: 'Igniting\nStories',
  heroKicker: 'Maak je verhaal aanstekelijk.',
  heroPrimaryButtonText: 'Bekijk verhalen',
  heroSecondaryButtonText: 'Neem contact op',
  angelaHeading: 'Angela Poll',
  angelaSubheading: 'Verhalenvanger',
  angelaText:
    'Jouw verhaal is er al. Het zit in hoe je kijkt, wat je maakt en waarom je doet wat je doet. Met camera, pen en een nieuwsgierige blik leg ik dat vast in beeld en tekst. Ik maak het niet mooier dan het is; ik laat de vonk overslaan.',
  angelaButtonText: 'Meer over mij',
  watIkDoeHeading: 'Van vonk naar vlam',
  watIkDoeSubheading: 'Hiermee steek ik jouw verhaal aan',
  watIkDoeItems: [
    {
      title: 'Verhalende content',
      description:
        'interviews, video, tekst, fotografie en social posts. Echte mensen en echte verhalen, want dat is wat mensen onthouden.',
    },
    {
      title: 'Branding',
      description:
        'jouw visie vertaald naar (website)teksten, blogs en beeld, zodat je hele website één verhaal vertelt. Ook webdesign (UX & UI) en webdevelopment zijn mogelijk.',
    },
    {
      title: 'Contentstrategie en begeleiding',
      description:
        'eerst bepalen welk verhaal je vertelt, aan wie en waarom. Daarna maak ik de content zelf, of stuur ik jouw team van contentmakers aan zodat het verhaal overal doorklinkt.',
    },
  ],
  storiesHeading: 'Stories',
  ctaHeading: 'Ken jij een smeulend verhaal?',
  ctaText:
    'Vertel me jouw verhaal. Samen kijken we naar hoe die vonk in jouw verhaal kan overslaan. Ken je iemand anders wiens verhaal verteld moet worden? Tip me!',
  ctaButtonText: 'Neem contact op',
}

export default async function Page() {
  const [{data: posts}, {data: home}] = await Promise.all([
    sanityFetch({query: allPostsQuery}),
    sanityFetch({query: homePageQuery}),
  ])
  const recentPosts = (posts as AllPostsQueryResult) ?? []
  const featuredPosts = recentPosts.slice(0, 3)
  const watIkDoeItems =
    home?.watIkDoeItems && home.watIkDoeItems.length > 0 ? home.watIkDoeItems : defaults.watIkDoeItems

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
            <h1 className={styles.titel}>
              {(home?.heroHeading || defaults.heroHeading).split('\n').map((line, i, arr) => (
                <Fragment key={line}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </h1>
            <p className={styles.kicker}>{home?.heroKicker || defaults.heroKicker}</p>
            <div className={styles.knoppen}>
              <Link href="/verhalen" className={styles.knopOranje}>
                {home?.heroPrimaryButtonText || defaults.heroPrimaryButtonText}
              </Link>
              <Link href="/contact" className={styles.knopGroen}>
                {home?.heroSecondaryButtonText || defaults.heroSecondaryButtonText}
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
            <h2>{home?.angelaHeading || defaults.angelaHeading}</h2>
            <p className={styles.subtitel}>{home?.angelaSubheading || defaults.angelaSubheading}</p>
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
            <p className={styles.tekst}>{home?.angelaText || defaults.angelaText}</p>
            <Link href="/over-mij" className={styles.knopOutline}>
              {home?.angelaButtonText || defaults.angelaButtonText}
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
            <h2 className={styles.kopPaars}>{home?.watIkDoeHeading || defaults.watIkDoeHeading}</h2>
            <h3 className={styles.subtitel2}>
              {home?.watIkDoeSubheading || defaults.watIkDoeSubheading}
            </h3>
            <div className={styles.widGrid}>
              {watIkDoeItems.map((item, i) => (
                <div key={item.title} className={styles.widItem}>
                  <span className={styles.widNr}>{i + 1}.</span>
                  <p>
                    <strong>{item.title}</strong>: {item.description}
                  </p>
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
            <h2>{home?.storiesHeading || defaults.storiesHeading}</h2>
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
            <h2>{home?.ctaHeading || defaults.ctaHeading}</h2>
            <p className={styles.ctaTekst}>{home?.ctaText || defaults.ctaText}</p>
            <Link href="/contact" className={styles.knopOranje}>
              {home?.ctaButtonText || defaults.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
