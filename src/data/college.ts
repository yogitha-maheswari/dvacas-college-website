// ============================================================
// DR. VIKRAM AGGARWAL COLLEGE OF ARTS & SCIENCE
// Complete Mock Data File — Production Ready
// ============================================================

export const COLLEGE = {
  name: "Dr. Vikram Aggarwal College of Arts & Science",
  shortName: "Dr. Vikram Aggarwal College of Arts & Science",
  tagline: "Build Your Future with World-Class Education",
  subTagline: "Where tradition meets innovation — shaping leaders for tomorrow.",
  established: 2024,
  affiliatedTo: "University of Madras",
  approvedBy: ["UGC", "AICTE", "Tamil Nadu Government"],
  legacy: "Sister Institution of Anna Adarsh College for Women, Chennai",
  phone: ["+91 98765 43210", "+91 98765 43211"],
  email: "admissions@dvacas.edu.in",
  website: "www.dvacas.edu.in",
  whatsapp: "+91 98765 43210",
  address: {
    street: "No. 1, Aggarwal Education Campus, Poonamallee High Road",
    area: "Arumbakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600106",
    landmark: "Near Koyambedu Metro Station",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Arumbakkam,Chennai&output=embed",
    coordinates: { lat: 13.0702, lng: 80.2095 },
  },
  socialMedia: {
    instagram: "https://instagram.com/dvacas_official",
    facebook: "https://facebook.com/dvacas",
    youtube: "https://youtube.com/@dvacas",
    linkedin: "https://linkedin.com/school/dvacas",
    twitter: "https://twitter.com/dvacas_official",
  },
  stats: {
    studentsEnrolled: 1200,
    facultyCount: 85,
    coursesOffered: 12,
    placementRate: 92,
    avgSalaryLPA: 4.8,
    highestSalaryLPA: 18,
    recruitersCount: 120,
    campusAcres: 8,
    labsCount: 18,
    libraryBooks: 25000,
  },
};

// ============================================================
// VISION & MISSION
// ============================================================
export const VISION_MISSION = {
  vision:
    "To be a globally recognized institution of excellence that nurtures innovative thinkers, compassionate leaders, and responsible citizens who contribute meaningfully to society.",
  mission: [
    "Provide quality education that blends academic rigor with practical skill-building.",
    "Foster a culture of research, critical thinking, and entrepreneurship.",
    "Create an inclusive, diverse, and empowering learning environment.",
    "Build strong industry partnerships to ensure outstanding career outcomes.",
    "Uphold ethical values and social responsibility in all endeavors.",
  ],
  coreValues: [
    {
      value: "Excellence",
      icon: "🏆",
      description: "Pursuing the highest standards in academics and conduct.",
    },
    {
      value: "Innovation",
      icon: "💡",
      description: "Encouraging creative thinking and entrepreneurial spirit.",
    },
    {
      value: "Integrity",
      icon: "⚖️",
      description: "Acting with honesty, transparency, and ethical commitment.",
    },
    {
      value: "Inclusivity",
      icon: "🤝",
      description: "Welcoming every student regardless of background.",
    },
    {
      value: "Impact",
      icon: "🌍",
      description: "Creating graduates who make a difference in the world.",
    },
  ],
};

// ============================================================
// MANAGEMENT & FOUNDER
// ============================================================
export const MANAGEMENT = {
  founder: {
    name: "Dr. Vikram Aggarwal",
    title: "Founder & Chancellor",
    qualification: "Ph.D. in Education Management, IIM Ahmedabad",
    experience: "35+ years in education leadership",
    bio: "Dr. Vikram Aggarwal is a visionary educationist who has spent over three decades transforming the educational landscape of Tamil Nadu. As the founder of the prestigious Anna Adarsh Group of Institutions, he has championed women's education and holistic development. With Dr. Vikram Aggarwal College of Arts & Science, he extends his legacy to co-education, creating a world-class institution that marries traditional values with modern pedagogy.",
    quote:
      "Education is not merely about degrees — it is about igniting the fire within every student to dream bigger, reach higher, and serve better.",
    phone: "",
    email: "",
    image: "/images/management/dr-vikram-aggarwal.jpg",
  },
  secretary: {
    name: "Mrs. Kavitha Aggarwal",
    title: "Secretary & Correspondent",
    qualification: "M.A., M.Ed.",
    experience: "25+ years",
    bio: "Mrs. Kavitha Aggarwal oversees the administrative and academic governance of the institution, ensuring every student receives personalized attention and world-class support.",
    phone: "",
    email: "",
    image: "/images/management/kavitha-aggarwal.jpg",
  },
  principal: {
    name: "Dr. Meenakshi Sundaram",
    title: "Principal",
    qualification: "Ph.D. in English Literature, University of Madras",
    experience: "28 years in academia",
    bio: "Dr. Meenakshi Sundaram brings vast experience in curriculum design, faculty development, and student mentorship. Under her leadership, Dr. Vikram Aggarwal College of Arts & Science has launched several innovative academic programs and industry collaboration initiatives.",
    phone: "+91 98765 00001",
    email: "principal@dvacas.edu.in",
    image: "/images/management/dr-meenakshi-sundaram.jpg",
  },
  board: [
    {
      name: "Mr. Rajesh Kumar",
      title: "Board of Governors — Industry Representative",
      company: "Infosys Ltd.",
      image: "/images/management/rajesh-kumar.jpg",
    },
    {
      name: "Dr. Anitha Rajan",
      title: "Academic Advisory Board",
      company: "IIT Madras",
      image: "/images/management/anitha-rajan.jpg",
    },
    {
      name: "Mr. Suresh Narayanan",
      title: "Industry Advisory Board",
      company: "TCS",
      image: "/images/management/suresh-narayanan.jpg",
    },
    {
      name: "Dr. Lakshmi Narayanan",
      title: "Academic Advisory Board",
      company: "University of Madras",
      image: "/images/management/lakshmi-narayanan.jpg",
    },
  ],
};

