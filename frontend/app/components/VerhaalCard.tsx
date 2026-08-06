import NextImage from 'next/image'
import Link from 'next/link'

import styles from '@/app/components/VerhaalCard.module.scss'
import Image from '@/app/components/SanityImage'
import {dataAttr} from '@/sanity/lib/utils'
import {AllPostsQueryResult} from '@/sanity.types'

export default function VerhaalCard({post}: {post: AllPostsQueryResult[number]}) {
  const {_id, title, slug, excerpt, coverImage} = post

  return (
    <Link
      href={`/posts/${slug}`}
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      className={styles.kaart}
    >
      <div className={styles.beeld}>
        {coverImage?.asset?._ref ? (
          <Image
            id={coverImage.asset._ref}
            alt={coverImage.alt || ''}
            width={600}
            height={450}
            mode="cover"
            hotspot={coverImage.hotspot}
            crop={coverImage.crop}
          />
        ) : (
          <NextImage
            src="/images/logo-cream.png"
            alt=""
            width={96}
            height={96}
            className={styles.placeholder}
          />
        )}
      </div>
      <div className={styles.inhoud}>
        <span className={styles.label}>Interview</span>
        <h3>{title}</h3>
        {excerpt && <p className={styles.tekst}>{excerpt}</p>}
      </div>
    </Link>
  )
}
