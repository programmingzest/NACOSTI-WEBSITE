export type RequestedResourceSection = {
  title: string
  body: string
  link?: string
  linkLabel?: string
  download?: { label: string; href: string }
  table?: { headers: string[]; rows: string[][] }
}

export type ResourceProfile = {
  name: string
  role: string
  bio: string
  image: string
  imageFilename: string
}

export type RequestedResourcePage = {
  slug: string
  title: string
  intro: string
  sections: RequestedResourceSection[]
  images?: Array<{ src: string; alt: string; filename: string }>
  profiles?: ResourceProfile[]
}

const page = (
  slug: string,
  title: string,
  intro: string,
  sections: RequestedResourceSection[],
  images?: RequestedResourcePage['images'],
  profiles?: RequestedResourcePage['profiles'],
): RequestedResourcePage => ({
  slug,
  title,
  intro,
  sections,
  images,
  profiles,
})

export const requestedResourcePages: RequestedResourcePage[] = [
  page(
    'about-nacosti',
    'About NACOSTI',
    'NACOSTI is Kenya’s national commission for science, technology and innovation, guiding the country’s research and innovation ecosystem.',
    [
      { title: 'Our history', body: 'NACOSTI grew from the National Council for Science and Technology, established in 1977 to coordinate scientific work in Kenya. The Science, Technology and Innovation Act, 2013 established NACOSTI as the Council’s successor with a broader role in regulation, coordination and quality assurance.' },
      { title: 'Mandate and functions', body: 'The Commission regulates and assures quality in science, technology and innovation while advising the Government. It sets national STI priorities, coordinates research stakeholders, licenses research, registers and accredits institutions, and promotes responsible research and innovation.' },
      { title: 'Vision, mission and values', body: 'Our vision is a globally competitive STI system for sustainable development. Our mission is to facilitate, coordinate, regulate and assure quality in STI through policy leadership and collaboration. Integrity, professionalism, excellence, inclusivity, accountability and customer-focused service guide our work.' },
    ],
  ),
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
    [{ src: 'images/Dr.-David-Ngigi.jpg', alt: 'Dr. David Ngigi', filename: 'Dr.-David-Ngigi.jpg' }, { src: 'images/NACOSTI-HQ.jpg', alt: 'NACOSTI State-of-the-Art Building', filename: 'NACOSTI-HQ.jpg' }],
  ),
  page(
    'commisioners',
    'Board of the Commission',
    'The Board of Commissioners provides strategic governance, policy leadership and fiduciary oversight for NACOSTI. Select a commissioner to view the brief biography.',
    [{ title: 'Board responsibility', body: 'The Board provides oversight for the Commission and guides the national science, technology and innovation agenda through its statutory committees.' }],
    undefined,
    [
      { name: 'Prof. Shaukat Abdulrazak, PhD, EBS', role: 'Chairperson', bio: 'A science and innovation leader who has served Kenya through national research policy, coordination and institutional leadership.', image: 'images/commissioners/Prof-Shaukat-Abdulrazak.jpg', imageFilename: 'Prof-Shaukat-Abdulrazak.jpg' },
      { name: 'Prof. Vasey Mwaja', role: 'Member', bio: 'An internationally respected science leader whose career spans agricultural innovation, science governance reform and positioning science as a pillar of sustainable development. He earned his PhD in Agriculture from the University of Illinois at Urbana-Champaign.', image: 'images/commissioners/Prof-Vasey-Mwaja.jpg', imageFilename: 'Prof-Vasey-Mwaja.jpg' },
      { name: 'Dr. Davidson Mghanga Mwaisaka', role: 'Member', bio: 'Managing Partner of Mwaisaka Muthuuri Advocates LLP, an Advocate of the High Court of Kenya, Governance Auditor, Associate Chartered Arbitrator and Certified Public Secretary. He contributes expertise in regulatory compliance, risk management and administrative strategy.', image: 'images/commissioners/Dr-Davidson-Mghanga-Mwaisaka.jpg', imageFilename: 'Dr-Davidson-Mghanga-Mwaisaka.jpg' },
      { name: 'Dr. Michael N. Walekhwa', role: 'Member', bio: 'A board member contributing professional and scientific expertise to the Commission’s mandate of regulating, assuring quality and advising Government on science, technology and innovation.', image: 'images/commissioners/Dr-Michael-N-Walekhwa.jpg', imageFilename: 'Dr-Michael-N-Walekhwa.jpg' },
      { name: 'Mr. Joel Onditi', role: 'Member', bio: 'A member of the Board supporting strategic oversight, accountability and delivery of the Commission’s statutory responsibilities.', image: 'images/commissioners/Mr-Joel-Onditi.jpg', imageFilename: 'Mr-Joel-Onditi.jpg' },
      { name: 'Prof. Dickson Andala', role: 'Member, National Research Fund representative', bio: 'Chief Executive Officer of the National Research Fund and Associate Professor of Materials / Inorganic Chemistry at Multimedia University of Kenya. He holds a PhD in Materials Chemistry from Binghamton University and has served in senior leadership and professional science roles.', image: 'images/commissioners/Prof-Dickson-Andala.jpg', imageFilename: 'Prof-Dickson-Andala.jpg' },
    ],
  ),
  page(
    'management',
    'Management',
    'The executive management team operationalizes Commission policy and leads day-to-day service delivery. Select a manager to view the brief biography.',
    [{ title: 'Executive management', body: 'Management coordinates the Commission’s directorates and corporate functions to deliver research licensing, accreditation, quality assurance and advisory services.' }],
    undefined,
    [
      { name: 'Dr. David Ngigi', role: 'Ag. Director General/CEO', bio: 'Dr. Ngigi coordinated NACOSTI initiatives to operationalize the Government Science, Technology and Innovation Fund. Through his leadership, the STI Fund grew to nurture and support over 1,800 research and innovation projects. He was also a pioneer member of the secretariat that operationalized the National Research Fund.', image: 'images/management/Dr-David-Ngigi.jpg', imageFilename: 'Dr-David-Ngigi.jpg' },
      { name: 'Mr. Gideon K. Kirui', role: 'Director, Corporate Services', bio: 'Mr. Kirui holds a Master of Business Administration, a Bachelor of Commerce degree and is a member of ICPAK and the Institute of Certified Secretaries. He has served in public-sector institutions in accounting, financial management and administration.', image: 'images/management/Mr-Gideon-K-Kirui.jpg', imageFilename: 'Mr-Gideon-K-Kirui.jpg' },
    ],
  ),
  page('directorate-of-research-accreditation-and-quality-assurance', 'Directorate of Research, Accreditation And Quality Assurance', 'The Directorate of Research, Accreditation and Quality Assurance (DRAQA) implements the core mandate of the Commission of regulation and quality assurance.', [
    { title: 'Mandate', body: 'Based on the functions of the Commission, DRAQA is responsible for regulating and assuring quality in research, accreditation, registration and licensing activities in Kenya.' },
    { title: 'Main functions', body: `1. Initiating the development of regulations for registration, accreditation, quality assurance and licensing of research in accordance with the Science, Technology and Innovation Act;
2. Development and review of guidelines for registration, accreditation, quality assurance and licensing of research in Kenya;
3. Development and review of guidelines for establishment and accreditation of institutional ethical review committees;
4. Review of applications and make recommendations for registration and accreditation of research institutions;
5. Undertaking licensing of research in Kenya;
6. Undertaking regular inspections, monitoring and evaluation of research institutions to ensure compliance with set standards and guidelines;
7. Undertaking regular monitoring and evaluation of licensed research to ensure compliance with the license conditions;
8. Promoting increased services of DRAQA.` },
    { title: 'Related services', body: 'Use the internal service pages below for the corresponding application and accreditation information.', link: '/app/resource/registration-of-research-institutions-in-kenya/', linkLabel: 'Registration of research institutions' },
    { title: 'Research licensing', body: 'Research licensing applications are submitted through the official authenticated portal.', link: 'https://research-portal.nacosti.go.ke/', linkLabel: 'Open research licensing portal' },
  ]),
  page('directorate-of-s-s', 'Directorate of Scheduled Sciences', 'The Directorate of Scheduled Sciences coordinates scientific activities in the scheduled sciences and supports the responsible application of science, technology and innovation.', [
    { title: 'Scheduled sciences', body: 'Scheduled sciences are the scientific fields listed in the Second Schedule to the Science, Technology and Innovation Act. They include Agricultural and Natural Resource Sciences; Physical Sciences; Biological and Medical Sciences; Industrial and Technology Sciences; and Social Sciences, Humanities and Indigenous Knowledge.' },
    { title: 'Role of the Directorate', body: 'The Directorate provides technical coordination and professional guidance for scheduled-science activities, supports scientific cooperation, and promotes safe, ethical, relevant and quality research and technology development in Kenya.' },
    { title: 'Research and regulatory coordination', body: 'The Directorate works with research institutions, Government agencies, counties, universities, industry and partners to coordinate scheduled-science priorities, support compliance with applicable standards and strengthen the national science and innovation system.' },
    { title: 'Reference legislation', body: 'The statutory list of scheduled sciences is contained in the Science, Technology and Innovation Act, 2013.', link: '/app/resource/sti-act-2013', linkLabel: 'Read the STI Act page' },
  ]),
  page('directorate-of-corporate-services', 'Directorate of Corporate Services', 'The Directorate of Corporate Services provides the corporate systems and enabling functions required for effective delivery of the Commission’s mandate.', [
    { title: 'Administration', body: 'The Directorate coordinates finance, human resource, administration, information and communications technology, quality assurance and risk management, corporate communication, planning and compliance.' },
    { title: 'Main functions', body: `1. Initiating the formulation and development of policies, plans and strategies in the functional areas of finance, human resource, administration, information communications technology, quality assurance and risk management, corporate communication, planning and compliance;
2. Championing value-for-money and model cost-effective measurement techniques for assessing output quality delivered by the functional areas;
3. Ensuring financial prudence and discipline for financial accounting, planning, treasury management and budgetary controls;
4. Initiating development and overseeing accountability for planning, directing and executing all human resources strategies, policies and activities;
5. Overseeing the overall administration functions;
6. Coordinating corporate performance;
7. Developing, reviewing and monitoring implementation of the Strategic Plan.` },
    { title: 'Corporate communication and planning', body: 'Corporate Services develops and reviews the Commission’s corporate, branding, marketing and communications strategies, policies and plans, and supports coordinated institutional performance and compliance.' },
    { title: 'Procurement and internal support', body: 'The Directorate provides the administrative, financial, human-resource, ICT, records and procurement support required by the Commission’s programmes and directorates.', link: '/app/resource/tenders/', linkLabel: 'View procurement information' },
  ]),
  page('advisory', 'Advisory', 'NACOSTI publishes advisories and policy briefs to support evidence-informed science, technology and innovation decisions.', [
    { title: 'Advisories', body: `NACOSTI/HQ/00001 - May 2025 - Strengthening Intellectual Property Rights for Research and Innovation
NACOSTI/HQ/00002 - May 2025 - Opportunities to Advance Artificial Intelligence and Cybersecurity in Kenya
NACOSTI/HQ/00003 - May 2025 - Integrating Indigenous Knowledge into Kenya’s Science, Technology and Innovation Ecosystem
NACOSTI/HQ/00004 - June 2025 - Building Human Capital for Science, Technology and Innovation to Position Kenya for Global Competitiveness in Research and Innovation` },
    { title: 'Policy briefs', body: 'Policy Brief 01/06: Adoption of Irradiation Technologies in Kenya — Benefits, Applications and Opportunities.\n\nPolicy Brief No. 1: Opportunities to Advance Personalised Medicine in Africa.' },
  ]),
  page('collaborations-and-partnership', 'Collaborations and Partnership', 'NACOSTI works with national, regional and international partners to advance science, technology, innovation and research.', [
    { title: 'Collaboration in research for health', body: 'Partnership agreements provide for collaboration in the promotion of research for health and jointly organising activities that enhance public awareness in research.' },
    { title: 'Partnership approach', body: 'The Commission collaborates with government agencies, universities, research institutions, private-sector organisations, development partners and international scientific bodies to mobilise expertise, coordinate programmes, share knowledge and strengthen Kenya’s STI ecosystem.' },
  ]),
  page('registration-of-research-institutions-in-kenya', 'Registration of Research Institutions in Kenya', 'Research institutions operating in Kenya are required to register with NACOSTI in accordance with the Science, Technology and Innovation Act, 2013.', [
    { title: 'Registration requirement', body: 'NACOSTI has registered forty-six (46) research institutions in Kenya. Registration supports quality assurance, accountability and coordination of research in Kenya and does not exempt individual researchers from obtaining a research licence.' },
    { title: 'Application and payment', body: 'Applicants should provide institutional details, governance information, research focus, facilities and the required supporting documentation through the Commission’s designated registration process. The source page identifies NCBA Bank, City Centre Branch, account name National Commission for Science, Technology and Innovation, account number 2904970067 and transaction description “Registration fee- Application for Registration as a Research Institution”. Confirm current payment instructions with NACOSTI before making payment.' },
  ]),
  page('accreditation-of-institutional-ethics-review-committees-iercs', 'Accreditation of Institutional Scientific and Ethics Review Committees (ISERCs)', 'NACOSTI accredits Institutional Scientific and Ethics Review Committees (ISERCs) to protect research participants and assure ethical, scientific and quality review.', [
    { title: 'Purpose and delegation', body: 'In fulfilling its mandate of assuring quality in research, NACOSTI has delegated the task of ethical clearance in research proposals to Institutional Scientific and Ethics Review Committees. These committees are accredited by NACOSTI on the recommendation of the National Scientific and Ethics Committee (NSEC) and are expected to adhere to the set guidelines and standards of accreditation.' },
    { title: 'Where ISERCs operate', body: 'ISERCs are established in research institutions, universities and hospitals. They review research proposals for ethical clearance before a proposal is considered by NACOSTI for issuance of a research licence. Applicants seeking ethical clearance may apply to an accredited ISERC.' },
    { title: 'NACOSTI statutory role', body: 'The Commission’s functions include approval of scientific research, registration and accreditation of research institutions, and assurance of the relevance and quality of science, technology and innovation programmes in research institutions.' },
    { title: 'Find an accredited committee', body: 'Use the internal directory to identify an accredited committee and confirm its current scope before submitting a protocol.', link: '/app/resource/accredited-isercs-in-kenya/', linkLabel: 'View accredited ISERCs in Kenya' },
  ]),
  page('accredited-isercs-in-kenya', 'Accredited ISERCs in Kenya', 'A directory of Institutional Scientific and Ethics Review Committees accredited by NACOSTI.', [
    { title: 'Accredited Institutional Scientific and Ethics Review Committees', body: 'This directory provides access to ISERCs accredited for research review in Kenya. Researchers should confirm the committee’s current scope and approval status before submitting a protocol.', table: { headers: ['No.', 'Name of institution', 'Area accredited', 'Institution email'], rows: [
      ['1', 'Adventist University of Africa', 'Public Health and Social Sciences', 'ethics@aua.ac.ke'],
      ['2', 'Africa International University', 'Social Science', 'africaninternational.ac.ke'],
      ['3', 'AIC Kijabe Hospital', 'Health science, Biomedical, biological, social sciences and environmental sciences', 'researcher.kh@gmail.com'],
      ['4', 'Alupe University College', 'Biomedical and Health Sciences', 'irecsec@auc.ac.ke'],
      ['40', 'Kisii University', 'Biomedical, Health, Social, Environmental Sciences', 'ISERCkisiiuniversity@gmail.com'],
      ['41', 'Tharaka University', 'Physical, Social, Biological and Environmental Sciences', 'info@tharaka.ac.ke'],
      ['42', 'PAC University', 'Social Science', 'ethicsreview@pacuniversity.ac.ke'],
      ['43', 'PCEA Chogoria Hospital', 'Biomedical, Health and Social Sciences', 'iserc@pceachogoriahospital.org'],
    ] } },
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
  page('newletters', 'Newletters', 'NACOSTI newsletters and institutional updates.', [{ title: 'STIR Bulletins', body: 'STIR Bulletin Volume 1 — January to March 2023.\n\nSTIR Bulletin Volume 4 — October to December 2022.\n\nSTIR Bulletin Volume 3 — July to September 2022.', download: { label: 'Newsletter files pending upload', href: '/documents/' } }]),
  page('reports-on-international-collaborations', 'Reports on International Collaborations', 'Reports describing NACOSTI’s international collaborations and scientific partnerships.', [{ title: 'International collaboration reports', body: 'This landing page is reserved for NACOSTI reports on international collaborations, programme outcomes and partnership activities. Approved report files can be added to public/documents and linked internally without redirecting to the legacy site.' }]),
  page('tenders', 'Tenders', 'Procurement notices and tender information from NACOSTI.', [{ title: 'Welcome to NACOSTI e-Procurement', body: 'Tender notices and procurement opportunities are published through the official NACOSTI e-Procurement and electronic Government Procurement systems. These authenticated procurement systems remain external services.', link: 'https://eprocurement.nacosti.go.ke:8099/', linkLabel: 'Open NACOSTI e-Procurement' }, { title: 'Electronic Government Procurement', body: 'Use the official e-GP system for government procurement notices and submissions.', link: 'https://egpkenya.go.ke/', linkLabel: 'Open e-GP' }]),
  page('videos-audios', 'Videos & Audios', 'NACOSTI videos, audio resources and public information materials.', [{ title: 'Videos', body: 'The source page provides a Videos section for NACOSTI public information and institutional materials.' }, { title: 'Audios', body: 'Audio output of NACOSTI Service Charter — English. Approved audio files may be added to the site’s static media directory and linked internally.' }]),
  page('latest', 'News', 'Latest news and updates from NACOSTI.', [{ title: 'Latest updates', body: 'The latest NACOSTI news and announcements will continue to be rendered through the existing news feed without changing its rendering logic.' }]),
  page('fellowships-and-grants', 'Fellowships and Grants', 'Fellowship, grant and research opportunity information for the science, technology and innovation community.', [{ title: 'ICGEB opportunities', body: 'Current opportunity information includes ICGEB fellowships and grants. One listed opportunity has an Expression of Interest deadline of 14 August 2026 and is open to ICGEB Member States, including Kenya. Types include Short-term PhD, Postdoctoral and SMART fellowships.', link: 'https://www.icgeb.org/fellowship/', linkLabel: 'View ICGEB fellowships' }, { title: 'Grants', body: 'Grant opportunities are published by NACOSTI and partner organisations as calls open.', link: 'https://www.icgeb.org/grants/', linkLabel: 'View ICGEB grants' }]),
]