// ============================================================
// COURSES
// ============================================================
export const COURSES = [
  // === ARTS ===
  {
    id: "ba-english",
    code: "BA-ENG",
    name: "B.A. English Literature",
    department: "Arts",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 45000, total: 135000 },
    eligibility: "10+2 (Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "A dynamic program that develops critical thinking, communication, and analytical skills through in-depth study of British, American, Indian, and World Literature.",
    highlights: [
      "Creative Writing & Journalism electives",
      "Media Studies lab",
      "Annual literary festival",
      "Industry visits to publishing houses",
    ],
    curriculum: {
      year1: [
        "Prose and Poetry",
        "History of English Literature",
        "Communication Skills",
        "Environmental Studies",
      ],
      year2: [
        "Drama and Novel",
        "American Literature",
        "Indian Writing in English",
        "Research Methodology",
      ],
      year3: [
        "Post-Colonial Literature",
        "Literary Criticism",
        "Creative Writing",
        "Project Work",
      ],
    },
    careerOpportunities: [
      "Content Writer",
      "Journalist",
      "PR Executive",
      "Teacher",
      "Civil Services",
      "Editor",
      "UX Writer",
    ],
    avgSalary: "₹3.5 – 6 LPA",
    image: "/images/courses/ba-english.jpg",
    icon: "📚",
    color: "#1a3a6b",
  },
  {
    id: "ba-economics",
    code: "BA-ECO",
    name: "B.A. Economics",
    department: "Arts",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 45000, total: 135000 },
    eligibility: "10+2 (Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "Develop a strong foundation in micro and macroeconomics, statistics, and policy analysis, preparing you for careers in banking, finance, research, and civil services.",
    highlights: [
      "Bloomberg Terminal access",
      "Economics Research Cell",
      "Industry seminars with RBI & SEBI officials",
      "Data Analysis workshops",
    ],
    curriculum: {
      year1: [
        "Microeconomics",
        "Macroeconomics",
        "Statistics for Economics",
        "Environmental Economics",
      ],
      year2: [
        "Development Economics",
        "Public Finance",
        "Money & Banking",
        "International Trade",
      ],
      year3: [
        "Econometrics",
        "Indian Economy",
        "Research Methodology",
        "Project Work",
      ],
    },
    careerOpportunities: [
      "Economist",
      "Bank PO",
      "Policy Analyst",
      "Financial Analyst",
      "Civil Services (IAS/IES)",
      "Data Analyst",
      "Research Associate",
    ],
    avgSalary: "₹4 – 8 LPA",
    image: "/images/courses/ba-economics.jpg",
    icon: "📊",
    color: "#1a3a6b",
  },
  {
    id: "ba-history",
    code: "BA-HIS",
    name: "B.A. History",
    department: "Arts",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 42000, total: 126000 },
    eligibility: "10+2 (Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "Explore ancient to modern history with a focus on Indian, South Asian, and World civilizations. Develop research, writing, and analytical skills valued across sectors.",
    highlights: [
      "Archaeological field trips",
      "Museum visits",
      "Civil Services coaching cell",
      "Heritage documentation projects",
    ],
    curriculum: {
      year1: [
        "Ancient India",
        "World History",
        "History of Tamil Nadu",
        "Communication Skills",
      ],
      year2: [
        "Medieval India",
        "Modern Europe",
        "Colonial India",
        "Archival Research Methods",
      ],
      year3: [
        "Post-Independence India",
        "Contemporary World History",
        "Historiography",
        "Research Project",
      ],
    },
    careerOpportunities: [
      "Civil Services",
      "Museum Curator",
      "Archaeologist",
      "Journalist",
      "Historian",
      "Teacher",
      "Heritage Manager",
    ],
    avgSalary: "₹3 – 5.5 LPA",
    image: "/images/courses/ba-history.jpg",
    icon: "🏛️",
    color: "#1a3a6b",
  },

  // === COMMERCE ===
  {
    id: "bcom-general",
    code: "BCOM-GEN",
    name: "B.Com General",
    department: "Commerce",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    totalSeats: 120,
    fees: { annual: 52000, total: 156000 },
    eligibility: "10+2 (Commerce/Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "A comprehensive commerce program covering accounting, finance, taxation, and business management — designed to produce industry-ready commerce professionals.",
    highlights: [
      "Tally ERP & Zoho Books certified training",
      "CA Foundation guidance",
      "Live internships with CA firms",
      "Stock market simulation lab",
    ],
    curriculum: {
      year1: [
        "Financial Accounting",
        "Business Economics",
        "Business Law",
        "Business Mathematics",
      ],
      year2: [
        "Corporate Accounting",
        "Cost Accounting",
        "Business Statistics",
        "Income Tax Law",
      ],
      year3: [
        "Auditing",
        "Financial Management",
        "GST & Indirect Tax",
        "Project Work",
      ],
    },
    careerOpportunities: [
      "CA / CMA",
      "Accountant",
      "Tax Consultant",
      "Financial Analyst",
      "Banking",
      "MBA",
      "Government Services",
    ],
    avgSalary: "₹4 – 9 LPA",
    image: "/images/courses/bcom-general.jpg",
    icon: "💼",
    color: "#c9a227",
    featured: true,
  },
  {
    id: "bcom-cs",
    code: "BCOM-CS",
    name: "B.Com Computer Science",
    department: "Commerce",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 58000, total: 174000 },
    eligibility: "10+2 (Commerce/Science) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "The perfect blend of commerce fundamentals and computer science — ideal for students targeting fintech, e-commerce, MIS, and ERP careers.",
    highlights: [
      "Python for Finance",
      "SAP training",
      "Fintech industry projects",
      "Data Analytics with Excel & Power BI",
    ],
    curriculum: {
      year1: [
        "Financial Accounting",
        "C Programming",
        "Database Management",
        "Business Communication",
      ],
      year2: [
        "Corporate Accounting",
        "Web Technologies",
        "ERP Systems",
        "E-Commerce",
      ],
      year3: [
        "Data Analytics",
        "Financial Management",
        "Python for Business",
        "Project Work",
      ],
    },
    careerOpportunities: [
      "MIS Executive",
      "ERP Consultant",
      "Fintech Analyst",
      "Business Analyst",
      "Software Developer",
      "Data Analyst",
    ],
    avgSalary: "₹5 – 12 LPA",
    image: "/images/courses/bcom-cs.jpg",
    icon: "💻",
    color: "#c9a227",
    featured: true,
  },
  {
    id: "bba",
    code: "BBA",
    name: "B.B.A. (Bachelor of Business Administration)",
    department: "Management",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 65000, total: 195000 },
    eligibility: "10+2 (Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "A professionally oriented management program that develops leadership, strategic thinking, and entrepreneurial abilities — the perfect foundation for MBA and corporate careers.",
    highlights: [
      "Entrepreneurship Cell (E-Cell)",
      "Business Simulation Games",
      "Guest lectures by CEOs & entrepreneurs",
      "Leadership bootcamps",
    ],
    curriculum: {
      year1: [
        "Principles of Management",
        "Business Economics",
        "Financial Accounting",
        "Business Communication",
      ],
      year2: [
        "Marketing Management",
        "Human Resource Management",
        "Financial Management",
        "Research Methods",
      ],
      year3: [
        "Strategic Management",
        "Entrepreneurship",
        "Business Analytics",
        "Internship & Project",
      ],
    },
    careerOpportunities: [
      "Management Trainee",
      "Sales Manager",
      "HR Executive",
      "Entrepreneur",
      "MBA",
      "Brand Manager",
      "Operations Manager",
    ],
    avgSalary: "₹4.5 – 10 LPA",
    image: "/images/courses/bba.jpg",
    icon: "🏢",
    color: "#c9a227",
    featured: true,
  },

  // === SCIENCE ===
  {
    id: "bsc-cs",
    code: "BSC-CS",
    name: "B.Sc. Computer Science",
    department: "Science",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 68000, total: 204000 },
    eligibility: "10+2 (Science/Maths) with minimum 55% aggregate",
    affiliation: "University of Madras",
    overview:
      "A rigorous computer science program covering programming, data structures, AI, and software development — designed to produce job-ready tech professionals.",
    highlights: [
      "AWS & Google Cloud labs",
      "Hackathons & coding competitions",
      "GitHub portfolio building",
      "Industry mentorship program",
    ],
    curriculum: {
      year1: [
        "C & C++ Programming",
        "Data Structures",
        "Digital Electronics",
        "Web Design",
      ],
      year2: [
        "Java Programming",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
      ],
      year3: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
        "Final Year Project",
      ],
    },
    careerOpportunities: [
      "Software Developer",
      "Full Stack Developer",
      "Data Scientist",
      "Cloud Engineer",
      "Cybersecurity Analyst",
      "MCA/M.Tech",
    ],
    avgSalary: "₹5 – 18 LPA",
    image: "/images/courses/bsc-cs.jpg",
    icon: "🖥️",
    color: "#1a7a4a",
    featured: true,
  },
  {
    id: "bsc-it",
    code: "BSC-IT",
    name: "B.Sc. Information Technology",
    department: "Science",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 65000, total: 195000 },
    eligibility: "10+2 (Any Stream) with minimum 55% aggregate",
    affiliation: "University of Madras",
    overview:
      "Focused on practical IT skills — networking, cybersecurity, software development, and emerging technologies. Highly valued by IT services companies.",
    highlights: [
      "CISCO Networking Academy",
      "Ethical Hacking lab",
      "Industry certification support (CompTIA, AWS)",
      "Live project with startups",
    ],
    curriculum: {
      year1: [
        "Programming Fundamentals",
        "IT Essentials",
        "Web Technologies",
        "PC Hardware",
      ],
      year2: [
        "Networking",
        "Cybersecurity",
        "Mobile App Development",
        "ERP Systems",
      ],
      year3: [
        "Cloud Services",
        "Big Data",
        "DevOps",
        "Industry Internship & Project",
      ],
    },
    careerOpportunities: [
      "Network Engineer",
      "Cybersecurity Analyst",
      "System Administrator",
      "IT Support",
      "Web Developer",
      "Tech Consultant",
    ],
    avgSalary: "₹4.5 – 14 LPA",
    image: "/images/courses/bsc-it.jpg",
    icon: "🌐",
    color: "#1a7a4a",
  },
  {
    id: "bsc-maths",
    code: "BSC-MATHS",
    name: "B.Sc. Mathematics",
    department: "Science",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 48000, total: 144000 },
    eligibility: "10+2 (Science with Maths) with minimum 55% aggregate",
    affiliation: "University of Madras",
    overview:
      "A rigorous mathematics program emphasizing pure and applied mathematics, statistics, and mathematical computing — ideal for research, finance, and data science careers.",
    highlights: [
      "Python & MATLAB computing lab",
      "Actuarial Science elective",
      "Research publication support",
      "Quantitative aptitude training",
    ],
    curriculum: {
      year1: [
        "Calculus",
        "Algebra",
        "Analytical Geometry",
        "Classical Mechanics",
      ],
      year2: [
        "Real Analysis",
        "Linear Algebra",
        "Differential Equations",
        "Probability & Statistics",
      ],
      year3: [
        "Complex Analysis",
        "Operations Research",
        "Numerical Methods",
        "Research Project",
      ],
    },
    careerOpportunities: [
      "Data Scientist",
      "Actuary",
      "Quantitative Analyst",
      "Teacher",
      "Research Scientist",
      "IIT/NIT M.Sc.",
      "Civil Services",
    ],
    avgSalary: "₹4 – 12 LPA",
    image: "/images/courses/bsc-maths.jpg",
    icon: "🔢",
    color: "#1a7a4a",
  },
  {
    id: "bsc-physics",
    code: "BSC-PHY",
    name: "B.Sc. Physics",
    department: "Science",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 48000, total: 144000 },
    eligibility: "10+2 (Science with Physics & Maths) minimum 55%",
    affiliation: "University of Madras",
    overview:
      "From quantum mechanics to astrophysics — this program builds deep scientific understanding with emphasis on experimental physics and research skills.",
    highlights: [
      "Modern physics lab with spectroscopy",
      "Astronomy club & telescope",
      "Research internships at IIT Madras",
      "GATE coaching support",
    ],
    curriculum: {
      year1: [
        "Mechanics",
        "Electricity & Magnetism",
        "Optics",
        "Mathematical Physics",
      ],
      year2: [
        "Thermal Physics",
        "Quantum Mechanics",
        "Electronics",
        "Statistical Mechanics",
      ],
      year3: [
        "Nuclear Physics",
        "Astrophysics",
        "Condensed Matter",
        "Research Project",
      ],
    },
    careerOpportunities: [
      "Research Scientist",
      "ISRO/DRDO",
      "Teacher",
      "M.Sc. Physics",
      "Data Scientist",
      "Radiation Physicist",
    ],
    avgSalary: "₹3.5 – 8 LPA",
    image: "/images/courses/bsc-physics.jpg",
    icon: "⚛️",
    color: "#1a7a4a",
  },
  {
    id: "bsc-chemistry",
    code: "BSC-CHEM",
    name: "B.Sc. Chemistry",
    department: "Science",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 48000, total: 144000 },
    eligibility: "10+2 (Science with Chemistry) minimum 55%",
    affiliation: "University of Madras",
    overview:
      "A comprehensive chemistry program combining organic, inorganic, physical, and analytical chemistry with state-of-the-art lab facilities.",
    highlights: [
      "HPLC & UV-Vis Spectrophotometry lab",
      "Pharma industry visits",
      "CSIR-NET coaching support",
      "Green chemistry projects",
    ],
    curriculum: {
      year1: [
        "Inorganic Chemistry",
        "Organic Chemistry",
        "Physical Chemistry",
        "Chemistry Lab I",
      ],
      year2: [
        "Analytical Chemistry",
        "Biochemistry",
        "Industrial Chemistry",
        "Spectroscopy",
      ],
      year3: [
        "Polymer Chemistry",
        "Environmental Chemistry",
        "Pharmaceutical Chemistry",
        "Research Project",
      ],
    },
    careerOpportunities: [
      "Pharmaceutical Industry",
      "Quality Control",
      "Research Scientist",
      "M.Sc. Chemistry",
      "CSIR Scientist",
      "Teacher",
    ],
    avgSalary: "₹3.5 – 7 LPA",
    image: "/images/courses/bsc-chemistry.jpg",
    icon: "🧪",
    color: "#1a7a4a",
  },
  {
    id: "bca",
    code: "BCA",
    name: "B.C.A. (Bachelor of Computer Applications)",
    department: "Computer Applications",
    category: "science",
    duration: "3 Years (6 Semesters)",
    totalSeats: 60,
    fees: { annual: 62000, total: 186000 },
    eligibility: "10+2 (Any Stream) with minimum 50% aggregate",
    affiliation: "University of Madras",
    overview:
      "The BCA program develops strong software development skills with industry-aligned curriculum — a direct pathway to MCA, MBA, or IT sector careers.",
    highlights: [
      "Full Stack Development (MERN)",
      "App Development lab",
      "Startup incubation support",
      "Google Developer Student Club",
    ],
    curriculum: {
      year1: [
        "C Programming",
        "Digital Fundamentals",
        "Web Design",
        "Mathematics",
      ],
      year2: [
        "Java",
        "Database Management",
        "PHP & MySQL",
        "Software Engineering",
      ],
      year3: [
        "React & Node.js",
        "Android Development",
        "AI & ML Basics",
        "Final Year Project",
      ],
    },
    careerOpportunities: [
      "Web Developer",
      "App Developer",
      "Software Engineer",
      "MCA",
      "UI/UX Designer",
      "Startup Founder",
    ],
    avgSalary: "₹4.5 – 15 LPA",
    image: "/images/courses/bca.jpg",
    icon: "📱",
    color: "#1a7a4a",
    featured: true,
  },
];

