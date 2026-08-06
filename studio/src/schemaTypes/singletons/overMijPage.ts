import {defineField, defineType} from 'sanity'
import {UserIcon, ComposeSparklesIcon, ControlsIcon, SearchIcon} from '@sanity/icons'

/**
 * Over mij page schema singleton. Holds all editable copy for the "Over mij" page.
 */

export const overMijPage = defineType({
  name: 'overMijPage',
  title: 'Over mij Pagina',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'content', title: 'Inhoud', icon: ComposeSparklesIcon, default: true},
    {name: 'cta', title: 'Call to action', icon: ControlsIcon},
    {name: 'seo', title: 'SEO', icon: SearchIcon},
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Nieuwsgierig',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Tekst',
      description: 'Laat een lege regel tussen alinea’s om ze los van elkaar weer te geven.',
      type: 'text',
      rows: 20,
      group: 'content',
      initialValue: `Ik ben Angela Poll. Ik haal mijn dagelijkse dopamine uit inspirerende, hoopvolle verhalen en visies. Ik geloof dat we dat nodig hebben om elkaar beter te begrijpen en hopelijk verder te komen om de wereld een mooiere plek te maken. Zo steken we elkaar aan, op een goede manier.

Door de jaren heen heb ik met verschillende disciplines leren werken om die verhalen vast te leggen, of te transformeren naar een vorm die de doelgroep goed kan bereiken. Video, foto, tekst, geluid of een combinatie daarvan: als ik datgene maar kan vastleggen waar de belangrijkste boodschap in zit.

Als kind deed ik niets liever dan mijn fantasie gebruiken en verhalen schrijven, of ze zelf 'spelen'. Totdat ik door een schoolopdracht het interviewen ontdekte. Nadat ik de lokale dierenarts aan een verhoor had onderworpen, wist ik het: ik wil dit altijd blijven doen.

Een paar jaar na mijn bachelor Journalistiek heb ik een traineeship Digital Marketing gedaan, zodat ik ook leerde hoe je content inzet als strategie om verbinding te maken met je doelgroep. Ook pakte ik de camera weer op om mensen en momenten op een mooie manier vast te leggen. In 2024 besloot ik hierin verder te gaan met een opleiding Film & Edit, waar ik naast documentaire ook het fictie-filmdomein verkende. Niet-waargebeurde verhalen tot leven wekken is óók heel interessant, en zeker wanneer aandachtig doordachte cinematografie daar een grote rol in speelt. Ik probeer dit dan ook altijd terug te laten komen in wat ik maak.

Ik volg waar mijn nieuwsgierigheid me leidt. En ik hoop dat onze paden elkaar kruisen om jouw verhaal te ontdekken!`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Titel',
      type: 'string',
      initialValue: 'Samenwerken of een verhaal tippen?',
      group: 'cta',
    }),
    defineField({
      name: 'ctaText',
      title: 'Tekst',
      type: 'string',
      initialValue: 'Ik hoor graag van je.',
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
    defineField({
      name: 'metaTitle',
      title: 'SEO titel',
      type: 'string',
      initialValue: 'Over mij',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO beschrijving',
      type: 'text',
      rows: 2,
      initialValue: 'Wie zit er achter Igniting Stories?',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Over mij Pagina'}
    },
  },
})
