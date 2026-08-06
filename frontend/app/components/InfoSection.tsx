import {type PortableTextBlock} from 'next-sanity'

import styles from '@/app/components/InfoSection.module.scss'
import PortableText from '@/app/components/PortableText'
import {InfoSection} from '@/sanity.types'

type InfoProps = {
  block: InfoSection
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageId: string
  pageType: string
}

export default function CTA({block}: InfoProps) {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.inner}>
        {block?.heading && <h2>{block.heading}</h2>}
        {block?.subheading && <span className={styles.subheading}>{block.subheading}</span>}
        <div className={styles.content}>
          {block?.content?.length && (
            <PortableText value={block.content as PortableTextBlock[]} />
          )}
        </div>
      </div>
    </div>
  )
}