// ============================================================
// FACULTY
// ============================================================
export const FACULTY = [
  {
    id: 1,
    name: "Dr. Priya Subramaniam",
    department: "English",
    designation: "Head of Department & Associate Professor",
    qualification: "Ph.D. in Postcolonial Literature, University of Madras",
    experience: "18 years",
    specialization: ["Postcolonial Studies", "Feminist Literature", "Film Studies"],
    publications: 14,
    email: "priya.subramaniam@dvacas.edu.in",
    image: "/images/faculty/priya-subramaniam.jpg",
    achievements: ["Best Teacher Award 2022 (University of Madras)", "Fulbright Scholar 2019"],
  },
  {
    id: 2,
    name: "Prof. Karthik Rajan",
    department: "Computer Science",
    designation: "Head of Department & Assistant Professor",
    qualification: "M.Tech. CSE, IIT Bombay",
    experience: "12 years",
    specialization: ["Artificial Intelligence", "Machine Learning", "Cloud Computing"],
    publications: 8,
    email: "karthik.rajan@dvacas.edu.in",
    image: "/images/faculty/karthik-rajan.jpg",
    achievements: ["Google Certified ML Engineer", "Best Research Paper Award — ICACCI 2021"],
    industryExperience: "Ex-TCS, 5 years",
  },
  {
    id: 3,
    name: "Dr. Lakshmi Venkataraman",
    department: "Commerce",
    designation: "Head of Department & Associate Professor",
    qualification: "Ph.D. in Finance, Bharathiar University",
    experience: "22 years",
    specialization: ["Corporate Finance", "Taxation", "Financial Markets"],
    publications: 19,
    email: "lakshmi.venkataraman@dvacas.edu.in",
    image: "/images/faculty/lakshmi-venkataraman.jpg",
    achievements: ["ICAI Faculty Award 2020", "CA & CMA (qualified)"],
  },
  {
    id: 4,
    name: "Dr. Senthil Kumar",
    department: "Economics",
    designation: "Associate Professor",
    qualification: "Ph.D. in Development Economics, Jawaharlal Nehru University",
    experience: "16 years",
    specialization: ["Development Economics", "Public Policy", "Econometrics"],
    publications: 23,
    email: "senthil.kumar@dvacas.edu.in",
    image: "/images/faculty/senthil-kumar.jpg",
    achievements: ["RBI Research Fellowship 2018", "Published in Economic & Political Weekly"],
  },
  {
    id: 5,
    name: "Prof. Deepa Krishnamurthy",
    department: "Mathematics",
    designation: "Assistant Professor",
    qualification: "M.Sc. Mathematics, IIT Madras | M.Phil.",
    experience: "10 years",
    specialization: ["Applied Mathematics", "Operations Research", "Statistics"],
    publications: 6,
    email: "deepa.krishnamurthy@dvacas.edu.in",
    image: "/images/faculty/deepa-krishnamurthy.jpg",
    achievements: ["CSIR Junior Research Fellowship", "Best Teacher Award 2023"],
  },
  {
    id: 6,
    name: "Dr. Anand Mohan",
    department: "Physics",
    designation: "Associate Professor",
    qualification: "Ph.D. in Condensed Matter Physics, University of Hyderabad",
    experience: "14 years",
    specialization: ["Nanophysics", "Astrophysics", "Quantum Computing"],
    publications: 17,
    email: "anand.mohan@dvacas.edu.in",
    image: "/images/faculty/anand-mohan.jpg",
    achievements: ["ISRO Collaborative Research Award", "Visiting Researcher — CERN 2019"],
  },
  {
    id: 7,
    name: "Dr. Revathi Chandrasekaran",
    department: "Chemistry",
    designation: "Head of Department & Associate Professor",
    qualification: "Ph.D. in Organic Chemistry, Anna University",
    experience: "20 years",
    specialization: ["Organic Synthesis", "Pharmaceutical Chemistry", "Green Chemistry"],
    publications: 21,
    email: "revathi.chandrasekaran@dvacas.edu.in",
    image: "/images/faculty/revathi-chandrasekaran.jpg",
    achievements: ["DST Young Scientist Award", "Patent holder — 2 green synthesis methods"],
  },
  {
    id: 8,
    name: "Mr. Vijay Balaji",
    department: "Management",
    designation: "Assistant Professor & Entrepreneurship Cell Coordinator",
    qualification: "MBA (IIM Kozhikode), M.Com",
    experience: "9 years",
    specialization: ["Marketing", "Entrepreneurship", "Digital Business"],
    publications: 3,
    email: "vijay.balaji@dvacas.edu.in",
    image: "/images/faculty/vijay-balaji.jpg",
    achievements: ["Founder of EdTech startup (acquired 2021)", "TiE Chennai Mentor"],
    industryExperience: "Ex-HUL, Nielsen — 7 years",
  },
];

