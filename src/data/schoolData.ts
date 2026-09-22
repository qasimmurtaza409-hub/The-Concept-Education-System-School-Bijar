import { FeatureItem, BenefitItem, ProgramInfo } from '../types';

export const SCHOOL_INFO = {
  name: 'The Concept Education System',
  campus: 'Bijar',
  fullName: 'The Concept Education System Bijar',
  tagline: 'Your Kids Deserve The Best Education',
  motto: 'Knowledge, Character, Faith & Excellence',
  phone: '03049315158',
  phoneFormatted: '0304-9315158',
  phoneInternational: '+923049315158',
  whatsappUrl: 'https://wa.me/923049315158?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20admission%20at%20The%20Concept%20Education%20System%20Bijar.',
  location: 'Near Madni Public Model High School',
  city: 'Bijar',
  province: 'Punjab, Pakistan',
  timings: 'Monday – Saturday: 7:30 AM to 1:45 PM (Morning Session)',
  admissionStatus: 'Admissions Open (New Session)',
  email: 'theconceptbijar@gmail.com',
};

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'teachers',
    title: 'Professional Teachers',
    subtitle: 'Experienced, Vetted & Passionate Faculty',
    description:
      'Our team comprises qualified, trained subject-matter specialists committed to inspiring young minds through compassionate guidance and innovative teaching practices.',
    iconName: 'GraduationCap',
    points: [
      'Certified and specialized subject teachers',
      'Continuous teacher training & methodology workshops',
      'Child psychology-trained early educators',
      'Dedicated mentoring and regular feedback'
    ],
    color: 'blue'
  },
  {
    id: 'programs',
    title: 'Class Programs',
    subtitle: 'Structured, Progressive Academic Framework',
    description:
      'Carefully calibrated syllabus designed to nurture cognitive, linguistic, mathematical, and analytical milestones from early childhood through senior classes.',
    iconName: 'BookOpenCheck',
    points: [
      'Well-planned daily & weekly lesson frameworks',
      'Standardized curricula aligned with modern academic boards',
      'Continuous evaluations without exam anxiety',
      'Remedial support for students needing extra guidance'
    ],
    color: 'amber'
  },
  {
    id: 'activities',
    title: 'Group Activities',
    subtitle: 'Collaboration, Confidence & Social Mastery',
    description:
      'Education extends beyond textbooks through team projects, speech declamations, science exhibitions, sports galas, and cultural events.',
    iconName: 'Users',
    points: [
      'Interactive team learning & science experiments',
      'Debates, Qirat, Naat & public speaking events',
      'Healthy physical games & annual sports competitions',
      'Arts, crafts and creative expression workshops'
    ],
    color: 'emerald'
  },
  {
    id: 'development',
    title: 'Individual Development',
    subtitle: 'Every Child Is Unique & Supported',
    description:
      'We recognize that each child learns differently. Our small student-to-teacher ratio allows focused attention on each child’s unique talents, challenges, and character.',
    iconName: 'Sparkles',
    points: [
      'Personal attention and customized pacing',
      'Strengthening moral character & civic responsibility',
      'Building self-confidence and emotional intelligence',
      'Regular one-on-one parent-teacher consultations'
    ],
    color: 'sky'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'quran',
    title: 'Quran Education',
    subtitle: 'Nazra with Tajweed & Sunnah Ethics',
    description:
      'Spiritual enlightenment anchored in authentic Quranic recitation, correct Tajweed, memorization of daily Masnoon Duas, and practical Islamic manners.',
    iconName: 'BookHeart',
    points: [
      'Dedicated certified Qari / Qaria instructors',
      'Daily Nazra classes with accurate pronunciation (Makharij)',
      'Memorization of daily Supplications (Duas) & Kalimahs',
      'Grooming in Islamic morals, honesty, and respect'
    ],
    color: 'emerald'
  },
  {
    id: 'education-plans',
    title: 'Best Education Plans',
    subtitle: 'Concept-Oriented Syllabus Design',
    description:
      'We break the cycle of traditional cramming (ratta system) by embedding deep understanding, real-life practical examples, and inquiry-driven understanding.',
    iconName: 'Award',
    points: [
      'No cramming — focus on conceptual mastery',
      'Visual models, practical examples & experiments',
      'Streamlined homework plans respecting family time',
      'Modern bilingual English & Urdu foundation'
    ],
    color: 'blue'
  },
  {
    id: 'skills',
    title: 'Develop Important Skills',
    subtitle: 'Preparing Confident Thinkers & Leaders',
    description:
      'Instilling vital 21st-century foundational skills including mental arithmetic, communication, critical problem-solving, and leadership qualities.',
    iconName: 'Brain',
    points: [
      'Fluency in spoken and written English & Urdu',
      'Mental math, logical problem solving and reasoning',
      'Computer & technology exposure for modern times',
      'Leadership, discipline, and cooperative spirit'
    ],
    color: 'amber'
  },
  {
    id: 'interactive',
    title: 'Interactive Learning',
    subtitle: 'Engaging, Joyful & Active Classrooms',
    description:
      'Classrooms alive with questions, hands-on learning kits, educational flashcards, audiovisual tools, and participatory discussions that make learning joyful.',
    iconName: 'Lightbulb',
    points: [
      'Visual learning tools and smart activities',
      'Learning through educational games and discovery',
      'Encouragement of active questioning & curiosity',
      'Comfortable, vibrant, and safe classroom spaces'
    ],
    color: 'purple'
  }
];

