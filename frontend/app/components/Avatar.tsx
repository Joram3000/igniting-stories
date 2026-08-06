import Image from '@/app/components/SanityImage'
import DateComponent from '@/app/components/Date'
import styles from '@/app/components/Avatar.module.scss'

type Props = {
  person: {
    firstName: string | null
    lastName: string | null
    picture?: {
      asset?: {_ref: string}
      hotspot?: {x: number; y: number}
      crop?: {top: number; bottom: number; left: number; right: number}
      alt?: string
    }
  }
  date?: string
  small?: boolean
}

export default function Avatar({person, date, small = false}: Props) {
  const {firstName, lastName, picture} = person

  return (
    <div className={styles.avatar}>
      {picture?.asset?._ref ? (
        <div className={small ? styles.pictureSmall : styles.picture}>
          <Image
            id={picture.asset._ref}
            alt={picture?.alt || ''}
            height={small ? 32 : 48}
            width={small ? 32 : 48}
            hotspot={picture.hotspot}
            crop={picture.crop}
            mode="cover"
          />
        </div>
      ) : (
        <div className={styles.byLine}>By </div>
      )}
      <div className={styles.meta}>
        {firstName && lastName && (
          <div className={small ? styles.nameSmall : styles.name}>
            {firstName} {lastName}
          </div>
        )}
        <div className={small ? styles.dateSmall : styles.date}>
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  )
}
