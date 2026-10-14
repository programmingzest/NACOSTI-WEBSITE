const BASE = 'https://www.nacosti.go.ke'

export const contact = {
  phone: '0204007000',
  phoneHref: 'tel:+254204007000',
  email: 'info@nacosti.go.ke',
  address: 'off Waiyaki Way, Upper Kabete',
}

export const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/NACOSTI' },
  { name: 'X (Twitter)', href: 'https://twitter.com/nacosti' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCcQWA5B4hLZ-ij4J4GT2nVA' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nacosti/' },
  { name: 'Instagram', href: 'https://www.instagram.com/nacosti/' },
] as const

export type NavLink = { label: string; href: string; description?: string }
export type NavGroup = { title?: string; links: NavLink[] }
export type NavItem = { label: string; href?: string; groups?: NavGroup[] }

export const navigation: NavItem[] = [
  { label: 'Home', href: '#top' },
  {
    label: 'About Us',
    groups: [
      {
        title: 'The Commission',
        links: [
          { label: 'History about NACOSTI', href: `${BASE}/history-about-nacosti/`, description: 'Our journey since inception' },
          { label: 'Mandate & Functions', href: `${BASE}/mandate-functions/`, description: 'What the STI Act requires of us' },
          { label: 'Vision, Mission & Core Values', href: `${BASE}/vision-mission-core-values/`, description: 'The principles that guide us' },
          { label: 'Quality Policy', href: `${BASE}/quality-policy/` },
          { label: 'Corporate Objectives', href: `${BASE}/corporate-objectives-2/` },
        ],
      },
      {
        title: 'Leadership',
        links: [
          { label: 'Board of the Commission', href: `${BASE}/commisioners/` },
          { label: 'Management', href: `${BASE}/management/` },
          { label: "CEO's Corner", href: `${BASE}/about-us/home/ceos-corner/` },
        ],
      },
      {
        title: 'Directorates',
        links: [
          { label: 'Research, Accreditation & Quality Assurance', href: `${BASE}/directorate-of-research-accreditation-and-quality-assurance/` },
          { label: 'Scheduled Sciences', href: `${BASE}/directorate-of-s-s/` },
          { label: 'Corporate Services', href: `${BASE}/directorate-of-corporate-services/` },
        ],
      },
    ],
  },
  {
    label: 'Programmes',
    groups: [
      {
        links: [
          { label: 'Advisory', href: `${BASE}/advisory/`, description: 'Policy advice on STI matters' },
          { label: 'Collaborations and Partnership', href: `${BASE}/collaborations-and-partnership/`, description: 'Local and international cooperation' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    groups: [
      {
        links: [
          { label: 'Research Licensing', href: 'https://research-portal.nacosti.go.ke/', description: 'Apply online via RIMS' },
          { label: 'Registration of Research Institutions', href: `${BASE}/registration-of-research-institutions-in-kenya/` },
          { label: 'Accreditation of ISERCs', href: `${BASE}/accreditation-of-institutional-ethics-review-committees-iercs/` },
          { label: 'Accredited ISERCs in Kenya', href: `${BASE}/accredited-isercs-in-kenya/` },
          { label: 'Accreditation of Research Institutions', href: `${BASE}/accreditation-of-research-institutions/` },
          { label: 'National Scientific & Ethics Review System', href: 'https://nsers.nacosti.go.ke/' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    groups: [
      {
        links: [
          { label: 'Careers', href: `${BASE}/careers/` },
          { label: 'FAQs', href: `${BASE}/faqs/` },
          { label: 'Newsletters', href: `${BASE}/newletters/` },
          { label: 'Reports on International Collaborations', href: `${BASE}/reports-on-international-collaborations/` },
          { label: 'Tenders', href: `${BASE}/tenders/` },
          { label: 'Videos & Audios', href: `${BASE}/videos-audios/` },
        ],
      },
    ],
  },
  { label: 'PC-MDAs', href: 'https://stipc.nacosti.go.ke/' },
  {
    label: 'News & Events',
    groups: [
      {
        title: 'Updates',
        links: [
          { label: 'News', href: `${BASE}/category/latest/` },
          { label: 'Fellowships and Grants', href: `${BASE}/resources/fellowships-and-grants/` },
        ],
      },
      {
        title: 'Conference',
        links: [
          { label: '4th MS-CORSTI | 2025', href: 'https://ms-corsti.nacosti.go.ke/' },
          { label: '3rd MS-CORSTI | 2024', href: 'https://ms-corsti2024.nacosti.go.ke/' },
          { label: '2nd MS-CORSTI | 2023', href: 'https://ms-costi.nacosti.go.ke/' },
          { label: '1st MS-CORSTI | 2021', href: `${BASE}/nacosti/Docs/2021/Multisectoral%20STI%20Conference%20Resolutions.pdf` },
        ],
      },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    title: 'NACOSTI Strengthens Research Ethics and Integrity Capacity through Five-day Training',
    excerpt:
      'The Commission convened a five-day Research Ethics and Integrity Capacity Strengthening Programme bringing together experts, researchers, ethics review committees and universities.',
    image: '/hero-ethics-training.png',
    tag: 'Research Ethics',
    date: 'September 24, 2026',
    href: `${BASE}/2026/09/24/nacosti-strengthens-research-ethics-and-integrity-capacity-through-five-day-training/`,
  },
  {
    title: 'Africa Rallies to Inspire Next-Generation Nuclear Scientists',
    excerpt:
      'Kenya hosted a major regional summit bringing together educators, researchers, policymakers and African scientists to transform public perception and education in nuclear science and technology.',
    image: '/hero-nuclear-science.png',
    tag: 'Scheduled Sciences',
    date: 'September 10, 2026',
    href: `${BASE}/2026/09/10/africa-rallies-to-inspire-next-generation-nuclear-scientists/`,
  },
  {
    title: 'IAEA Regional Meeting on Climate, Land-Use, Energy and Water Systems Opens in Nairobi',
    excerpt:
      'The International Atomic Energy Agency Regional Meeting on the Development of Approaches to Climate, Land-Use, Energy and Water Systems (CLEWS) officially commenced in Nairobi.',
    image: '/hero-climate-meeting.png',
    tag: 'Partnerships',
    date: 'August 5, 2026',
    href: `${BASE}/2026/08/05/nacosti-hosts-iaea-regional-meeting-on-climate-land-use-energy-and-water-systems/`,
  },
]

export const eServices = [
  {
    title: 'Research Information Management System (RIMS)',
    description:
      'All persons intending to undertake research in the country are required to apply for a Research License. Applications are submitted online.',
    cta: 'Apply for a license',
    href: 'https://research-portal.nacosti.go.ke/',
    icon: 'microscope',
  },
  {
    title: 'STI Mainstreaming Tool',
    description:
      'All MDAs are required to prepare and submit quarterly performance reports online to NACOSTI within 15 days following the end of a quarter.',
    cta: 'Submit STI report',
    href: 'https://stipc.nacosti.go.ke/',
    icon: 'chart',
  },
  {
    title: 'NACOSTI on eCitizen',
    description:
      'Apply and pay for certified, top-quality NACOSTI services conveniently through your eCitizen account.',
    cta: 'Access via eCitizen',
    href: 'https://nacosti.ecitizen.go.ke/',
    icon: 'id',
  },
] as const

export const mandates = [
  {
    key: 'regulate',
    title: 'Regulate',
    image: '/mandate-regulate.png',
    summary:
      'We license research, register research institutions and accredit ethics review committees to assure quality and integrity across the STI sector.',
    points: [
      'Research licensing through RIMS',
      'Registration and accreditation of research institutions',
      'Accreditation of Institutional Scientific & Ethics Review Committees',
    ],
  },
  {
    key: 'advise',
    title: 'Advise',
    image: '/mandate-advise.png',
    summary:
      "We advise the national and county governments on STI policy, priorities and investments that drive Kenya's socio-economic transformation.",
    points: [
      'Development of national STI priorities',
      'Evidence-based policy reviews and advisories',
      'Guidance on STI financing and infrastructure',
    ],
  },
  {
    key: 'coordinate',
    title: 'Coordinate',
    image: '/mandate-coordinate.png',
    summary:
      'We bring together ministries, counties, institutions and international partners to align efforts and strengthen the national innovation system.',
    points: [
      'STI mainstreaming in MDAs and counties',
      'Multi-agency and multi-sectoral collaboration',
      'International STI cooperation and diplomacy',
    ],
  },
  {
    key: 'promote',
    title: 'Promote',
    image: '/mandate-promote.png',
    summary:
      'We champion a culture of science, technology and innovation by celebrating discovery, supporting talent and communicating STI to the public.',
    points: [
      'STI awareness, communication and outreach',
      'Talent development and next-generation workforce',
      'Annual Multi-Sectoral Conference on STI (MS-CORSTI)',
    ],
  },
] as const

export const priorities = [
  { title: 'R&D Priorities, Advancement, Financing & Infrastructure', detail: 'R&D Priorities, R&D Advancement, R&D Financing, and R&D Infrastructure Development', icon: 'flask' },
  { title: 'STI Education, Talent & Next-generation Workforce', detail: 'Science, Technology and Innovation (STI) Education, Communication, Talent Development, and Next-generation Workforce', icon: 'graduation' },
  { title: 'STI Inclusivity, Advocacy, Diplomacy & Policy', detail: 'STI Inclusivity, Advocacy, Diplomacy, and Policy Reviews', icon: 'scale' },
  { title: 'Technology Protection, Diffusion & Commercialization', detail: 'Technology Protection, Diffusion, and Commercialization', icon: 'shield' },
  { title: 'Health Security & Substance Abuse Mitigation', detail: 'Health Security, and Substance Abuse Mitigation (including Pharmaceuticals/Traditional medicine Production)', icon: 'heart' },
  { title: 'Food Security, Nutrition & Smart Agriculture', detail: 'STI for Food Security, Nutrition, Smart Agriculture, and harnessing of indigenous knowledge and technologies', icon: 'sprout' },
  { title: 'Fifth Industrial Revolution & Digital Economy', detail: 'The Fifth Industrial Revolution, Digital Economy, Data Governance and Emerging/Frontier Technologies', icon: 'cpu' },
  { title: 'SDGs, Climate Change & the Blue Economy', detail: 'STI for SDGs, Climate Change Mitigation, and Harnessing of the Blue Economy/Aquatic Resources', icon: 'waves' },
  { title: 'National Security, Public Safety & Emergency Response', detail: 'STI for National Security, Public safety and Emergency Response', icon: 'siren' },
  { title: 'STI Mainstreaming in MDAs & Counties', detail: 'STI Mainstreaming in Ministries, Departments, Counties, Institutions, and Agencies', icon: 'building' },
  { title: 'Multi-Agency & International Partnerships', detail: 'Strategic Multi-Agency, Multi-Sectoral, and International Cooperation and Partnerships', icon: 'globe' },
  { title: 'Sustainable Urbanization & Resilient Communities', detail: 'STI for Sustainable Urbanization, County Development, and Resilient Communities', icon: 'city' },
] as const

export const informationCentre = [
  { label: 'STI Act No. 28 of 2013', href: 'https://kenyalaw.org/akn/ke/act/2013/28/eng@2026-06-16', type: 'Legislation' },
  { label: 'STI Regulations 2014', href: `${BASE}/nacosti/Docs/Information%20Centre/The-Science-Technology-and-Innovation-Regulations-2014.pdf`, type: 'PDF' },
  { label: 'National STI Priorities', href: `${BASE}/nacosti/Docs/2024/National%20STI%20Priorities.pdf`, type: 'PDF' },
  { label: 'Accredited ISERCs', href: `${BASE}/accredited-isercs-in-kenya/`, type: 'Directory' },
  { label: 'Registered Research Institutions', href: `${BASE}/nacosti/Docs/Information%20Centre/Registered%20Research%20Institutions.pdf`, type: 'PDF' },
  { label: 'NACOSTI Strategic Plan 2023–2027', href: `${BASE}/nacosti/Docs/Information%20Centre/NACOSTI%20Strategic%20Plan%202023-2027.pdf`, type: 'PDF' },
  { label: 'NACOSTI Service Charter', href: `${BASE}/nacosti/Docs/Information%20Centre/NACOSTI-SERVICE-CHARTER%20Dec%202018.pdf`, type: 'PDF' },
] as const

export const serviceCharterAudio = `${BASE}/nacosti/Audio/Audio%20Output%20of%20NACOSTI%20Service%20Charter%20-Kiswahili.mp3`
export const serviceChargesHref = `${BASE}/research-licensing-fees/`
export const prioritiesPdf = `${BASE}/nacosti/Docs/2024/National%20STI%20Priorities.pdf`
export const newsHref = `${BASE}/category/latest/`

export const conferences = [
  { edition: '1st', year: '2021', label: 'Conference Resolutions', href: `${BASE}/nacosti/Docs/2021/Multisectoral%20STI%20Conference%20Resolutions.pdf` },
  { edition: '2nd', year: '2023', label: 'MS-CORSTI 2023', href: 'https://ms-costi.nacosti.go.ke/' },
  { edition: '3rd', year: '2024', label: 'MS-CORSTI 2024', href: 'https://ms-corsti2024.nacosti.go.ke/' },
  { edition: '4th', year: '2025', label: 'MS-CORSTI 2025', href: 'https://ms-corsti.nacosti.go.ke/' },
]

export const partners = [
  { name: 'Ministry of Education', short: 'MoE' },
  { name: 'National Research Fund Kenya', short: 'NRF' },
  { name: 'Kenya National Innovation Agency', short: 'KeNIA' },
  { name: 'East African Science and Technology Commission', short: 'EASTECO' },
  { name: 'African Regional Cooperative Agreement for Nuclear Science and Technology', short: 'AFRA' },
  { name: 'Biological Weapons Convention', short: 'BWC' },
  { name: 'International Science Council', short: 'ISC' },
  { name: 'International Centre for Genetic Engineering and Biotechnology', short: 'ICGEB' },
  { name: 'Comprehensive Nuclear-Test-Ban Treaty Organization', short: 'CTBTO' },
]

export const relatedSites = [
  { label: 'Office of the Prime Cabinet Secretary & Ministry of Foreign and Diaspora Affairs', href: 'https://primecs.go.ke/' },
  { label: 'State Department for Science, Research and Innovation', href: 'https://sri.go.ke/' },
  { label: 'National Research Fund', href: 'https://www.nrf.go.ke/' },
  { label: 'Kenya National Innovation Agency', href: 'https://kenia.go.ke/' },
  { label: 'National Scientific and Ethics Review System (NSERS)', href: 'https://nsers.nacosti.go.ke/' },
]

export const eResources = [
  { label: 'Research Licensing Portal', href: 'https://research-portal.nacosti.go.ke/' },
  { label: 'STI-PC MDAs Portal', href: 'https://stipc.nacosti.go.ke/' },
  { label: 'Staff Mail', href: 'https://www.office.com/' },
  { label: 'E-Procurement', href: 'https://eprocurement.nacosti.go.ke:8099/' },
]

export const icgebLinks = [
  { label: 'Fellowships', href: 'https://www.icgeb.org/fellowship/' },
  { label: 'Grants', href: 'https://www.icgeb.org/grants/' },
  { label: 'Meetings & Courses', href: 'https://www.icgeb.org/meeting-and-courses/' },
]   