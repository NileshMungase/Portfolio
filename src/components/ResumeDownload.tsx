import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a simple text resume as a downloadable file
    const resumeContent = `NILESH MUNGASE
Java Full Stack Developer
Email: nileshmungase101@gmail.com | Phone: +91-7447-847064
GitHub: https://github.com/nileshmungase | LinkedIn: https://linkedin.com/in/nilesh-mungase

PROFESSIONAL SUMMARY
Experienced Java Full Stack Developer with expertise in Spring Boot, Microservices architecture, and modern web development. Strong background in designing and implementing scalable enterprise applications with React frontend and Java backend.

TECHNICAL SKILLS
Languages: Java, SQL, JavaScript, HTML, CSS
Frameworks & Libraries: Spring Boot, Hibernate/JPA, Microservices, Spring Security, React
Databases: MySQL, Oracle, MongoDB
Tools & DevOps: Git/GitHub, Docker, Maven, Postman

WORK EXPERIENCE
Senior Java Developer | Tech Company
• Designed and developed microservices using Spring Boot achieving 40% performance improvement
• Implemented REST APIs serving 1M+ daily requests with 99.9% uptime
• Optimized database queries reducing query execution time by 35%
• Mentored junior developers on best practices and code standards

Java Full Stack Developer | Software Solutions
• Built full-stack applications using Spring Boot backend and React frontend
• Implemented secure authentication using Spring Security and JWT
• Designed relational databases using MySQL with efficient schema optimization
• Deployed applications using Docker and maintained CI/CD pipelines

PROJECTS
1. E-Commerce Platform
   • Full-stack application with Spring Boot microservices and React frontend
   • Features: Product catalog, shopping cart, payment integration, user authentication
   • Tech Stack: Spring Boot, React, MySQL, Docker, REST APIs
   
2. Inventory Management System
   • Enterprise application for real-time inventory tracking
   • Features: Real-time updates, role-based access, reporting dashboard
   • Tech Stack: Spring Boot, Oracle, Hibernate/JPA, Angular
   
3. Data Analytics Dashboard
   • Interactive dashboard for business intelligence
   • Features: Real-time data visualization, custom reports, data filtering
   • Tech Stack: React, Node.js, MongoDB, Chart.js

EDUCATION
Bachelor of Technology in Computer Science
University Name | Graduation Year: 2022

CERTIFICATIONS
• AWS Certified Solutions Architect - Associate
• Java Programming Certification
• Spring Boot Certification

ACHIEVEMENTS
• Reduced application loading time by 45% through code optimization
• Successfully led team of 5 developers on critical project delivery
• Recognized as "Developer of the Month" for innovation and performance
• Published technical blogs on medium.com covering Java and Full Stack Development

SOFT SKILLS
• Problem Solving & Analytical Thinking
• Team Collaboration & Leadership
• Technical Communication
• Time Management & Organization
• Code Review & Quality Assurance
• Documentation & Knowledge Sharing`;

    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Nilesh_Mungase_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex justify-center my-8"
    >
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(59, 130, 246, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
      >
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Download size={20} />
        </motion.div>
        Download My Resume
      </motion.button>
    </motion.div>
  );
};

export default ResumeDownload;
