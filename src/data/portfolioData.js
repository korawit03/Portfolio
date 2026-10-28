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
    "ผมเป็น **นักศึกษาเทคโนโลยีสารสนเทศ (ม.อ. หาดใหญ่)** ที่มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ฝั่ง Frontend ให้สวยงาม ใช้งานง่าย และตอบโจทย์ผู้ใช้จริง",
    "มีพื้นฐานจากการเรียนทั้งด้าน Algorithm, OOP, Database Systems ไปจนถึง Software Testing นำความรู้เชิงทฤษฎีมาปรับใช้ในการลงมือเขียนโค้ดและสร้างสรรค์โปรเจกต์จริง",
    "ปัจจุบันมุ่งเน้นการพัฒนาทักษะ **Frontend Development** อย่างเต็มที่ พร้อมตั้งเป้าหมายเรียนรู้และต่อยอดฝั่ง **Backend** ควบคู่ไปด้วย เพื่อก้าวสู่การเป็น Full-stack Developer ที่รอบด้าน"
  ],
  stats: [
    { value: "1+", label: "ปีที่เขียนโค้ด" },
    { value: "2", label: "โปรเจกต์ที่กำลังพัฒนา" },

  ],
  contact: {
    email: "tearooa1@gmail.com",
    github: "https://github.com/korawit03",
  }
};

export const skillsData = [
  { name: "HTML / CSS", level: "ถนัด", category: "expert", icon: "Code2", progress: 95 },
  { name: "JavaScript", level: "ใช้งานได้", category: "proficient", icon: "FileCode2", progress: 85 },
  { name: "React", level: "กำลังเรียน", category: "learning", icon: "Atom", progress: 50 },
  { name: "Python", level: "ใช้งานได้", category: "proficient", icon: "Terminal", progress: 60 },
  { name: "Git / GitHub", level: "ใช้งานได้", category: "proficient", icon: "GitBranch", progress: 55 },
  { name: "Figma", level: "กำลังเรียน", category: "learning", icon: "Figma", progress: 45 },
  { name: "Node.js / Express", level: "กำลังเรียน", category: "learning", icon: "Server", progress: 30 },
  { name: "SQL / Supabase", level: "ใช้งานได้", category: "proficient", icon: "Database", progress: 45 }
];

export const timelineData = [
  {
    period: "2568-ปัจจุบัน",
    title: "เป็นนักศึกษา มหาวิทยาลัยสงขลานครินทร์",
    institution: "สาขาวิชาเทคโนโลยีสารสนเทศ(ต่อเนื่อง) · ม.อ.",
    description: "ศึกษาเจาะลึกด้านการเขียนโปรแกรมและการพัฒนาซอฟต์แวร์ ทั้ง OOP, Algorithm & Basic Programming, Database Systems & Tuning, Software Testing, System Analysis & Design, Computer Graphics, IT Project รวมถึง AI Literacy และคณิตศาสตร์สำหรับ IT",
    tag: "เทคโนโลยีสารสนเทศ",
    type: "education"
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
    id: "Site Work Manager",
    title: "Site Work App — ระบบบันทึกข้อมูลหน้างาน",
    category: "Fullstack",
    isFeatured: true,
    highlight: "✦ อยู่ระหว่างการพัฒนา (In Development) — ระบบจัดการงานช่างครบวงจร",
    year: "2026",
    description: "เว็บแอปพลิเคชันบันทึกและจัดการข้อมูลหน้างานสำหรับช่าง รองรับการจัดการลูกค้า, รายละเอียดโครงการ, หมวดหมู่งาน, ระบบแนบภาพถ่ายหน้างานเปรียบเทียบ Before/After พร้อมระบุพิกัดแผนที่ (Leaflet) และแดชบอร์ดสรุปสถิติ (Recharts) ขับเคลื่อนด้วย Supabase แบบ Real-time",
    tags: ["React", "Tailwind CSS", "Supabase", "Leaflet", "Recharts", "Vite"],
    githubUrl: "https://github.com/korawit03/Project_Web.git",
    liveUrl: "https://project-web-blush.vercel.app/"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web App",
    isFeatured: true,
    highlight: "✦ พอร์ตโฟลิโอส่วนตัว พร้อมรองรับ PWA & View Transitions",
    year: "2026",
    description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวดีไซน์โมเดิร์น พัฒนาด้วย React และ Vite นำเสนอผลงาน ทักษะ และเส้นทางการเรียนรู้ มาพร้อมระบบสลับโหมด Dark/Light แบบลื่นไหลด้วย View Transitions API, Glassmorphism UI, Responsive Design และรองรับการติดตั้งเป็น Progressive Web App (PWA)",
    tags: ["React", "Vite", "PWA", "Glassmorphism", "CSS Tokens"],
    githubUrl: "https://github.com/korawit03/Portfolio.git",
    liveUrl: "https://portfolio-korawit.vercel.app/"
  }
];

export const testimonialsData = [
  {
    quote: "กรวิชญ์ช่วยพัฒนาระบบบันทึกข้อมูลหน้างานได้ตรงจุดมาก ช่างหน้างานใช้งานผ่านมือถือได้สะดวกและลดข้อผิดพลาดในการเก็บรูปและพิกัดงานได้เยอะมาก ทำงานไว คุยง่าย ใส่ใจทุกรายละเอียดครับ",
    initial: "ช",
    name: "ช่างวิทย์ ผู้รับเหมางานระบบ",
    role: "ผู้ใช้งานระบบ Site Work App · Client"
  },
  {
    quote: "เป็นเพื่อนร่วมทีมที่รับผิดชอบเรื่อง Frontend ได้ยอดเยี่ยม ดีไซน์หน้าเว็บสวย UI ใช้งานง่าย แถมเข้าใจโครงสร้างระบบ Database และ API เป็นอย่างดี ทำให้การทำงานร่วมกันราบรื่นมาก",
    initial: "น",
    name: "นนท์ — เพื่อนร่วมทีมโปรเจกต์",
    role: "นักศึกษา IT (ต่อเนื่อง) · ม.อ. หาดใหญ่"
  },
  {
    quote: "มีความมุ่งมั่นในการเรียนรู้สูง ไม่เพียงแต่เขียนโค้ดตามโจทย์ แต่ยังต่อยอดนำเทคโนโลยีใหม่ๆ เช่น Supabase และ React มาประยุกต์แก้ปัญหาจริงได้อย่างน่าชื่นชม มีแววเติบโตในสาย Developer ได้ไกลแน่นอน",
    initial: "อ",
    name: "ดร. กิตติศักดิ์",
    role: "อาจารย์ที่ปรึกษาโครงงาน IT · ม.อ."
  }
];