// ============================================================
// INFRASTRUCTURE
// ============================================================
export const INFRASTRUCTURE = {
  classrooms: {
    title: "Smart Classrooms",
    description:
      "60+ air-conditioned smart classrooms equipped with 4K interactive flat panels, high-speed Wi-Fi, and cloud-connected learning management systems.",
    count: 60,
    features: [
      "4K Interactive Flat Panel Displays",
      "Surround Sound Systems",
      "HD Document Cameras",
      "Zoom-enabled video conferencing",
      "Real-time student response systems",
    ],
    image: "/images/infra/smart-classroom.jpg",
  },
  labs: [
    {
      name: "Advanced Computer Lab",
      capacity: 60,
      description:
        "Latest Dell Optiplex workstations with dual monitors, licensed software (MS Office 365, Adobe CC, MATLAB, Tally ERP), 1 Gbps internet.",
      image: "/images/infra/computer-lab.jpg",
    },
    {
      name: "AI & Machine Learning Lab",
      capacity: 30,
      description:
        "NVIDIA GPU-powered workstations for deep learning research, with pre-installed TensorFlow, PyTorch, and Jupyter environments.",
      image: "/images/infra/ai-lab.jpg",
    },
    {
      name: "Chemistry Research Lab",
      capacity: 30,
      description:
        "Equipped with HPLC, UV-Vis Spectrophotometer, rotary evaporators, and comprehensive organic synthesis facilities.",
      image: "/images/infra/chemistry-lab.jpg",
    },
    {
      name: "Physics Lab",
      capacity: 30,
      description:
        "Complete with oscilloscopes, spectrometers, optical benches, and a dedicated astrophysics observation deck with telescopes.",
      image: "/images/infra/physics-lab.jpg",
    },
    {
      name: "Language Lab",
      capacity: 40,
      description:
        "Fully digital language lab with individual booths, CALL software, and certified IELTS/TOEFL preparation materials.",
      image: "/images/infra/language-lab.jpg",
    },
    {
      name: "Business Simulation Lab",
      capacity: 40,
      description:
        "Bloomberg Terminal access, stock market simulation software, and live business case study environments.",
      image: "/images/infra/business-lab.jpg",
    },
  ],
  library: {
    title: "Central Library",
    description:
      "A 10,000 sq.ft. state-of-the-art library housing over 25,000 physical volumes, 50,000+ e-books, and access to 200+ international journals.",
    books: 25000,
    ebooks: 50000,
    journals: 200,
    seatingCapacity: 300,
    features: [
      "24/7 Digital Access",
      "RFID Book Tracking",
      "INFLIBNET Access",
      "Separate Research Reading Room",
      "Group Study Pods",
      "Silent Study Zones",
    ],
    image: "/images/infra/library.jpg",
  },
  hostel: {
    title: "Residential Campus",
    boys: {
      capacity: 200,
      rooms: "Single, Double & Triple sharing",
      amenities: ["24/7 Security", "CCTV", "WiFi", "Laundry", "Gym"],
    },
    girls: {
      capacity: 300,
      rooms: "Single, Double & Triple sharing",
      amenities: [
        "24/7 Lady Warden",
        "CCTV",
        "WiFi",
        "In-house medical",
        "Common room",
      ],
    },
    mess: {
      description:
        "Hygienic canteen serving South Indian, North Indian, and continental meals. Separate food courts for quick bites.",
      mealsPerDay: 3,
    },
    image: "/images/infra/hostel.jpg",
  },
  sports: {
    facilities: [
      "Cricket Ground",
      "Basketball Court",
      "Volleyball Court",
      "Badminton Courts (4)",
      "Table Tennis",
      "Chess Room",
      "Swimming Pool",
      "Fully-equipped Gymnasium",
      "Yoga & Meditation Center",
    ],
    image: "/images/infra/sports.jpg",
  },
  safety: {
    measures: [
      "400+ CCTV cameras across campus",
      "24/7 Security personnel",
      "Biometric entry at all key zones",
      "Emergency panic buttons",
      "Female security staff for women's zones",
      "Fire safety system (NFPA compliant)",
      "GPS-tracked college buses",
      "In-house medical center with ambulance",
    ],
  },
  transport: {
    busRoutes: 25,
    areasServed: [
      "Koyambedu",
      "Ambattur",
      "Anna Nagar",
      "Vadapalani",
      "Porur",
      "Tambaram",
      "Chrompet",
      "Velachery",
      "Adyar",
      "Perambur",
    ],
    image: "/images/infra/transport.jpg",
  },
};

