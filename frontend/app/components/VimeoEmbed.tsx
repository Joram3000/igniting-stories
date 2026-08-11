import styles from '@/app/components/VimeoEmbed.module.scss'
import type {Vimeo} from '@/sanity.types'

function getVimeoId(url?: string | null): string | null {
  if (!url) return null
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  return match ? match[1] : null
}

export default function VimeoEmbed({value}: {value: Vimeo}) {
  const videoId = getVimeoId(value?.url)

  if (!videoId) return null

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={`https://player.vimeo.com/video/${videoId}`}
        title="Vimeo video player"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
