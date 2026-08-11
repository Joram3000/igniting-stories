import {VideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * YouTube video embed. Can be inserted directly into blockContent (portable text).
 */
export const youtube = defineType({
  name: 'youtube',
  title: 'YouTube',
  type: 'object',
  icon: VideoIcon,
  description: 'Een YouTube video die in de tekst geplaatst kan worden.',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      description: 'Volledige YouTube URL (bijv. https://www.youtube.com/watch?v=...)',
      validation: (Rule) => [
        Rule.required().error('Een geldige YouTube URL is vereist om de video te tonen.'),
        Rule.custom((val) => {
          if (!val) return true
          try {
            const u = new URL(val)
            return /^(www\.)?(youtube\.com|youtu\.be)$/.test(u.hostname)
              ? true
              : 'URL moet van YouTube (youtube.com of youtu.be) zijn'
          } catch {
            return 'Ongeldige URL'
          }
        }),
      ],
    }),
  ],
  preview: {
    select: {url: 'url'},
    prepare({url}) {
      return {
        title: 'YouTube video',
        subtitle: url || '',
      }
    },
  },
})