// ============================================================
// PLACEMENTS
// ============================================================
export const PLACEMENTS = {
  stats: {
    placementRate: 92,
    studentsPlaced: 450,
    recruitersVisited: 120,
    avgSalaryLPA: 4.8,
    highestSalaryLPA: 18,
    preplacementOffers: 38,
  },
  topRecruiters: [
    { name: "TCS", logo: "/images/recruiters/tcs.png", sector: "IT" },
    { name: "Infosys", logo: "/images/recruiters/infosys.png", sector: "IT" },
    { name: "Wipro", logo: "/images/recruiters/wipro.png", sector: "IT" },
    { name: "Cognizant", logo: "/images/recruiters/cognizant.png", sector: "IT" },
    { name: "HCL Tech", logo: "/images/recruiters/hcl.png", sector: "IT" },
    { name: "Accenture", logo: "/images/recruiters/accenture.png", sector: "Consulting" },
    { name: "Deloitte", logo: "/images/recruiters/deloitte.png", sector: "Consulting" },
    { name: "HDFC Bank", logo: "/images/recruiters/hdfc.png", sector: "Banking" },
    { name: "ICICI Bank", logo: "/images/recruiters/icici.png", sector: "Banking" },
    { name: "Axis Bank", logo: "/images/recruiters/axis.png", sector: "Banking" },
    { name: "Capgemini", logo: "/images/recruiters/capgemini.png", sector: "IT" },
    { name: "Amazon", logo: "/images/recruiters/amazon.png", sector: "E-commerce" },
    { name: "Flipkart", logo: "/images/recruiters/flipkart.png", sector: "E-commerce" },
    { name: "Zoho", logo: "/images/recruiters/zoho.png", sector: "SaaS" },
    { name: "Freshworks", logo: "/images/recruiters/freshworks.png", sector: "SaaS" },
    { name: "TVS Motor", logo: "/images/recruiters/tvs.png", sector: "Manufacturing" },
    { name: "L&T", logo: "/images/recruiters/lt.png", sector: "Engineering" },
    { name: "KPMG", logo: "/images/recruiters/kpmg.png", sector: "Consulting" },
    { name: "EY India", logo: "/images/recruiters/ey.png", sector: "Consulting" },
    { name: "Byju's", logo: "/images/recruiters/byjus.png", sector: "EdTech" },
  ],
  sectorBreakdown: [
    { sector: "Information Technology", percentage: 38 },
    { sector: "Banking & Finance", percentage: 22 },
    { sector: "Consulting", percentage: 15 },
    { sector: "E-Commerce", percentage: 10 },
    { sector: "Manufacturing", percentage: 8 },
    { sector: "Others", percentage: 7 },
  ],
  testimonials: [
    {
      id: 1,
      name: "Aishwarya Menon",
      batch: "B.Sc. Computer Science 2024",
      company: "TCS (NQT)",
      ctc: "₹7 LPA",
      quote:
        "The placement cell at Dr. Vikram Aggarwal College of Arts & Science is exceptional. From resume workshops to mock interviews, they prepared us for everything. I got placed in TCS before my final semester even ended!",
      image: "/images/students/aishwarya-menon.jpg",
    },
    {
      id: 2,
      name: "Rahul Srinivasan",
      batch: "B.Com Computer Science 2024",
      company: "Deloitte India",
      ctc: "₹9.5 LPA",
      quote:
        "The BCA+Commerce combination gave me a unique edge. Dr. Vikram Aggarwal College of Arts & Science taught me both the technical and financial aspects of business analytics — exactly what Deloitte was looking for.",
      image: "/images/students/rahul-srinivasan.jpg",
    },
    {
      id: 3,
      name: "Preethi Nair",
      batch: "B.B.A. 2024",
      company: "Amazon India",
      ctc: "₹8.2 LPA",
      quote:
        "My professors didn't just teach textbook content — they mentored us, connected us with industry, and pushed us to be the best version of ourselves. Forever grateful to Dr. Vikram Aggarwal College of Arts & Science.",
      image: "/images/students/preethi-nair.jpg",
    },
    {
      id: 4,
      name: "Kiran Kumar",
      batch: "B.Sc. IT 2024",
      company: "Zoho Corporation",
      ctc: "₹12 LPA",
      quote:
        "Dr. Vikram Aggarwal College of Arts & Science has an incredible tech community. The hackathons, coding contests, and open-source projects I worked on here are what got me into Zoho. Highly recommend the B.Sc. IT program.",
      image: "/images/students/kiran-kumar.jpg",
    },
    {
      id: 5,
      name: "Sruthi Balakrishnan",
      batch: "B.A. Economics 2024",
      company: "ICICI Bank (Credit Analyst)",
      ctc: "₹5.5 LPA",
      quote:
        "I never thought an Arts student could walk into a top bank's credit team. Dr. Vikram Aggarwal College of Arts & Science's Bloomberg Terminal access and finance electives made all the difference.",
      image: "/images/students/sruthi-balakrishnan.jpg",
    },
  ],
  placementProcess: [
    {
      step: 1,
      title: "Resume Building",
      description:
        "Expert-guided resume workshops and LinkedIn profile optimization sessions from Year 1.",
    },
    {
      step: 2,
      title: "Aptitude Training",
      description:
        "Daily aptitude, logical reasoning, and verbal ability practice through our dedicated Placement Training Cell.",
    },
    {
      step: 3,
      title: "Mock Interviews",
      description:
        "Panel interviews conducted by industry professionals to simulate real placement scenarios.",
    },
    {
      step: 4,
      title: "Internships",
      description:
        "Mandatory 2-month industry internship ensures practical experience before final placements.",
    },
    {
      step: 5,
      title: "Campus Drives",
      description:
        "100+ companies visit campus annually. Students apply directly through our placement portal.",
    },
    {
      step: 6,
      title: "Offer & Onboarding",
      description:
        "Dedicated placement coordinators assist with offer negotiation and pre-joining formalities.",
    },
  ],
};

