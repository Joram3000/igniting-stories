import {defineField, defineType} from 'sanity'
import {BookIcon, SearchIcon} from '@sanity/icons'

/**
 * Verhalen (overview) page schema singleton. Holds the editable heading/intro copy.
 */

export const verhalenPage = defineType({
  name: 'verhalenPage',
  title: 'Verhalen Pagina',
  type: 'document',
  icon: BookIcon,
  groups: [{name: 'content', title: 'Inhoud', default: true}, {name: 'seo', title: 'SEO', icon: SearchIcon}],
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Verhalen',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introtekst',
      type: 'text',
      rows: 2,
      initialValue: 'Interviews met mensen die een vuurtje aanwakkeren. In tekst en beeld.',
      group: 'content',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO titel',
      type: 'string',
      initialValue: 'Verhalen',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO beschrijving',
      type: 'text',
      rows: 2,
      initialValue:
        'Interviews met mensen die zich op een inspirerende manier inzetten om het leven mooier te maken.',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Verhalen Pagina'}
    },
  },
})
