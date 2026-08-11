import styles from '@/app/components/YoutubeEmbed.module.scss'
import type {Youtube} from '@/sanity.types'

function getYoutubeId(url?: string | null): string | null {
  if (!url) return null
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  )
  return match ? match[1] : null
}

export default function YoutubeEmbed({value}: {value: Youtube}) {
  const videoId = getYoutubeId(value?.url)

  if (!videoId) return null

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