// ============================================================
// ADMISSIONS
// ============================================================
export const ADMISSIONS = {
  academicYear: "2025–2026",
  applicationOpenDate: "March 1, 2025",
  lastDateToApply: "June 30, 2025",
  counsellingDates: "July 1–15, 2025",
  classesCommenceDate: "August 1, 2025",
  applicationFee: 500,
  process: [
    {
      step: 1,
      title: "Online Application",
      description:
        "Fill the online application form at dvacas.edu.in/apply or visit the campus admission office.",
      icon: "📝",
    },
    {
      step: 2,
      title: "Document Submission",
      description:
        "Upload scanned copies of required documents or submit physically at the admissions office.",
      icon: "📂",
    },
    {
      step: 3,
      title: "Counselling",
      description:
        "Attend in-person or virtual counselling to choose your course and finalize seat.",
      icon: "🎓",
    },
    {
      step: 4,
      title: "Fee Payment",
      description:
        "Pay the course fees online or via DD/NEFT to confirm your admission.",
      icon: "💳",
    },
    {
      step: 5,
      title: "Enrollment",
      description:
        "Receive your enrollment number, student ID, and welcome kit. Start your journey at Dr. Vikram Aggarwal College of Arts & Science!",
      icon: "🎉",
    },
  ],
  documentsRequired: [
    "10th Marksheet & Certificate (Original + 2 copies)",
    "12th Marksheet & Certificate (Original + 2 copies)",
    "Transfer Certificate (TC) from previous institution",
    "Community Certificate (SC/ST/OBC, if applicable)",
    "Aadhar Card (Self & Parent)",
    "Passport-size photographs (6 copies)",
    "Income Certificate (for scholarship applicants)",
    "Migration Certificate (for students from other states)",
  ],
  scholarships: [
    {
      name: "Dr. Vikram Aggarwal Merit Scholarship",
      criteria: "Top 3 rank in 12th board exams",
      benefit: "100% tuition fee waiver for all 3 years",
    },
    {
      name: "Sports Excellence Scholarship",
      criteria: "State/National level sports achievement",
      benefit: "50% tuition fee waiver",
    },
    {
      name: "Need-Based Financial Aid",
      criteria: "Family income below ₹2 LPA",
      benefit: "30–70% fee waiver based on assessment",
    },
    {
      name: "Single Parent Scholarship",
      criteria: "Student from single-parent household",
      benefit: "25% tuition fee waiver",
    },
    {
      name: "Anna Adarsh Legacy Scholarship",
      criteria: "Daughters/relatives of Anna Adarsh College alumni",
      benefit: "20% tuition fee waiver",
    },
  ],
  faq: [
    {
      q: "Is there a management quota for admissions?",
      a: "Yes. A limited number of management quota seats are available. Contact the admissions office for details.",
    },
    {
      q: "Is hostel accommodation guaranteed for all students?",
      a: "Hostel seats are allotted on a first-come, first-served basis. We recommend applying early.",
    },
    {
      q: "Can I apply for multiple courses?",
      a: "Yes, you may indicate up to 3 course preferences in the application form.",
    },
    {
      q: "Is there an entrance exam?",
      a: "No entrance exam is required. Admissions are based on 12th marks and counselling.",
    },
    {
      q: "Are EMI/installment options available for fees?",
      a: "Yes, semester-wise payment plans are available. Educational loans are also facilitated through partner banks.",
    },
  ],
};

