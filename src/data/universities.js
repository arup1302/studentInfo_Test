const universities = [
  {
    id: 1,
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    description:
      'Top ranked university offering multiple international programs.',
    fullDescription:
      'The University of Toronto is a public research university in Toronto, Ontario, Canada. Founded in 1827, it is one of the most prestigious universities in the world. It offers over 700 undergraduate and 200 graduate programs across three campuses. Known for groundbreaking research in medicine, engineering, artificial intelligence, and the humanities, U of T attracts students from over 160 countries.',
    programs: [
      'Computer Science',
      'Engineering',
      'Medicine',
      'Business',
      'Law',
    ],
    ranking: '#1 in Canada, #18 Globally (QS 2025)',
    tuition: 'CAD $45,000 – $65,000 per year (international)',
    website: 'https://www.utoronto.ca',
  },
  {
    id: 2,
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    description: 'Popular destination for international students.',
    fullDescription:
      'The University of Melbourne is a public research university located in Melbourne, Victoria, Australia. Established in 1853, it is the second oldest university in Australia. It consistently ranks among the top universities globally and is renowned for its diverse academic community, world-class facilities, and strong industry connections across Asia-Pacific.',
    programs: [
      'Arts & Humanities',
      'Science',
      'Commerce',
      'Architecture',
      'Education',
    ],
    ranking: '#1 in Australia, #33 Globally (QS 2025)',
    tuition: 'AUD $40,000 – $55,000 per year (international)',
    website: 'https://www.unimelb.edu.au',
  },
  {
    id: 3,
    university: 'MIT',
    country: 'United States',
    flag: '🇺🇸',
    description:
      'World leader in science, technology, engineering, and mathematics.',
    fullDescription:
      'The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861, MIT has played a key role in the development of modern technology and science. It is consistently ranked the #1 university in the world and has produced 97 Nobel laureates, 26 Turing Award winners, and 8 Fields Medalists.',
    programs: [
      'Electrical Engineering',
      'Computer Science',
      'Physics',
      'Mathematics',
      'Economics',
    ],
    ranking: '#1 Globally (QS 2025)',
    tuition: 'USD $57,000 per year',
    website: 'https://www.mit.edu',
  },
  {
    id: 4,
    university: 'University of Oxford',
    country: 'United Kingdom',
    flag: '🇬🇧',
    description: 'The oldest English-speaking university in the world.',
    fullDescription:
      'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as far back as 1096, making it the oldest university in the English-speaking world. Oxford has produced 28 British Prime Ministers and numerous world leaders. It is organised into 39 semi-autonomous colleges and offers programs across all major academic disciplines.',
    programs: [
      'Philosophy, Politics & Economics',
      'Law',
      'Medicine',
      'Engineering',
      'Literature',
    ],
    ranking: '#3 Globally (QS 2025)',
    tuition: 'GBP £26,000 – £39,000 per year (international)',
    website: 'https://www.ox.ac.uk',
  },
  {
    id: 5,
    university: 'ETH Zurich',
    country: 'Switzerland',
    flag: '🇨🇭',
    description:
      "Europe's top technical university with Nobel Prize tradition.",
    fullDescription:
      'ETH Zurich (Swiss Federal Institute of Technology) is a public research university in Zürich, Switzerland. Founded in 1854, it is widely regarded as one of the best universities in the world for science and technology. Among its alumni, faculty and researchers are 22 Nobel Prize winners, including Albert Einstein. It is especially renowned for STEM disciplines.',
    programs: [
      'Architecture',
      'Civil Engineering',
      'Computer Science',
      'Physics',
      'Chemistry',
    ],
    ranking: '#7 Globally (QS 2025)',
    tuition: 'CHF 730 per semester (all students)',
    website: 'https://ethz.ch',
  },
  {
    id: 6,
    university: 'National University of Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    description: "Asia's leading global university with strong industry ties.",
    fullDescription:
      'The National University of Singapore (NUS) is the oldest and most prestigious university in Singapore. Established in 1905, NUS offers a global approach to education and research with a focus on Asian perspectives. It has strong partnerships with leading corporations and governments across the world and is ranked the top university in Asia.',
    programs: [
      'Business Administration',
      'Computing',
      'Engineering',
      'Medicine',
      'Design & Environment',
    ],
    ranking: '#1 in Asia, #8 Globally (QS 2025)',
    tuition: 'SGD $29,000 – $41,000 per year (international)',
    website: 'https://www.nus.edu.sg',
  },
  {
    id: 7,
    university: 'University of Cape Town',
    country: 'South Africa',
    flag: '🇿🇦',
    description: "Africa's leading research university with a vibrant campus.",
    fullDescription:
      'The University of Cape Town (UCT) is a public research university located in Cape Town, South Africa. Founded in 1829, it is the oldest university in South Africa and consistently ranks as the top university on the African continent. UCT is known for its strong research output, diverse student body, and stunning mountain campus overlooking the city.',
    programs: ['Commerce', 'Health Sciences', 'Humanities', 'Law', 'Science'],
    ranking: '#1 in Africa, #226 Globally (QS 2025)',
    tuition: 'ZAR R75,000 – R120,000 per year (international)',
    website: 'https://www.uct.ac.za',
  },
  {
    id: 8,
    university: 'Sorbonne University',
    country: 'France',
    flag: '🇫🇷',
    description:
      'Historic French university with excellence in arts and sciences.',
    fullDescription:
      'Sorbonne University is a public research university in Paris, France, established in 2018 by the merger of Paris-Sorbonne University and Pierre and Marie Curie University. Tracing its roots to 1257, it is one of the oldest and most prestigious universities in the world. It excels in literature, humanities, sciences and medicine, attracting thousands of international students each year.',
    programs: ['Literature', 'Languages', 'Mathematics', 'Physics', 'Medicine'],
    ranking: '#59 Globally (QS 2025)',
    tuition: 'EUR €2,770 – €3,770 per year (non-EU students)',
    website: 'https://www.sorbonne-universite.fr/en',
  },
];

export default universities;
