import {defineField, defineType} from 'sanity'
import {EnvelopeIcon, ComposeSparklesIcon, SearchIcon} from '@sanity/icons'

/**
 * Contact page schema singleton. Holds all editable copy for the contact page.
 */

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Pagina',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [
    {name: 'content', title: 'Inhoud', icon: ComposeSparklesIcon, default: true},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Tip een verhaal',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Tekst',
      type: 'text',
      rows: 4,
      initialValue:
        'Ken jij iemand die zich op een inspirerende manier inzet om het leven mooier te maken? Of heb je zelf zo’n verhaal? Stuur me een mailtje: vertel kort wie het is en waarom dit verhaal verteld mag worden.',
      group: 'content',
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
      initialValue: 'angela@kibbelingmedia.nl',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mailSubject',
      title: 'Onderwerp van de mail-knop',
      type: 'string',
      initialValue: 'Verhaaltip voor Igniting Stories',
      group: 'content',
    }),
    defineField({
      name: 'mailButtonText',
      title: 'Knoptekst',
      type: 'string',
      initialValue: 'Mail je verhaaltip',
      group: 'content',
    }),
    defineField({
      name: 'directText',
      title: 'Tekst voor het directe e-mailadres',
      description: 'Bijvoorbeeld: "Of mail direct naar" — het e-mailadres wordt erachter getoond.',
      type: 'string',
      initialValue: 'Of mail direct naar',
      group: 'content',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO titel',
      type: 'string',
      initialValue: 'Contact',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO beschrijving',
      type: 'text',
      rows: 2,
      initialValue: 'Tip een verhaal of neem contact op met Igniting Stories.',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Pagina'}
    },
  },
})