// ============================================================
// NEWS & EVENTS
// ============================================================
export const NEWS_EVENTS = [
  {
    id: 1,
    type: "event",
    title: "Annual Tech Fest — 'InnovatX 2025'",
    date: "2025-03-15",
    category: "Technical",
    excerpt:
      "3-day national-level technical festival featuring hackathons, coding competitions, robotics, and paper presentations. Register before Feb 28!",
    image: "/images/events/innovatx-2025.jpg",
    tags: ["Hackathon", "Coding", "Robotics"],
    registrationLink: "/events/innovatx-2025/register",
  },
  {
    id: 2,
    type: "news",
    title: "Dr. Vikram Aggarwal College of Arts & Science Signs MOU with Infosys Springboard",
    date: "2025-02-20",
    category: "Achievement",
    excerpt:
      "A landmark partnership that will bring Infosys's industry-aligned tech curriculum, free certifications, and placement support to all Dr. Vikram Aggarwal College of Arts & Science students.",
    image: "/images/events/infosys-mou.jpg",
    tags: ["Industry", "Partnership", "Placement"],
  },
  {
    id: 3,
    type: "event",
    title: "Literary Fest — 'Quillcraft 2025'",
    date: "2025-04-02",
    category: "Cultural",
    excerpt:
      "Annual literary extravaganza featuring debates, creative writing, poetry slam, and drama. Open to all colleges in Tamil Nadu.",
    image: "/images/events/quillcraft-2025.jpg",
    tags: ["Literature", "Debate", "Drama"],
    registrationLink: "/events/quillcraft-2025/register",
  },
  {
    id: 4,
    type: "news",
    title: "92% Placement Record Achieved for Batch 2024",
    date: "2025-01-10",
    category: "Placement",
    excerpt:
      "Dr. Vikram Aggarwal College of Arts & Science's first graduating batch achieved a stellar 92% placement rate with packages ranging from ₹3.8 LPA to ₹18 LPA.",
    image: "/images/events/placement-2024.jpg",
    tags: ["Placement", "Achievement", "Milestone"],
  },
  {
    id: 5,
    type: "event",
    title: "National Sports Meet — 'Champions League 2025'",
    date: "2025-05-10",
    category: "Sports",
    excerpt:
      "Inter-college sports tournament covering cricket, basketball, volleyball, athletics, and chess. Prizes worth ₹5 Lakhs.",
    image: "/images/events/sports-meet-2025.jpg",
    tags: ["Sports", "Cricket", "Basketball"],
    registrationLink: "/events/sports-meet-2025/register",
  },
  {
    id: 6,
    type: "news",
    title: "New AI & ML Lab Inaugurated by IIT Madras Professor",
    date: "2024-12-15",
    category: "Infrastructure",
    excerpt:
      "State-of-the-art GPU-powered AI lab inaugurated, featuring 30 NVIDIA-powered workstations for machine learning research.",
    image: "/images/events/ai-lab-inauguration.jpg",
    tags: ["Infrastructure", "AI", "Research"],
  },
];

