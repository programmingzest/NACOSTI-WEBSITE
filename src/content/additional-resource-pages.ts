export type AdditionalResourcePage = {
  slug: string
  title: string
  intro: string
  sections: Array<{ title: string; body: string; link?: string; table?: { headers: string[]; rows: string[][] } }>
}

export const additionalResourcePages: AdditionalResourcePage[] = [
  {
    slug: 'research-guidelines-and-requirements',
    title: 'Research Guidelines and Requirements',
    intro: 'All persons intending to undertake research in the country must obtain a Research License.',
    sections: [
      {
        title: 'Target Group',
        body: 'All persons intending to undertake research in the country.',
      },
      {
        title: 'Requirements',
        body: 'Application for a Research License is submitted online by visiting https://research-portal.nacosti.go.ke/\n\n1. Photograph — The passport photo must be 2*2 inches (51*51 mm), with the head between 25-35 mm from the bottom of the chin to the top of the head. It should be coloured, in JPG or PNG format, and below 450 pixels.\n2. Identification Document — National Identification Card (ID) for Kenyans, the bio page of a passport or alien ID for non-citizens, in PDF format.\n3. Introductory Letter — A letter from the relevant institution signed by an authorized officer. It should include the applicant name, title of research, research sites, duration of study and other relevant information.\n4. Affiliation — Non-Kenyans must be affiliated to a relevant local institution with the capacity to host, monitor, evaluate and report on the research project. The affiliation letter must be signed by an authorized officer and be valid for one year.\n5. Grant Letter — A grant letter from the funding agency supporting the amount indicated for funding. It should include the recipient name, project title, amount and other relevant information.\n6. Ethical Approval — An approval letter from an Accredited Institutional Scientific and Ethics Review Committee. See https://www.nacosti.go.ke/accredited-isercs-in-kenya/\n7. Clinical Trials — Applications seeking clearance for clinical trials must submit approval from the Pharmacy and Poisons Board.\n8. Genetic Resources and Derivatives — Applications must submit Prior Informed Consent (PIC), Mutually Agreed Terms (MAT), and a Material Transfer Agreement (MTA) where applicable.\n9. Research Proposal — An approved research proposal in PDF format containing the title, abstract, literature review, problem statement, objectives, justification, methodology, workplan, budget, expected output, mode of dissemination of findings, references/bibliography, research instruments and relevant annexes.\n10. Payment — Payments for research licensing should be done via e-Citizen.',
      },
      {
        title: 'Payment Details',
        body: 'Payment using the modes below is done after initiating the application process.\n\nMIGRATION TO E-CITIZEN PLATFORM\nThe National Commission for Science, Technology and Innovation (NACOSTI) migrated research licensing services to the e-Citizen Platform effective November 17, 2023, following the Presidential Directive on digitalization of payment for government services.\n\nEast African Citizens — Kenya Shillings Account\nMobile money: Mpesa Express or Paybill Number 222222. Other available payments via eCitizen include Airtel Money, Kenya Commercial Bank, Co-operative Bank, Pesaflow Direct, National Bank and RTGS.\n\nNon-Kenyans — US Dollar Account\nKenya Commercial Bank (USD), Co-operative Bank (USD), NBK (USD), Equity Cash, and Debit/Credit/Prepaid Card.',
      },
      {
        title: 'Conditions of the Research License',
        body: 'According to Legal Notice No. 108: the Science, Technology and Innovation (Research Licensing) Regulations, all persons issued with a license must abide by the following conditions:\n\n1. The licence is valid for the proposed research, location and specified period.\n2. Neither the licence nor any right thereunder shall be transferred, assigned or disposed of in any manner.\n3. The Commission may cancel the research licence if the research is not implemented in conformity with the Act or other written law.\n4. Upon request, the licensee shall submit written statements, signed under oath or affirmation where appropriate, to enable the Commission to determine whether the licence should be modified, suspended or revoked.\n5. The licensee shall inform the County Governor and County Commissioner before commencement.\n6. Excavation, filming, movement and collection of specimens require further permission from relevant Government Agencies.\n7. The Commission may modify the licence conditions, including cancellation, without prior notice.\n8. The licence does not authorize transfer of research materials.\n9. The Commission may monitor and evaluate the licensed research project for compliance.\n10. The licensee shall adhere to procedures, standards, codes of ethics and guidelines prescribed by relevant legislation.\n11. The licensee shall upload a copy of the final report onto a Commission-designated platform within one year of completion.\n12. Renewal applications should be received at least two months before expiry.',
      },
      {
        title: 'Duration of License',
        body: 'The validity of the License shall be one (1) year from the date of issuance.',
      },
      {
        title: 'Renewal of License',
        body: 'If the research project is not completed within the stipulated period, the researcher may apply for renewal and pay the requisite fee. The application should attach a progress report instead of a proposal, indicating objectives and activities completed and the research work remaining. A request for renewal should be submitted at least thirty (30) days before expiry of the approval period.',
      },
      {
        title: 'Conduct of Research',
        body: 'All persons granted research licenses must abide by the conditions of the License and all applicable regulatory and legislative frameworks.',
      },
      {
        title: 'Reports',
        body: 'A licensee shall upload a copy of the final research report to the Commission within one year of completion.',
      },
      {
        title: 'Monitoring and Evaluation',
        body: 'The Commission may conduct or cause an evaluation of research carried out under the Act to assess compliance with the conditions of the license.',
      },
      {
        title: 'Rejection and Appeal',
        body: 'If an application does not meet the conditions required under the Act, the Commission shall reject it and communicate the reasons. An aggrieved person may appeal to the Cabinet Secretary within thirty days of notification.',
      },
      {
        title: 'Licence Renewal',
        body: 'If the research project has not been completed within the stipulated period, the researcher may apply for renewal two months before expiry and pay the requisite fee. The renewal application should attach a progress report instead of a proposal.',
      },
      {
        title: 'Apply for a Research License',
        body: 'Begin your application on the official research portal.',
        link: 'https://research-portal.nacosti.go.ke/',
      },
    ],
  },
  {
    slug: 'research-licensing-fees',
    title: 'Research Licensing Service Charges',
    intro: 'Current standard and expedited service charges for research licensing in Kenya.',
    sections: [
      {
        title: 'Service Charges',
        body: 'The service charges are shown below. Fees should be confirmed through official NACOSTI payment guidance before submitting an application.',
        table: {
          headers: ['Category of Research', 'EAC Standard', 'EAC Expedited', 'Non-EAC Standard', 'Non-EAC Expedited'],
          rows: [
            ['Diploma', 'KES 1,000', 'KES 1,500', 'USD 200', 'USD 300'],
            ['Bachelors', 'KES 2,000', 'KES 3,000', 'USD 300', 'USD 400'],
            ['Post-Graduate Diploma', 'KES 3,000', 'KES 5,000', 'USD 350', 'USD 450'],
            ['Masters', 'KES 6,000', 'KES 8,000', 'USD 400', 'USD 500'],
            ['PhD', 'KES 10,000', 'KES 15,000', 'USD 500', 'USD 600'],
            ['Post-Doctoral', 'KES 15,000', 'KES 20,000', 'USD 750', 'USD 850'],
            ['Companies', 'KES 50,000', 'KES 70,000', '—', '—'],
            ['Research Institution', 'KES 30,000', 'KES 50,000', '—', '—'],
            ['Clinical Trials', '—', '—', 'USD 1,000', '—'],
          ],
        },
      },
      {
        title: 'Important Notice',
        body: 'The same fee applies for renewal of a Research License. Research license payments are non-refundable.',
      },
    ],
  },
]
