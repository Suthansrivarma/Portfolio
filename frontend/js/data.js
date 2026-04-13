const PROJECTS = [
  {
    num: "01",
    title: "AI-Based Student Monitoring System",
    problem: "Manual attendance and classroom tracking are slow, error-prone, and hard to monitor in real time.",
    solution: "Built an AI-based student monitoring platform using MERN, OpenCV, WebSockets, and JWT-secured APIs with cloud deployment.",
    impact: [
      { num: "<10s", label: "Attendance scan cycle" },
      { num: "Real-time", label: "Student and admin updates" },
      { num: "Cloud", label: "Deployed on Vercel and Render" },
    ],
    stack: ["React", "Express", "MongoDB", "OpenCV", "Socket.IO", "JWT"],
    github: "https://github.com/Suthansrivarma/AI-based-Student-Monitoring-System",
    demo: "https://ai-based-student-monitoring-system.vercel.app/",
    accent: "#e4ff3d",
  },
  {
    num: "02",
    title: "Blood Bank Tracking System",
    problem: "Finding blood donors quickly and managing blood bank workflows is difficult without an integrated system.",
    solution: "Developed a full-stack blood bank platform with donor flows, secure auth, optimized filtering, and WhatsApp API alerts.",
    impact: [
      { num: "50%", label: "Faster blood availability search" },
      { num: "60%", label: "Less manual donor outreach" },
      { num: "Secure", label: "bcryptjs password hashing" },
    ],
    stack: ["MERN", "REST APIs", "JWT", "bcryptjs", "WhatsApp API"],
    github: "https://github.com/Suthansrivarma/Blood_Bank_Tracking_System",
    demo: "https://blood-bank-tracking-system.netlify.app/",
    accent: "#2dd4bf",
  },
  {
    num: "03",
    title: "Automated Smart Dustbin Using IoT",
    problem: "Public waste management needs smarter automation for bin status and user interaction.",
    solution: "Built an IoT smart dustbin using Arduino, sensors, servo control, and GSM alerts for fill-level monitoring.",
    impact: [
      { num: "IoT", label: "Hardware-software integration" },
      { num: "SMS", label: "Real-time fill-level alerts" },
      { num: "Auto", label: "Lid movement automation" },
    ],
    stack: ["Arduino Uno", "Ultrasonic Sensor", "IR Sensor", "Servo Motor", "GSM Module"],
    github: "https://github.com/Suthansrivarma",
    demo: "#",
    accent: "#a78bfa",
  },
];

const SKILLS = [
  {
    category: "Web Development",
    icon: "FE",
    color: "rgba(228,255,61,0.12)",
    iconColor: "#e4ff3d",
    items: [
      { name: "HTML5", logo: "HT" },
      { name: "CSS3", logo: "CS" },
      { name: "JavaScript", logo: "JS" },
      { name: "React.js", logo: "RE" },
      { name: "Node.js", logo: "NO" },
      { name: "Express.js", logo: "EX" },
    ],
  },
  {
    category: "Languages and DB",
    icon: "BE",
    color: "rgba(45,212,191,0.12)",
    iconColor: "#2dd4bf",
    items: [
      { name: "Java", logo: "JA" },
      { name: "Python", logo: "PY" },
      { name: "C", logo: "C" },
      { name: "SQL", logo: "SQ" },
      { name: "MySQL", logo: "MY" },
      { name: "MongoDB", logo: "MO" },
    ],
  },
  {
    category: "Tools and Platforms",
    icon: "TL",
    color: "rgba(167,139,250,0.12)",
    iconColor: "#a78bfa",
    items: [
      { name: "Git", logo: "GI" },
      { name: "GitHub", logo: "GH" },
      { name: "VS Code", logo: "VS" },
      { name: "Visual Studio", logo: "VI" },
      { name: "AWS", logo: "AW" },
      { name: "Vercel / Netlify", logo: "VN" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Istreams ERP Solutions, Pollachi",
    date: "Jun 2024 - Jul 2024",
    desc: "Worked on UI improvements and ERP workflow understanding while supporting live project delivery.",
    highlights: ["HTML/CSS layouts", "Ynex platform UI enhancements", "Power BI basics", "ERP modules: Finance, HR, Inventory"],
  },
];

const ACHIEVEMENTS = [
  {
    tag: "Participation",
    title: "Inter O Fest 2K24 - Technical Symposium",
    issuer: "Sree Sakthi Engineering College",
    note: "Participated in the one-day national level technical symposium (March 2024).",
    image: "./assets/certificates/photo_1_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Diploma",
    title: "Advanced Diploma in Python Programming (ADPP)",
    issuer: "CSC Computer Education",
    note: "Successfully completed ADPP training (Aug 2023 to Dec 2023) and secured grade A.",
    image: "./assets/certificates/photo_2_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Industrial Visit",
    title: "Certificate of Achievement - Robomiracle",
    issuer: "Robomiracle Technologies Private Limited",
    note: "Completed a one-day industrial visit through Dr. MCET (December 2023).",
    image: "./assets/certificates/photo_3_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Hackathon",
    title: "Health Hackathon 2025 - Certificate of Appreciation",
    issuer: "VIT Bhopal & Johns Hopkins University",
    note: "Participated in the Health Hackathon held on February 18-19, 2025.",
    image: "./assets/certificates/photo_4_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Award",
    title: "Varnam'24 - 1st Prize (Tamil Oodu Vilayadu)",
    issuer: "Dr. Mahalingam College of Engineering and Technology",
    note: "Won first prize in Varnam'24 intra-college non-technical symposium (April 2024).",
    image: "./assets/certificates/photo_5_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Award",
    title: "Smartathon'24 - 2nd Place Project Presentation",
    issuer: "Student Research Council, Dr. MCET",
    note: "Secured second place in software project presentation at Smartathon'24 (October 2024).",
    image: "./assets/certificates/photo_6_2026-04-13_12-26-54.jpg",
  },
  {
    tag: "Award",
    title: "Inter O Fest 2K24 - Paper Presentation (Third Prize)",
    issuer: "Sree Sakthi Engineering College",
    note: "Won third prize in paper presentation at national level technical symposium (March 2024).",
    image: "./assets/certificates/photo_7_2026-04-13_12-26-54.jpg",
  },
];
