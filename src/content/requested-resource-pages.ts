export type RequestedResourceSection = {
  title: string
  body: string
  link?: string
  download?: { label: string; href: string }
}

export type RequestedResourcePage = {
  slug: string
  title: string
  intro: string
  sections: RequestedResourceSection[]
  images?: Array<{ src: string; alt: string; filename: string }>
}

const page = (slug: string, title: string, intro: string, sections: RequestedResourceSection[], images?: RequestedResourcePage['images']): RequestedResourcePage => ({
  slug,
  title,
  intro,
  sections,
  images,
})

export const requestedResourcePages: RequestedResourcePage[] = [
  page(
    'history-about-nacosti',
    'History about NACOSTI',
    'Science and technology provide the essential means for facilitating economic, social and cultural transformations at national and global levels.',
    [{ title: 'Our history', body: `Science and technology provide the essential means for facilitating economic, social and cultural transformations at national and global levels. Success of national development policies will often largely depend on the extent of integration of modern science and technology in their implementation

In recognition of the importance of science and technology to national development processes, Kenya’s colonial government established a number of scientific research and development facilities especially in the country’s agriculture and health sectors. These included the Scott Agricultural Laboratories in 1903, Coffee Research Services in 1908, Veterinary Research Laboratories in 1910 and Medical Research Laboratory in 1958. Similar efforts in other sectors were made during the nineteen forties and fifties.

After attaining independence in 1963, Kenya established many other Science and Technology (S&T) institutions to harness science and technology in the country’s development priorities. In response to the growth in national S&T and related activities, the post-independence Government sought to have a mechanism through which scientific and technological activities could be coordinated and promoted. This led to the enactment of the Science and Technology Act, Cap 250 of the Laws of Kenya in 1977. The Act established Advisory Research Committees (ARCs) and the National Council for Science and Technology (NCST), a semi-autonomous agency, to serve as advisory institutions to the Government on matters of science and technology.

In an effort to contribute to realization of the Kenya Vision 2030 and other national development goals, which aspires to transform Kenya into a globally competitive, newly industrialized, middle income country founded on a strong foundation on Science and Technology and Innovation with Research playing a key role in generating critical mass of technical and skilled manpower, the Science, Technology and Innovation Act, 2013 was formulated. The Act repealed Cap. 250 of the Laws of Kenya and established the National Commission for Science, Technology and Innovation (NACOSTI) as successor of the National Council for Science and Technology (NCST). The Act will facilitate the promotion, coordination and regulation of the progress of Science, Technology and Innovation (ST&I) in the country.` }],
  ),
  page(
    'mandate-functions',
    'Mandate & Functions',
    'The objective of the Commission shall be to regulate and assure quality in the science, technology and innovation sector and advise the Government in matters related thereto.',
    [{ title: 'Mandate and functions', body: `Mandate

The objective of the Commission shall be to regulate and assure quality in the science, technology and innovation sector and advise the Government in matters related thereto.

Functions

According to the Section 6(1) of the Science, Technology and Innovation Act 2013, the functions of the Commission shall be to:-

1. Develop, in consultation with stakeholders, the priorities in scientific, technological and innovation activities in Kenya in relation to the economic and social policies of the Government, and the country’s international commitments;
2. Lead inter-agency efforts to implement sound policies and budgets, working in collaboration with the county governments, and organisations involved in science and technology and innovation within Kenya and outside Kenya;
3. Advise the national and county governments on the science, technology and innovation policy, including general planning and assessment of the necessary financial resources;
4. Liaise with the National Innovation Agency and the National Research Fund to ensure funding and implementation of prioritized research programmes;
5. Ensure co-ordination and co-operation between the various agencies involved in science, technology and innovation;
6. Accredit research institutes and approve all Scientific research in Kenya;
7. Assure relevance and quality of science, technology and innovation programmes in research institutes;
8. Advise on science education and innovation at both basic and advanced levels;
9. In consultation with the National Research Fund Trustees, sponsor national scientific and academic conferences it considers appropriate;
10. Advise the Government on policies and any issue relating to scientific research systems;
11. Promote increased awareness, knowledge and information of research system;
12. Co-ordinate, monitor and evaluate, as appropriate, activities relating to scientific research and technology development;
13. Promote and encourage private sector involvement in scientific research and innovation and development;
14. Annually, review the progress in scientific research systems and submit a report of its findings and recommendations to the Cabinet Secretary;
15. Promote the adoption and application of scientific and technological knowledge and information necessary in attaining national development goals;
16. Develop and enforce codes, guidelines and regulations in accordance with the policy determined under this Act for the governance, management and maintenance of standards and quality in research systems; and
17. Undertake, or cause to be undertaken, regular inspections, monitoring and evaluation of research institutions to ensure compliance with set standards and guidelines.` }],
  ),
  page(
    'ceos-corner',
    "CEO's Corner",
    'A welcome message from the Acting Director General/CEO of the National Commission for Science, Technology and Innovation.',
    [{ title: 'Dr. David Ngigi — Ag. Director General/CEO', body: `On behalf of the Board, Management and Staff of the National Commission for Science, Technology and Innovation (NACOSTI), I take this opportunity to welcome you to NACOSTI Website whose main purpose is to facilitate communication and sharing of information, knowledge, best practices and tools for research, accreditation and quality assurance. I thank you for taking time to visit our website and share in our vision, taking note that ST&I is the key to socio-economic development of our country, Kenya.

National Commission for Science, Technology and Innovation (NACOSTI) is established under the Science Technology and Innovation Act, 2013. The mandate of NACOSTI is to regulate and assure quality in the research, science, and technology and innovation sector and advise the Government in matters related thereto. In so doing, the Commission shall Regulate, Coordinate, Advise and promote Science, Technology, Innovation and Research activities in the country.

Among other functions of NACOSTI include; developing priorities in scientific, technological and innovation activities in Kenya, Registration and Accreditation of Research Institutions, Licensing of Research and assuring relevance and quality of research programmes in research institutions, coordinating and evaluating activities relating to scientific research and technology development, annually reviewing the progress in scientific systems, and promoting the adoption and application of scientific and technological knowledge in attaining national development.

Further, the Science, Technology and Innovation (ST&I), Legal Notice No. 108 (Research Licensing) Regulations, 2014 obligates all persons intending to undertake scientific research in Kenya to obtain a license in accordance to the Act. In this regard, we have made this process easy and convenient for you all by making it available online.

I trust that you will enjoy interacting with the resources we have put in it for you. Feel free to contact us through our telephone numbers, email and all our social media platforms.` }, { title: 'NACOSTI State-of-the-Art Building', body: 'The Commission’s headquarters supports the delivery of research licensing, accreditation, quality assurance and advisory services.' }],
    [{ src: '/images/Dr.-David-Ngigi.jpg', alt: 'Dr. David Ngigi', filename: 'Dr.-David-Ngigi.jpg' }, { src: '/images/NACOSTI-HQ.jpg', alt: 'NACOSTI State-of-the-Art Building', filename: 'NACOSTI-HQ.jpg' }],
  ),
  page('commisioners', 'Board of the Commission', 'The Board of Commissioners provides strategic governance, policy leadership and fiduciary oversight for NACOSTI.', [
    { title: 'Board of the Commission', body: 'Prof. Shaukat Abdulrazak, PhD, EBS\nProf. Vasey Mwaja\nDr. Davidson M. Mwaisaka\nDr. Michael N. Walekhwa\nMr. Joel Onditi\n\nThe Board provides oversight for the Commission and guides the national science, technology and innovation agenda through its statutory committees.' },
  ]),
  page('management', 'Management', 'The executive management team operationalizes Commission policy and leads day-to-day service delivery.', [
    { title: 'Executive management', body: 'Dr. David Ngigi — Ag. Director General/CEO\n\nDr. Ngigi successfully coordinated NACOSTI initiatives to operationalize the Government Science, Technology and Innovation Fund, intensifying innovation and uptake of STI outputs in priority areas aligned with Vision 2030.\n\nThe management team includes leadership for Research, Accreditation and Quality Assurance; Scheduled Sciences; Corporate Services; Supply Chain Management; and other operational functions.' },
  ]),
  page('directorate-of-research-accreditation-and-quality-assurance', 'Directorate of Research, Accreditation & Quality Assurance', 'The Directorate regulates research, registers institutions, accredits ethics review committees and assures quality across Kenya’s research system.', [
    { title: 'Research licensing and accreditation', body: 'The Directorate processes research licensing, registration and accreditation of research institutions, accreditation of Institutional Scientific and Ethics Review Committees (ISERCs), and quality assurance of research programmes. It also monitors compliance with the Science, Technology and Innovation Act and related regulations.' },
  ]),
  page('directorate-of-s-s', 'Directorate of Scheduled Sciences', 'The Directorate coordinates scheduled sciences and supports responsible development and application of scientific knowledge and technologies.', [
    { title: 'Scheduled sciences', body: 'The Directorate provides technical coordination, guidance and oversight for scheduled science activities, supports national and international scientific cooperation, and promotes safe, ethical and quality scientific practice.' },
  ]),
  page('directorate-of-corporate-services', 'Directorate of Corporate Services', 'The Directorate provides the corporate, financial, human-resource, procurement, ICT and administrative services that enable NACOSTI to deliver its mandate.', [
    { title: 'Corporate support', body: 'Corporate Services coordinates planning, finance, human-resource management, supply-chain management, communications, records, legal support and institutional administration.' },
  ]),
  page('advisory', 'Advisory', 'NACOSTI provides evidence-informed advice on science, technology and innovation matters affecting national development.', [
    { title: 'Advisories', body: 'Advisories include Strengthening Intellectual Property Rights for Research and Innovation and Opportunities to Advance Artificial Intelligence and other emerging technologies. NACOSTI advisories support policy makers, researchers, institutions and industry with practical STI guidance.' },
  ]),
  page('collaborations-and-partnership', 'Collaborations and Partnership', 'NACOSTI works with national, regional and international partners to advance science, technology, innovation and research.', [
    { title: 'Partnerships', body: 'The Commission collaborates with government agencies, universities, research institutions, private-sector organisations, development partners and international scientific bodies to mobilize expertise, coordinate programmes, share knowledge and strengthen Kenya’s STI ecosystem.' },
  ]),
  page('registration-of-research-institutions-in-kenya', 'Registration of Research Institutions in Kenya', 'Research institutions operating in Kenya are required to register with NACOSTI in accordance with the Science, Technology and Innovation Act, 2013.', [
    { title: 'Registration', body: 'Institutional registration supports quality assurance, accountability and coordination of research in Kenya. Applicants should provide institutional details, governance information, research focus, facilities and the required supporting documentation through the Commission’s designated process.' },
  ]),
  page('accreditation-of-institutional-ethics-review-committees-iercs', 'Accreditation of Institutional Scientific and Ethics Review Committees', 'NACOSTI accredits Institutional Scientific and Ethics Review Committees (ISERCs) to protect research participants and assure ethical, scientific and quality review.', [
    { title: 'Accreditation', body: 'Institutions seeking accreditation should demonstrate an appropriate committee structure, qualified membership, documented standard operating procedures, conflict-of-interest controls, records management and capacity to independently review research proposals. Accreditation supports ethical and scientifically sound research in Kenya.' },
  ]),
  page('accredited-isercs-in-kenya', 'Accredited ISERCs in Kenya', 'A directory of Institutional Scientific and Ethics Review Committees accredited by NACOSTI.', [
    { title: 'Accredited Institutional Scientific and Ethics Review Committees', body: 'This directory provides access to ISERCs accredited for research review in Kenya. Researchers should confirm the committee’s current scope and approval status before submitting a protocol.' },
    { title: 'ISERCs accredited for clinical trials', body: 'Clinical-trial researchers should use a committee whose accreditation specifically covers clinical trials and should also obtain any additional approvals required by the relevant authorities.' },
  ]),
  page('careers', 'Careers', 'Career opportunities at the National Commission for Science, Technology and Innovation.', [
    { title: 'Current opportunities', body: 'We currently have no open positions. When vacancies arise, they will be advertised on this page and through our official communication channels.' },
  ]),
  page('faqs', 'Frequently Asked Questions', 'Answers to common questions about research licensing, institutional registration and research ethics.', [
    { title: 'Do you grant Research Licenses to individuals and consultants?', body: 'Yes. NACOSTI grants Research Licences to individuals, including independent researchers and consultants, who intend to undertake research in Kenya.' },
    { title: 'How do you obtain a research license in Kenya?', body: 'Applications for a Research Licence are submitted online through the NACOSTI research licensing portal at research-portal.nacosti.go.ke.' },
    { title: 'Does institutional registration exempt a researcher from licensing?', body: 'No. Researchers working for universities, research institutes, government institutions, private organisations, NGOs or other research institutions should obtain a Research Licence before undertaking research in Kenya.' },
    { title: 'Is ethical approval required?', body: 'Ethical approval is desirable for research involving human participants, personal information, biological materials or other sensitive issues. Approval should be sought from a local accredited ISERC.' },
  ]),
  page('newletters', 'Newsletters', 'NACOSTI newsletters and institutional updates.', [{ title: 'NACOSTI newsletters', body: 'This page will host NACOSTI newsletters and official institutional updates as they are published.' }]),
  page('reports-on-international-collaborations', 'Reports on International Collaborations', 'Reports describing NACOSTI’s international collaborations and scientific partnerships.', [{ title: 'International collaboration reports', body: 'This page will host reports on international collaborations, programme outcomes and partnership activities.' }]),
  page('tenders', 'Tenders', 'Procurement notices and tender information from NACOSTI.', [{ title: 'NACOSTI e-Procurement', body: 'Welcome to the NACOSTI e-Procurement information page. Tender notices and electronic government procurement opportunities are published through the official procurement channels.' }]),
  page('videos-audios', 'Videos & Audios', 'NACOSTI videos, audio resources and public information materials.', [{ title: 'Videos', body: 'Explore NACOSTI videos and public information materials.' }, { title: 'Audios', body: 'Audio output of the NACOSTI Service Charter and other official audio resources will be made available here.' }]),
  page('latest', 'News', 'Latest news and updates from NACOSTI.', [{ title: 'Latest updates', body: 'The latest NACOSTI news and announcements will continue to be rendered through the existing news feed without changing its rendering logic.' }]),
  page('fellowships-and-grants', 'Fellowships and Grants', 'Fellowship, grant and research opportunity information for the science, technology and innovation community.', [{ title: 'Opportunities', body: 'This page will host fellowships, grants and related opportunities as they are announced by NACOSTI and its partners.' }]),
]
