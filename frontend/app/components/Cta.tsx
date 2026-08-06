import {PortableTextBlock} from 'next-sanity'

import styles from '@/app/components/Cta.module.scss'
import ResolvedLink from '@/app/components/ResolvedLink'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import {stegaClean} from '@sanity/client/stega'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type CtaProps = {
  block: ExtractPageBuilderType<'callToAction'>
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageType: string
  pageId: string
}

export default function CTA({block}: CtaProps) {
  const {heading, eyebrow, body = [], button, image, theme, contentAlignment} = block

  const isDark = theme === 'dark'
  const isImageFirst = stegaClean(contentAlignment) === 'imageFirst'

  return (
    <section className={`${styles.section} ${isDark ? styles.dark : styles.light}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={`${isImageFirst && image ? styles.imageFirst : ''} ${styles.content}`}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {heading && <h2>{heading}</h2>}
            {body && <PortableText value={body as PortableTextBlock[]} />}

            {button?.buttonText && button?.link && (
              <div className={styles.buttonRow}>
                <ResolvedLink link={button?.link} className={styles.button}>
                  {button?.buttonText}
                </ResolvedLink>
              </div>
            )}
          </div>

          {image?.asset?._ref && (
            <Image
              id={image.asset._ref}
              alt="Demo image"
              width={704}
              crop={image.crop}
              mode="cover"
              className={styles.image}
            />
          )}
        </div>
      </div>
    </section>
  )
}