export const ACADEMIC_PROGRAMS: ProgramInfo[] = [
  {
    id: 'playgroup-nursery',
    title: 'Early Years / Pre-School',
    ageGroup: 'Ages 3 - 5 Years',
    badge: 'Playgroup, Nursery & Prep',
    description: 'A gentle, joyful start to education focused on fine motor skills, social habits, phonics, number recognition, and playful curiosity.',
    highlights: ['Montessori-inspired play tools', 'Phonics & basic English/Urdu alphabets', 'Basic Nazra primer & manners', 'Colourful activity zones'],
    timing: '8:00 AM – 12:30 PM',
    subjects: ['Phonics', 'Basic Math', 'Urdu Haroof', 'Drawing & Coloring', 'Islamic Manners']
  },
  {
    id: 'primary',
    title: 'Primary School',
    ageGroup: 'Classes 1st – 5th',
    badge: 'Grades 1 to 5',
    description: 'Solid conceptual grounding in languages, core sciences, mental arithmetic, and moral discipline, building strong reading and writing independence.',
    highlights: ['Concept-driven science & mathematics', 'Spoken English & Urdu literature', 'Daily Quran & Tajweed period', 'Computer fundamentals'],
    timing: '7:45 AM – 1:30 PM',
    subjects: ['English', 'Mathematics', 'General Science', 'Urdu', 'Islamiat & Quran', 'Social Studies', 'Computer']
  },
  {
    id: 'middle',
    title: 'Middle & Secondary School',
    ageGroup: 'Classes 6th – 8th / 9th',
    badge: 'Grades 6 to 8+',
    description: 'Advanced academic rigor developing analytical reasoning, exam readiness, science labs, leadership skills, and character excellence.',
    highlights: ['In-depth Science & Mathematics', 'Analytical writing & debate', 'Comprehensive Board prep foundation', 'Career & academic counselling'],
    timing: '7:30 AM – 1:45 PM',
    subjects: ['Physics/Chemistry intro', 'Biology', 'Advanced Math', 'English Grammar & Comp', 'Urdu', 'Islamic Studies', 'Computer Science']
  },
  {
    id: 'quran-wing',
    title: 'Dedicated Quran & Tajweed Academy',
    ageGroup: 'All Enrolled Students',
    badge: 'Special Quran Wing',
    description: 'Integrated daily Quran education alongside the standard modern curriculum, ensuring spiritual growth without missing school academics.',
    highlights: ['Proper Makharij & Tajweed rules', 'Hifz support track for keen students', 'Hadith & Islamic history stories', 'Duas for daily life'],
    timing: 'Daily dedicated school period',
    subjects: ['Noorani Qaida', 'Nazra Quran', 'Hifz Surahs', 'Tajweed-ul-Quran', 'Seerat-un-Nabi (PBUH)']
  }
];

export const FAQS_DATA = [
  {
    q: 'How can I apply for admission at The Concept Education System Bijar?',
    a: 'You can apply easily through our online admission portal on this website by clicking "Enroll Now", or visit our campus located Near Madni Public Model High School, Bijar during school hours (Monday–Saturday 7:30 AM – 2:00 PM). You can also call or WhatsApp us at 03049315158.'
  },
  {
    q: 'What documents are required at the time of admission?',
    a: 'Required documents include: (1) Copy of Student B-Form / Birth Certificate, (2) 2 recent passport-size photographs of the student, (3) Copy of Father/Guardian CNIC, and (4) School Leaving Certificate / previous report card (if transferring from another school).'
  },
  {
    q: 'Is Quran education integrated into regular school hours?',
    a: 'Yes, absolutely! As one of our core pillars, Quran Education with correct Tajweed, Masnoon Duas, and Islamic morals is integrated into every student’s daily routine under qualified Qaris.'
  },
  {
    q: 'What makes "The Concept Education System" different from other schools?',
    a: 'We strictly avoid rote learning (ratta). We focus on conceptual clarity, individual attention for every child, professional and caring teachers, active group learning, and a balanced blend of modern academic skills and Islamic values.'
  },
  {
    q: 'What are the school timings?',
    a: 'Regular school timings are Monday to Thursday and Saturday from 7:30 AM to 1:45 PM (Pre-school classes dismiss earlier around 12:30 PM). On Fridays, classes dismiss before Jummah prayers.'
  },
  {
    q: 'Can parents meet the teachers and principal before enrolling?',
    a: 'Yes! We warmly invite parents for a campus tour and consultation with our academic coordinator. Please call 0304-9315158 to arrange a convenient time.'
  }
];