// ============================================================
// TESTIMONIALS (Student & Parent)
// ============================================================
export const TESTIMONIALS = [
  {
    id: 1,
    type: "student",
    name: "Divya Ramachandran",
    course: "B.Sc. Computer Science",
    year: "3rd Year",
    rating: 5,
    quote:
      "Dr. Vikram Aggarwal College of Arts & Science completely transformed my perspective on education. The faculty are world-class, the labs are incredible, and the placement cell goes above and beyond for every student.",
    image: "/images/testimonials/divya.jpg",
  },
  {
    id: 2,
    type: "parent",
    name: "Mr. Mohan Kumar",
    relation: "Father of Arjun Kumar (B.Com CS, 2024)",
    rating: 5,
    quote:
      "As a parent, what impressed me most was the safety, transparency, and the personal attention each student receives. Dr. Vikram Aggarwal College of Arts & Science isn't just a college — it's a second home.",
    image: "/images/testimonials/mohan-kumar.jpg",
  },
  {
    id: 3,
    type: "student",
    name: "Sanjay Krishnan",
    course: "B.B.A.",
    year: "2nd Year",
    rating: 5,
    quote:
      "The entrepreneurship cell and the guest lectures from actual founders and investors are priceless. I'm already running a small business, thanks to the support I got here!",
    image: "/images/testimonials/sanjay.jpg",
  },
  {
    id: 4,
    type: "parent",
    name: "Mrs. Saranya Venkatesan",
    relation: "Mother of Nithya Venkatesan (B.A. English, 2024)",
    rating: 5,
    quote:
      "My daughter's confidence and communication skills have transformed completely. The campus environment is excellent and the management is very responsive to parents.",
    image: "/images/testimonials/saranya.jpg",
  },
];

// ============================================================
// AFFILIATIONS & ACCREDITATIONS
// ============================================================
export const AFFILIATIONS = [
  {
    name: "University of Madras",
    type: "Affiliated University",
    logo: "/images/affiliations/university-of-madras.png",
  },
  {
    name: "University Grants Commission (UGC)",
    type: "Regulatory Body",
    logo: "/images/affiliations/ugc.png",
  },
  {
    name: "NAAC",
    type: "Accreditation (Pending — targeting A+)",
    logo: "/images/affiliations/naac.png",
  },
  {
    name: "Tamil Nadu Government",
    type: "State Approval",
    logo: "/images/affiliations/tn-govt.png",
  },
  {
    name: "Infosys Springboard",
    type: "Industry Partner",
    logo: "/images/affiliations/infosys.png",
  },
  {
    name: "CISCO Networking Academy",
    type: "Certified Program Partner",
    logo: "/images/affiliations/cisco.png",
  },
  {
    name: "Microsoft Learn",
    type: "Microsoft Azure Education Partner",
    logo: "/images/affiliations/microsoft.png",
  },
  {
    name: "AWS Academy",
    type: "Amazon Web Services Partner",
    logo: "/images/affiliations/aws.png",
  },
];

// ============================================================
// NAVIGATION
// ============================================================
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    sublinks: [
      { label: "Arts Courses", href: "/courses/arts" },
      { label: "Commerce Courses", href: "/courses/commerce" },
      { label: "Science Courses", href: "/courses/science" },
    ],
  },
  {
    label: "About",
    href: "/about",
    sublinks: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Management", href: "/about/management" },
      { label: "Achievements", href: "/about/achievements" },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  {
    label: "Campus",
    href: "/campus",
    sublinks: [
      { label: "Infrastructure", href: "/campus/infrastructure" },
      { label: "Hostel", href: "/campus/hostel" },
      { label: "Transport", href: "/campus/transport" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// SEO META DATA
// ============================================================
export const SEO = {
  home: {
    title: "Dr. Vikram Aggarwal College of Arts & Science | Best College in Chennai",
    description:
      "Dr. Vikram Aggarwal College of Arts & Science — Top-ranked college in Chennai offering B.A., B.Com, B.Sc., BBA, BCA programs with world-class faculty, 92% placements, and state-of-the-art campus. Apply Now for 2025-26.",
    keywords: [
      "best college in Chennai",
      "arts science college Chennai",
      "B.Com college Chennai",
      "BSc Computer Science Chennai",
      "BBA college Chennai",
      "Dr. Vikram Aggarwal College of Arts & Science",
      "Dr Vikram Aggarwal College",
      "Anna Adarsh group college",
      "UG admission 2025 Chennai",
      "top placement college Chennai",
    ],
  },
  courses: {
    title: "UG Courses 2025-26 | Dr. Vikram Aggarwal College of Arts & Science Chennai",
    description:
      "Explore 12+ UG programs in Arts, Commerce, and Science at Dr. Vikram Aggarwal College of Arts & Science. B.Com, BBA, BCA, B.Sc. CS, B.A. English and more with 92% placement record.",
  },
  placements: {
    title: "Placements | 92% Placement Rate | Dr. Vikram Aggarwal College of Arts & Science Chennai",
    description:
      "Dr. Vikram Aggarwal College of Arts & Science achieves 92% placement rate with top recruiters like TCS, Infosys, Deloitte, Amazon. Avg package ₹4.8 LPA, highest ₹18 LPA.",
  },
};
