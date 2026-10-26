export const personalData = {
  name: "กรวิชญ์",
  fullName: "กรวิชญ์ วิทยาจารุประพันธ์", // Custom placeholder that can be customized
  role: "นักพัฒนาเว็บ",
  subtitle: "สร้างเว็บและแอปที่ใช้งานจริง — สำหรับนักเรียน, กลุ่มเพื่อน, และ startup ขนาดเล็ก",
  status: "พร้อมรับงาน Freelance",
  learningStatus: "กำลังเรียนรู้เทคโนโลยีใหม่ๆ",
  avatarInitials: "nice",
  profileImage: "/nice.jpg", // ใส่ชื่อไฟล์รูปภาพของคุณในโฟลเดอร์ public/ เช่น "/profile.jpg" หรือเป็น URL ได้เลย (ถ้าไม่มีจะแสดงตัวอักษรแทน)
  bio: [
    "ผมเป็น **นักศึกษาวิทยาการคอมพิวเตอร์ ปี 3** ที่ชอบสร้างสิ่งที่คนใช้ได้จริง ไม่ใช่แค่ demo สวยงาม",
    "เริ่มเขียนโค้ดตั้งแต่มัธยมปลาย จาก copy-paste ใน Stack Overflow จนวันนี้ออกแบบระบบและเขียนเองได้ตั้งแต่ต้น ภูมิใจทุกครั้งที่โค้ดรันผ่านครั้งแรก",
    "เวลาว่างชอบ **ถ่ายรูป**, เล่นกีตาร์, และออกไปหาของกินอร่อยๆ ในเมือง — ชอบมองหา micro-interaction เจ๋งๆ ในชีวิตประจำวัน"
  ],
  stats: [
    { value: "2+", label: "ปีที่เขียนโค้ด" },
    { value: "1", label: "โปรเจกต์ที่ทำเสร็จ" },

  ],
  contact: {
    email: "tearooa1@gmail.com",
    github: "https://github.com/korawit03",
    linkedin: "https://linkedin.com",
    cvLink: "#"
  }
};

export const skillsData = [
  { name: "HTML / CSS", level: "ถนัด", category: "expert", icon: "Code2", progress: 95 },
  { name: "JavaScript", level: "ใช้งานได้", category: "proficient", icon: "FileCode2", progress: 85 },
  { name: "React", level: "กำลังเรียน", category: "learning", icon: "Atom", progress: 55 },
  { name: "Python", level: "ใช้งานได้", category: "proficient", icon: "Terminal", progress: 65 },
  { name: "Git / GitHub", level: "ใช้งานได้", category: "proficient", icon: "GitBranch", progress: 65 },
  { name: "Figma", level: "กำลังเรียน", category: "learning", icon: "Figma", progress: 60 },
  { name: "Node.js / Express", level: "กำลังเรียน", category: "learning", icon: "Server", progress: 65 },
  { name: "SQL / PostgreSQL", level: "ใช้งานได้", category: "proficient", icon: "Database", progress: 75 }
];

export const timelineData = [
  {
    period: "2566 – ปัจจุบัน",
    title: "วิทยาการคอมพิวเตอร์ (ปริญญาตรี)",
    institution: "มหาวิทยาลัยสงขลานครินทร์ · หาดใหญ่",
    description: "เรียนด้าน Algorithms, Data Structures, Web Dev, Database และ Software Engineering — เกรดเฉลี่ย 3.62",
    tag: "GPA 3.62",
    type: "education"
  },
  {
    period: "2568",
    title: "Freelance Web Developer",
    institution: "งานอิสระ · Remote",
    description: "รับทำเว็บไซต์ให้ร้านค้าและ startup ขนาดเล็กในพื้นที่ — รวม 4 โปรเจกต์ รายได้เสริมระหว่างเรียน",
    tag: "4 projects",
    type: "experience"
  },
  {
    period: "2567",
    title: "ผู้ช่วยสอน วิชา Intro to Programming",
    institution: "ภาควิชาวิทยาการคอมพิวเตอร์ · ม.อ.",
    description: "ช่วยสอนน้องปี 1 เรื่อง Python และ logic การเขียนโปรแกรมพื้นฐาน ประจำทุกสัปดาห์",
    tag: "TA ม.อ.",
    type: "experience"
  },
  {
    period: "2566 – 2567",
    title: "ระดับ ปวส.",
    institution: "วิทยาลัยเทคโนโลยีอุดมศึกษาพณิชยการ",
    description: "สาขาเทคโนโลยีสารสนเทศ เริ่มหัดเขียนโค้ด Python และ HTML , CSS , JavaScript เป็นครั้งแรก",
    tag: "เทคโนโลยีสารสนเทศ",
    type: "education"
  }
];

