import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Vimeo video embed. Can be inserted directly into blockContent (portable text).
 */
export const vimeo = defineType({
  name: 'vimeo',
  title: 'Vimeo',
  type: 'object',
  icon: PlayIcon,
  description: 'Een Vimeo video die in de tekst geplaatst kan worden.',
  fields: [
    defineField({
      name: 'url',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Volledige Vimeo URL (bijv. https://vimeo.com/...)',
      validation: (Rule) => [
        Rule.required().error('Een geldige Vimeo URL is vereist om de video te tonen.'),
        Rule.custom((val) => {
          if (!val) return true
          try {
            const u = new URL(val)
            return /^(www\.)?(vimeo\.com|player\.vimeo\.com)$/.test(u.hostname)
              ? true
              : 'URL moet van Vimeo (vimeo.com of player.vimeo.com) zijn'
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
        title: 'Vimeo video',
        subtitle: url || '',
      }
    },
  },
})
