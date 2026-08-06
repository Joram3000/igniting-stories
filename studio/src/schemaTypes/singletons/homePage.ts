import {defineField, defineType} from 'sanity'
import {HomeIcon, ComposeSparklesIcon, ControlsIcon} from '@sanity/icons'

/**
 * Home page schema singleton. Holds all editable copy for the homepage sections
 * (hero, Angela intro, "Van vonk naar vlam", stories heading, CTA).
 */

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero', icon: ComposeSparklesIcon, default: true},
    {name: 'angela', title: 'Angela'},
    {name: 'watIkDoe', title: 'Van vonk naar vlam'},
    {name: 'stories', title: 'Stories'},
    {name: 'cta', title: 'Call to action', icon: ControlsIcon},
  ],
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Titel',
      description: 'Gebruik een regeleinde om de titel over twee regels te verdelen.',
      type: 'text',
      rows: 2,
      initialValue: 'Igniting\nStories',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroKicker',
      title: 'Kicker',
      type: 'string',
      initialValue: 'Maak je verhaal aanstekelijk.',
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryButtonText',
      title: 'Knoptekst (oranje)',
      description: 'Deze knop verwijst altijd naar /verhalen.',
      type: 'string',
      initialValue: 'Bekijk verhalen',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryButtonText',
      title: 'Knoptekst (groen)',
      description: 'Deze knop verwijst altijd naar /contact.',
      type: 'string',
      initialValue: 'Neem contact op',
      group: 'hero',
    }),

    defineField({
      name: 'angelaHeading',
      title: 'Naam',
      type: 'string',
      initialValue: 'Angela Poll',
      group: 'angela',
    }),
    defineField({
      name: 'angelaSubheading',
      title: 'Functie',
      type: 'string',
      initialValue: 'Verhalenvanger',
      group: 'angela',
    }),
    defineField({
      name: 'angelaText',
      title: 'Tekst',
      type: 'text',
      rows: 5,
      initialValue:
        'Jouw verhaal is er al. Het zit in hoe je kijkt, wat je maakt en waarom je doet wat je doet. Met camera, pen en een nieuwsgierige blik leg ik dat vast in beeld en tekst. Ik maak het niet mooier dan het is; ik laat de vonk overslaan.',
      group: 'angela',
    }),
    defineField({
      name: 'angelaButtonText',
      title: 'Knoptekst',
      description: 'Deze knop verwijst altijd naar /over-mij.',
      type: 'string',
      initialValue: 'Meer over mij',
      group: 'angela',
    }),

    defineField({
      name: 'watIkDoeHeading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Van vonk naar vlam',
      group: 'watIkDoe',
    }),
    defineField({
      name: 'watIkDoeSubheading',
      title: 'Subtitel',
      type: 'string',
      initialValue: 'Hiermee steek ik jouw verhaal aan',
      group: 'watIkDoe',
    }),
    defineField({
      name: 'watIkDoeItems',
      title: "Wat ik doe (genummerde lijst)",
      type: 'array',
      group: 'watIkDoe',
      of: [
        {
          type: 'object',
          name: 'watIkDoeItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Beschrijving',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
      initialValue: [
        {
          _key: 'verhalendeContent',
          title: 'Verhalende content',
          description:
            'interviews, video, tekst, fotografie en social posts. Echte mensen en echte verhalen, want dat is wat mensen onthouden.',
        },
        {
          _key: 'branding',
          title: 'Branding',
          description:
            'jouw visie vertaald naar (website)teksten, blogs en beeld, zodat je hele website één verhaal vertelt. Ook webdesign (UX & UI) en webdevelopment zijn mogelijk.',
        },
        {
          _key: 'contentstrategie',
          title: 'Contentstrategie en begeleiding',
          description:
            'eerst bepalen welk verhaal je vertelt, aan wie en waarom. Daarna maak ik de content zelf, of stuur ik jouw team van contentmakers aan zodat het verhaal overal doorklinkt.',
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'storiesHeading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Stories',
      group: 'stories',
    }),

    defineField({
      name: 'ctaHeading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Ken jij een smeulend verhaal?',
      group: 'cta',
    }),
    defineField({
      name: 'ctaText',
      title: 'Tekst',
      type: 'text',
      rows: 3,
      initialValue:
        'Vertel me jouw verhaal. Samen kijken we naar hoe die vonk in jouw verhaal kan overslaan. Ken je iemand anders wiens verhaal verteld moet worden? Tip me!',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Knoptekst',
      description: 'Deze knop verwijst altijd naar /contact.',
      type: 'string',
      initialValue: 'Neem contact op',
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Home Page'}
    },
  },
})
