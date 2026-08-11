import {Fragment} from 'react'
import Link from 'next/link'
import NextImage from 'next/image'

import styles from '@/app/page.module.scss'
import VerhaalCard from '@/app/components/VerhaalCard'
import Onboarding from '@/app/components/Onboarding'
import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery, homePageQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import doodle_streep_oranje from '@/app/assets/svg/doodle streep oranje.svg'
import doodle_krul_oranje from '@/app/assets/svg/doodle krul oranje.svg'

export default async function Page() {
  const [{data: posts}, {data: home}] = await Promise.all([
    sanityFetch({query: allPostsQuery}),
    sanityFetch({query: homePageQuery}),
  ])
  const recentPosts = (posts as AllPostsQueryResult) ?? []
  const featuredPosts = recentPosts.slice(0, 3)
  const watIkDoeItems = home?.watIkDoeItems ?? []

  return (
    <>
      {/* Hero */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={`container ${styles.tweeKolom}`}>
          <div>
            <h1 className={styles.titel}>
              {(home?.heroHeading ?? '').split('\n').map((line, i, arr) => (
                <Fragment key={line}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </h1>
            <p className={styles.kicker}>{home?.heroKicker}</p>
            <div className={styles.knoppen}>
              <Link href="/verhalen" className={styles.knopOranje}>
                {home?.heroPrimaryButtonText}
              </Link>
              <Link href="/contact" className={styles.knopGroen}>
                {home?.heroSecondaryButtonText}
              </Link>
            </div>
          </div>

          <div className={styles.heroCollage}>
            <div>videotje here i want to have the bumper-square-igniting-stories.webm video</div>

            {/* <div className={styles.fotoGroot}>
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
            </div> */}
          </div>
        </div>
      </section>

      <NextImage src={doodle_streep_oranje} alt="" className={styles.doodle} />

      {/* Angela */}
      <section className={styles.section}>
        <div className={`container ${styles.angelaGrid}`}>
          <div className={styles.angelaKop}>
            <h2>{home?.angelaHeading}</h2>
            <p className={styles.subtitel}>{home?.angelaSubheading}</p>
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
            <p className={styles.tekst}>{home?.angelaText}</p>
            <Link href="/over-mij" className={styles.knopOutline}>
              {home?.angelaButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className={`${styles.section} ${styles.bandGroen}`}>
        <NextImage src={doodle_krul_oranje} alt="" className={styles.doodle2} />

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
            <h2 className={styles.kopPaars}>{home?.watIkDoeHeading}</h2>
            <h3 className={styles.subtitel2}>{home?.watIkDoeSubheading}</h3>
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
            <h2>{home?.storiesHeading}</h2>
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
            <h2>{home?.ctaHeading}</h2>
            <p className={styles.ctaTekst}>{home?.ctaText}</p>
            <Link href="/contact" className={styles.knopOranje}>
              {home?.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