export const projectsData = [
  {
    id: "task-manager",
    title: "Task Manager — กลุ่มเรียน",
    category: "Web App",
    isFeatured: true,
    highlight: "✦ เพื่อน 40 คนใช้ทุกวัน ลด deadline miss ลง 80%",
    year: "2025",
    description: "แอปจัดการงานแบบ drag-and-drop สร้างด้วย Vanilla JS ล้วนๆ ไม่พึ่ง framework ใดๆ บันทึกข้อมูลลง LocalStorage ไม่ต้องมี backend — โหลดเร็ว ใช้ offline ได้",
    tags: ["HTML", "CSS", "Vanilla JS", "LocalStorage"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/task-manager"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    category: "UI / React",
    isFeatured: false,
    highlight: "✦ Project จบวิชา Web Dev — ได้เกรด A",
    year: "2025",
    description: "แดชบอร์ดพยากรณ์อากาศ 7 วัน ดึงข้อมูลจาก OpenWeather API แสดงผลเป็น Chart.js รองรับการค้นหาตามเมือง และ geolocation อัตโนมัติ",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/weather-dashboard"
  },
  {
    id: "line-bot",
    title: "LINE Bot แจ้งเตือนการบ้าน",
    category: "Python",
    isFeatured: true,
    highlight: "✦ ใช้งานจริงโดยเพื่อน 35 คน ทุกวันในเทอมเรียน",
    year: "2024",
    description: "บอท LINE แจ้งเตือนการบ้านและตารางสอบให้เพื่อนในกลุ่มเรียน เชื่อมกับ Google Sheets เป็น database — ตั้งเวลาส่งอัตโนมัติทุกวัน 20.00 น.",
    tags: ["Python", "Flask", "LINE API", "Google Sheets", "Render"],
    githubUrl: "https://github.com",
    liveUrl: null
  },
  {
    id: "queue-management",
    title: "ระบบจองคิวร้านอาหาร",
    category: "Fullstack",
    isFeatured: false,
    highlight: "✦ Freelance — ใช้งานจริงที่ร้านอาหารในหาดใหญ่",
    year: "2025",
    description: "เว็บแอปจองคิวออนไลน์สำหรับร้านอาหาร ลูกค้าจองผ่านมือถือได้เลย เจ้าของร้านจัดการผ่าน admin panel แบบ real-time — ลดคิวหน้าร้านได้ชัดเจน",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/queue-system"
  }
];

export const testimonialsData = [
  {
    quote: "ณัฐพลทำงานเร็วและแก้ปัญหาเก่งมาก เว็บที่ได้ใช้งานดีกว่าที่คาดไว้ ลูกค้าชอบมาก จะจ้างต่อแน่นอน",
    initial: "พ",
    name: "พี่พล เจ้าของร้าน",
    role: "ร้านอาหาร หาดใหญ่ · Freelance Client"
  },
  {
    quote: "บอทที่ทำให้นั้นช่วยได้มากจริงๆ ไม่เคยลืมส่งการบ้านตั้งแต่ใช้เลย ขอบคุณมากเลยครับ",
    initial: "ต",
    name: "ต้น — เพื่อนร่วมชั้น",
    role: "นักศึกษา CS ปี 3 · ม.อ."
  },
  {
    quote: "เป็นนักศึกษาที่มีความรับผิดชอบสูง เรียนรู้เร็ว และถามคำถามที่ตรงประเด็นเสมอ น่าจะโตในสายนี้ได้ดีมาก",
    initial: "อ",
    name: "อ.ดร. ศิริพร",
    role: "อาจารย์ผู้สอน Web Development · ม.อ."
  }
];
