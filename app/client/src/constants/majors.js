angular.module('app')
.constant('MAJORS', [
  "Women's Studies",
  'Accounting Technician and Bookkeeping',
  'Accounting',
  'Acting',
  'Actuarial Science',
  'Acupuncture and Oriental Medicine',
  'Administrative Assistant and Secretarial Science',
  'Adult Development and Aging',
  'Adult Health Nursing',
  'Adult and Continuing Education',
  'Advanced Dentistry and Oral Sciences',
  'Advanced Legal Research',
  'Advanced Legal Studies',
  'Advertising',
  'Aeronautics and Aviation Technology',
  'Aerospace Engineering Technician',
  'Aerospace Engineering',
  'Aerospace and Aeronautical Engineering',
  'African American Studies',
  'African Studies',
  'Agricultural Business and Technology',
  'Agricultural Business',
  'Agricultural Economics',
  'Agricultural Engineering',
  'Agricultural Extension Services',
  'Agricultural Mechanics and Machinery',
  'Agricultural Production Operations',
  'Agricultural Teacher Education',
  'Agricultural and Environmental Engineering',
  'Agricultural and Food Products Processing',
  'Agriculture Operations',
  'Agriculture',
  'Agronomy, Range, and Crop Science',
  'Air Traffic Control',
  'Air Transportation',
  'Air, Space, and Radar Technology',
  'Aircraft Maintenance',
  'Aircraft Powerplant Technician',
  'Airline Flight Attendant',
  'Alternative Medical Systems and Holistic Health',
  'Alternative Medicine',
  'Alternative Therapeutic Professions',
  'American Sign Language (ASL)',
  'Anatomy',
  'Anesthesiologist Assistant',
  'Animal Biology',
  'Animal Grooming',
  'Animal Husbandry',
  'Animal Physiology and Behavior',
  'Animal Sciences and Husbandry',
  'Animal Sciences',
  'Animal Services',
  'Animal Training',
  'Animation, Video Graphics and Special Effects',
  'Anthropology and Archaeology',
  'Apparel and Textile Science',
  'Aquaculture',
  'Arabic Language and Literature',
  'Architectural Drafting (CAD/CADD)',
  'Architectural Engineering Technician',
  'Architectural Engineering and Technology',
  'Architectural Engineering',
  'Architectural Sciences and Technology',
  'Architecture Studies',
  'Architecture and Planning',
  'Architecture',
  'Area and Ethnic Studies',
  'Aromatherapy, Herbalism, and Reiki',
  'Art History',
  'Art Studies',
  'Art Teacher Education',
  'Artificial Intelligence',
  'Arts',
  'Arts, Entertainment, and Media Management',
  'Asian Studies',
  'Astronomy and Astrophysics',
  'Astronomy',
  'Astrophysics',
  'Athletic Training',
  'Atmospheric Sciences and Meteorology',
  'Atmospheric Sciences',
  'Audiology',
  'Autobody and Collision Repair',
  'Automotive Engineering Technician',
  'Automotive Mechanics',
  'Aviation Management and Operations',
  'Avionics Maintenance Technician',
  'Baking and Pastry Arts',
  'Banking and Finance',
  'Banking, Corporate, and Tax Law',
  'Barbering',
  'Bartending',
  'Behavioral Sciences',
  'Biblical Studies',
  'Bicycle Mechanics and Repair',
  'Bilingual and Multicultural Education',
  'Biochemistry and Molecular Biology',
  'Bioengineering and Biomedical Engineering',
  'Bioinformatics',
  'Biological Engineering',
  'Biological Sciences',
  'Biological and Physical Sciences',
  'Biology Laboratory Technician',
  'Biology and Biological Sciences',
  'Biology',
  'Biomedical Sciences and Molecular Medicine',
  'Biomedical Technician',
  'Biotechnology',
  'Boilermaker',
  'Botany and Plant Physiology',
  'Botany and Plant Sciences',
  'Broadcast Journalism',
  'Buddhism',
  'Building Construction Inspection',
  'Building Construction Technology',
  'Business Administration and Management',
  'Business Management',
  'Business Support Services',
  'Business Teacher Education',
  'Business',
  'Cardiovascular Technician',
  'Carpentry and Construction',
  'Carpentry',
  'Carpet, Floor, and Tile Worker',
  'Cellular Biology',
  'Ceramics',
  'Chemical Engineering',
  'Chemical Technician',
  'Chemistry and Chemical Technology',
  'Chemistry',
  'Child Care Management',
  'Child Care Provider',
  'Child Care Services',
  'Child Development',
  'Chinese Language and Literature',
  'Chiropractic Studies',
  'Christianity',
  'Cinematography and Video Production',
  'Civil Engineering Technician',
  'Civil Engineering',
  'Civil and Surveying Engineering',
  'Clerical Services',
  'Climatology',
  'Clinical Laboratory Assistant',
  'Clinical Laboratory Technician',
  'Clinical Psychology and Counseling',
  'Clinical Psychology',
  'Cognitive Science',
  'College Student Counseling and Personnel Services',
  'Combat Systems Engineering and Stealth Technology',
  'Commercial Fishing',
  'Commercial Photography',
  'Commercial and Advertising Art',
  'Communication Disorders',
  'Communication Sciences and Disorders',
  'Communication and Media Studies',
  'Communications Systems Installation and Repair',
  'Communications Technicians',
  'Communications',
  'Community Health Services and Counseling',
  'Community Health and Preventive Medicine',
  'Community Organization and Advocacy',
  'Community Psychology',
  'Comparative Literature',
  'Computational and Applied Mathematics',
  'Computer Engineering Technician',
  'Computer Engineering',
  'Computer Graphics',
  'Computer Hardware Engineering',
  'Computer Installation and Repair',
  'Computer Programming',
  'Computer Science',
  'Computer Software Engineering',
  'Computer Systems Analysis',
  'Computer Systems Networking and Telecommunications',
  'Computer Systems Technician',
  'Computer Systems',
  'Computer Teacher Education',
  'Computer and IT Administration',
  'Computer and Information Sciences',
  'Computer and Information Studies',
  'Computer and Information Systems Security',
  'Concrete Finishing',
  'Concrete and Masonry',
  'Conducting',
  'Conservation and Environmental Studies',
  'Construction Engineering Technician',
  'Construction Engineering and Technology',
  'Construction Engineering',
  'Construction Finishing and Inspection',
  'Construction Management',
  'Construction and Heavy Equipment Operation',
  'Consumer and Retail Merchandising',
  'Cooking and Culinary Science',
  'Corporate Communications',
  'Corrections and Corrections Administration',
  'Cosmetology Instruction and Salon Management',
  'Cosmetology and Personal Grooming Services',
  'Cosmetology',
  'Counseling Psychology',
  'Court Reporting',
  'Crafts and Artisanry',
  'Creative Writing',
  'Criminal Justice and Corrections',
  'Criminal Justice and Law Enforcement Administration',
  'Criminal Justice and Safety Studies',
  'Criminology',
  'Crop Production',
  'Crop and Soil Studies',
  'Culinary Arts and Food Service',
  'Culinary Arts',
  'Curriculum',
  'Customer Service Support and Call Center Operation',
  'Cyber/Computer Forensics and Counterterrorism',
  'Dance',
  'Data Entry',
  'Data Processing Technician',
  'Data Processing',
  'Dental Assisting',
  'Dental Hygiene',
  'Dental Studies',
  'Dentistry',
  'Design and Applied Arts',
  'Design and Visual Communications',
  'Desktop Publishing and Digital Imaging Design',
  'Developmental and Child Psychology',
  'Diagnostic Technician',
  'Diagnostics',
  'Diesel Mechanics',
  'Dietetics and Clinical Nutrition',
  'Digital Design',
  'Digital and Print Journalism',
  'Digital and Print Publishing',
  'Divinity, Ministry, and Pre-Theology',
  'Drafting and Design Engineering Technician (CAD/CADD)',
  'Drama and Theatre Production',
  'Drawing',
  'Drywall Installation',
  'E-Commerce',
  'Early Childhood Education',
  'Earth Sciences',
  'East Asian Languages and Literatures',
  'Ecology and Evolutionary Biology',
  'Ecology, Evolution, and Population Biology',
  'Economic Development',
  'Economics and Econometrics',
  'Economics',
  'Education Studies and Research',
  'Education of Individuals with Impairments and Disabilities',
  'Education of the Gifted and Talented',
  'Education',
  'Educational Administration and Supervision',
  'Educational Administration',
  'Educational Media Design',
  'Educational Research',
  'Educational, Instructional, and Curriculum Supervision',
  'Electrical Engineering Technician',
  'Electrical Trades',
  'Electrical and Communications Engineering',
  'Electrical and Electronics Engineering',
  'Electrical and Power Transmission Installation',
  'Electrician',
  'Electronics Equipment Installation and Repair',
  'Electronics Maintenance and Repair',
  'Elementary Education',
  'Elementary and Middle School Administration',
  'Emergency Care Attendant (EMT)',
  'Emergency Medical Technician (EMT Paramedic)',
  'Energy, Environment, and Natural Resources Law',
  'Engineering Design',
  'Engineering Drafting and Design',
  'Engineering Mechanics',
  'Engineering Physics',
  'Engineering Science',
  'Engineering Sciences and Mechanics',
  'Engineering Studies',
  'Engineering',
  'English Language Studies',
  'English and Speech Teacher Education',
  'English',
  'Entrepreneurship and Small Business Operations',
  'Entrepreneurship',
  'Environmental Architecture and Design',
  'Environmental Engineering Technician',
  'Environmental Engineering',
  'Environmental Health',
  'Environmental Sciences',
  'Environmental Studies',
  'Environmental and Marine Sciences',
  'Epidemiology',
  'Equine Studies',
  'Equipment Maintenance',
  'Esthetician and Skin Care',
  'Ethics',
  'European and Russian Studies',
  'Executive Assistant',
  'Exercise Physiology',
  'Facial Treatment',
  'Family Practice and Pediatric Nursing',
  'Family Studies and Consumer Sciences',
  'Family and Community Services',
  'Family and Consumer Economics',
  'Farm and Ranch Management',
  'Fashion and Apparel Design',
  'Fashion and Apparel Merchandising',
  'Fiber, Textile and Weaving',
  'Film and Video Studies',
  'Film, Video, and Photography',
  'Finance and Accounting',
  'Finance',
  'Financial Planning',
  'Financial Services Marketing',
  'Fine Arts',
  'Fine and Studio Arts Management',
  'Fire Prevention and Safety Technology',
  'Fire Protection',
  'Fire Science and Fire Fighting',
  'Fire Services Administration',
  'Flight Instructor',
  'Food Preparation and Service',
  'Food Science and Technology',
  'Food Science',
  'Food Service Systems Management',
  'Food and Nutrition Studies',
  'Foods, Nutrition, and Wellness Studies',
  'Foreign Language Teacher Education',
  'Foreign Languages and Literatures',
  'Forensic Psychology',
  'Forensic Science and Technology',
  'Forest Resources Management',
  'Forest Sciences',
  'Forest and Wood Sciences',
  'Forestry',
  'Foundations of Education',
  'Franchise Operations',
  'French Language and Literature',
  'Funeral Service and Direction',
  'Funeral Service and Mortuary Science',
  'Game and Interactive Media Design',
  'General Construction Trades',
  'General Mechanics and Repair',
  'Genetics',
  'Geography',
  'Geology and Earth Science',
  'German Language and Literature',
  'Gerontology',
  'Glazier',
  'Graphic Communication and Printing',
  'Graphic Communications',
  'Graphic Design',
  'Graphic and Printing Equipment Operation',
  'Greenhouse, Nursery, and Floristry Operations',
  'Ground Transportation',
  'HVAC Technician',
  'HVAC and Refrigeration Engineering Technician',
  'Hair Styling and Design',
  'Hazardous Materials and Industrial Safety Technician',
  'Health Aides and Attendants',
  'Health Care Management',
  'Health Care',
  'Health Law',
  'Health Service Preparatory Studies',
  'Health Services Administration',
  'Health Teacher Education',
  'Health Unit Coordinator and Manager',
  'Health and Medical Administrative Services',
  'Health and Physical Fitness Education',
  'Heavy Equipment Maintenance Technician',
  'Hebrew Language and Literature',
  'High School Administration',
  'High School Education',
  'Higher Education Administration',
  'Hinduism',
  'Hispanic American Studies',
  'Historic Preservation and Conservation',
  'History Teacher Education',
  'History',
  'Homeland Security',
  'Horticultural Sciences',
  'Horticultural',
  'Horticulture Business Services',
  'Hospital Management',
  'Hospitality Management',
  'Hospitality and Tourism Management',
  'Hotel and Resort Management',
  'Human Development',
  'Human Resources Development',
  'Human Resources Management',
  'Human Resources',
  'Human Services',
  'IT Services Administration',
  'Illustration',
  'Industrial Electronics Technician',
  'Industrial Engineering and Technology',
  'Industrial Engineering',
  'Industrial Mechanics and Maintenance Technician',
  'Industrial Painting',
  'Industrial Production Technician',
  'Industrial Technician',
  'Industrial and Engineering Management',
  'Industrial and Organizational Psychology',
  'Industrial and Product Design',
  'Information Operations',
  'Information Studies',
  'Information Technology',
  'Instrumentation Technician',
  'Insulator',
  'Insurance',
  'Intellectual Property Law',
  'Intelligence and Information',
  'Intelligence',
  'Interior Architecture',
  'Interior Design',
  'International Business',
  'International Legal Studies',
  'International Relations and National Security Studies',
  'International Studies and Government',
  'International Studies',
  'Intervention and Treatment Professions',
  'Intervention and Treatment',
  'Investments and Securities',
  'Islam',
  'Italian Language and Literature',
  'Japanese Language and Literature',
  'Journalism',
  'Judaism',
  'Kindergarten and Preschool Education',
  'Kinesiology and Exercise Science',
  'Labor and Industrial Relations',
  'Land Use Planning and Development',
  'Landscape Architecture',
  'Landscaping and Groundskeeping',
  'Language Studies and Linguistics',
  'Languages and Literature',
  'Latin American Studies',
  'Latin and Ancient Greek Studies',
  'Law Studies',
  'Law and Legal Studies',
  'Law',
  'Leatherworking and Upholstery',
  'Legal Administrative Assistant',
  'Legal Studies',
  'Liberal Arts and Humanities',
  'Library Science and Administration',
  'Library Science',
  'Library and Archives Assisting',
  'Licensed Practical Nurse Training (LPN)',
  'Lineworker',
  'Linguistics, Interpretation, and Translation',
  'Literature',
  'Logic',
  'Logistics and Supply Chain Management',
  'Machine Shop Assistant',
  'Machine and Metal Working',
  'Machinist',
  'Make-Up Artist and Tattooing',
  'Management Information Systems',
  'Management Sciences and Information Systems',
  'Management Sciences and Statistics',
  'Managerial Economics',
  'Manufacturing Engineering Technician',
  'Manufacturing Engineering and Technology',
  'Manufacturing Engineering',
  'Marine Biology and Oceanography',
  'Marine Science',
  'Marine Transportation',
  'Marketing',
  'Marriage and Family Therapy and Counseling',
  'Masonry',
  'Mass Communication',
  'Mass Communications and Media',
  'Massage Therapy and Bodywork',
  'Materials Engineering',
  'Materials Science',
  'Mathematics & Statistics',
  'Mathematics Teacher Education',
  'Mathematics',
  'Mechanical Drafting (CAD/CADD)',
  'Mechanical Engineering Technician',
  'Mechanical Engineering and Technology',
  'Mechanical Engineering',
  'Mechanics and Repair',
  'Medical Assistant',
  'Medical Assisting',
  'Medical Insurance Billing and Claims',
  'Medical Insurance Coding',
  'Medical Laboratory Technician',
  'Medical Management and Clinical Assistant',
  'Medical Office Assistant',
  'Medical Office Computer Specialist',
  'Medical Office Management',
  'Medical Reception',
  'Medical Records Administration',
  'Medical Records Technician',
  'Medical Secretary',
  'Medical Social Work',
  'Medical Transcription',
  'Medicine and Medical Studies',
  'Medicine',
  'Mental Health Counseling',
  'Mental and Social Health Services',
  'Mental and Social Health Studies',
  'Merchandising and Buying Operations',
  'Metal Building Assembly',
  'Metal and Jewelry Arts',
  'Meteorology',
  'Microbiology',
  'Middle School Education',
  'Midwifery',
  'Military Applied Sciences',
  'Military Information Systems and Missile Technology',
  'Military Science',
  'Military Systems Technology',
  'Military Technologies',
  'Mineral and Petroleum Engineering',
  'Mining and Mineral Engineering',
  'Mining and Petroleum Technician',
  'Minority and Group Studies',
  'Missionary Studies',
  'Molecular Biology',
  'Mortuary Science and Embalming',
  'Motorcycle Maintenance and Repair',
  'Multimedia Management and Webmaster',
  'Multimedia',
  'Music History and Literature',
  'Music Management',
  'Music Performance',
  'Music Teacher Education',
  'Music Technology',
  'Music Theory and Composition',
  'Music',
  'Musical Instruments',
  'Nail Technician',
  'Natural Resource Management',
  'Natural Resource Recreation and Tourism',
  'Natural Resources Conservation',
  'Natural Resources Management and Policy',
  'Natural Sciences',
  'Network, Database, and System Administration',
  'Neuroanatomy',
  'Neuroscience and Neurobiology',
  'Neuroscience',
  'Non-Profit and Public Management',
  'North American Studies',
  'Nuclear Engineering Technician',
  'Nuclear Engineering and Technology',
  'Nuclear Engineering',
  'Nuclear Medical Technician',
  'Nuclear and Industrial Radiologic Technology',
  'Nurse Anesthetist',
  'Nursing Administration',
  'Nursing Assistant',
  'Nursing Science, Education, and Practice',
  'Nursing',
  'Nutrition Sciences',
  'Occupational Health and Industrial Hygiene',
  'Occupational Safety and Health Technician',
  'Occupational Therapist Assistant',
  'Occupational Therapy',
  'Office Management',
  'Operations Management',
  'Operations Research',
  'Optics',
  'Optometry',
  'Organizational Behavior Studies',
  'Organizational Communication',
  'Osteopathy',
  'Painting',
  'Paralegal',
  'Parks and Recreation',
  'Parks, Recreation and Leisure Facilities Management',
  'Parks, Recreation and Leisure Studies',
  'Pastoral Counseling and Specialized Ministries',
  'Pathology',
  'Peace Studies and Conflict Resolution',
  'Performing Arts',
  'Personal Services',
  'Petroleum Engineering',
  'Pharmaceutical Sciences',
  'Pharmacology and Toxicology',
  'Pharmacology',
  'Pharmacy Studies',
  'Pharmacy Technician',
  'Pharmacy and Pharmaceutical Sciences',
  'Philosophy Studies',
  'Philosophy and Religion',
  'Philosophy',
  'Phlebotomy Technician',
  'Photography',
  'Photojournalism',
  'Physical Education Teaching and Coaching',
  'Physical Science Studies',
  'Physical Sciences',
  'Physical Therapy Technician',
  'Physical Therapy',
  'Physician Assistant',
  'Physics',
  'Physiological Psychology',
  'Physiology and Pathology',
  'Physiology',
  'Pipefitting',
  'Planning and Development',
  'Plant Science',
  'Plastics and Materials Engineering',
  'Plumbing Trades',
  'Plumbing',
  'Podiatry',
  'Police and Criminal Science',
  'Political Science and Government',
  'Population Biology',
  'Pre-Law Studies',
  'Pre-Medicine Studies',
  'Precision Production',
  'Precision Systems Maintenance and Repair',
  'Printmaking',
  'Procurement and Contracts Management',
  'Professional Diver and Instructor',
  'Professional Pilot',
  'Professional, Technical, Business, and Scientific Writing',
  'Programs for Foreign Lawyers',
  'Property Maintenance and Site Management',
  'Protective Services',
  'Psychiatric and Mental Health Services',
  'Psychology & Counseling',
  'Psychology Studies',
  'Psychology',
  'Public Administration',
  'Public Health Education',
  'Public Health Studies',
  'Public Health',
  'Public Policy Analysis',
  'Public Policy, Administration, and Social Work',
  'Public Relations',
  'Publishing',
  'Quality Control Technician',
  'Radiation Therapy',
  'Radio and Television Broadcasting Technician',
  'Radio, Television, and Digital Communication',
  'Radiologic Technician',
  'Radiologist Assistant',
  'Railroad and Railway Transportation',
  'Reading Teacher Education',
  'Real Estate Development',
  'Real Estate',
  'Recording Arts Technician',
  'Recreation & Fitness',
  'Regional Language and Literature Studies',
  'Regional and Area Studies',
  'Registered Nursing (RN)',
  'Rehabilitation and Therapy',
  'Religion',
  'Religious Education',
  'Religious Studies',
  'Research and Experimental Psychology',
  'Respiratory Care Therapy',
  'Respiratory Therapy Technician',
  'Restaurant and Food Services Management',
  'Restaurant, Culinary, and Catering Management',
  'Retailing Management',
  'Retailing',
  'Rhetoric and Composition',
  'Robotics and Automation Engineering Technician',
  'Robotics and Automation Engineering',
  'Romance Languages and Literatures',
  'Romance Languages',
  'Roofer',
  'Russian and Eastern European Languages and Literature',
  'Sales and Marketing',
  'School Counseling and Guidance Services',
  'School Counseling',
  'School Librarian',
  'School Psychology',
  'Science Teacher Education',
  'Sculpture',
  'Security and Loss Prevention Services',
  'Selling and Sales',
  'Services',
  'Sheet Metal Technology',
  'Sign Language Interpretation and Translation',
  'Sign Language',
  'Skilled Trades and Construction',
  'Small Business Management',
  'Small Engine Mechanics and Repair',
  'Social Psychology',
  'Social Science Research Methods',
  'Social Science Teacher Education',
  'Social Sciences & Liberal Arts',
  'Social Sciences',
  'Social Services',
  'Social Studies Teacher Education',
  'Social Work and Youth Services',
  'Sociology',
  'Soil Sciences',
  'Sonographer and Ultrasound Technician',
  'South and Southeast Asian Languages and Literatures',
  'Space and Undersea Systems Operations',
  'Spanish Language and Literature',
  'Special Education and Teaching',
  'Special Education',
  'Speech Communication and Rhetoric',
  'Speech Language Pathology Assistant',
  'Speech Language Pathology',
  'Sport and Fitness Management',
  'Statistics',
  'Studio Arts',
  'Substance Abuse and Addiction Counseling',
  'Superintendence and Educational System Administration',
  'Surgical Technologist',
  'Surveying Engineering',
  'Surveying Technician',
  'Sustainability Studies',
  'System, Networking, and LAN/WAN Management',
  'Systems Engineering',
  'Systems Science and Theory',
  'Talmudic and Rabbinical Studies',
  'Taxation',
  'Taxidermy',
  'Teacher Education for Multiple Levels',
  'Teaching Assistant',
  'Teaching English as a Second Language',
  'Teaching',
  'Technical Teacher Education',
  'Technology Teacher Education',
  'Telecommunications Technician',
  'Textile and Plastics Engineering',
  'Theatre Design',
  'Theatre, Arts, and Media Management',
  'Theological and Ministerial Studies',
  'Theology and Religious Vocations',
  'Therapeutic Recreation',
  'Tool and Die Technician',
  'Tourism and Travel Services Management',
  'Toxicology',
  'Trade and Industrial Teacher Education',
  'Traditional Chinese Medicine',
  'Transportation and Materials Moving',
  'Transportation',
  'Truck, Bus, and Commercial Vehicle Operation',
  'Turf and Turfgrass Management',
  'US Law',
  'Urban Studies and Affairs',
  'Urban, Community and Regional Planning',
  'Vehicle Maintenance and Repair Technologies',
  'Vehicle Maintenance and Repair',
  'Veterinary Medicine',
  'Veterinary Sciences',
  'Veterinary Studies',
  'Veterinary Technician and Assistant',
  'Visual Arts',
  'Vocational Rehabilitation Counseling',
  'Voice and Opera',
  'Water, Wastewater, and Recycling Technician',
  'Web Page and Digital Design',
  'Welding Engineering Technician',
  'Welding',
  'Wildlife and Fisheries Management',
  'Woodworking',
  'Yoga and Movement Therapy',
  'Zoology and Entomology',
  'Other',
  'Undecided'
]);