import React from "react";
import "./styles.scss";

const portfolioData = [
  {
    title: "Mobile-Enabled Agricultural Software Solution",
    date: "May 2024 – July 2024",
    institute: "University of Dayton, Ohio",
    techStack: ["Python", "Django", "PostgreSQL", "AWS", "Docker", "HTML", "CSS"],
    image: "/images/project1.jpg",
    bullets: [
      "Built a scalable platform connecting farmers and buyers via mobile phones.",
      "Handled backend development to support secure, seamless transactions.",
      "Implemented features like order tracking, contract management, and inventory tools."
    ]
  },
  {
    title: "E-commerce Web Application",
    date: "Jan 2024 – Apr 2024",
    institute: "University of Dayton, Ohio",
    techStack: ["ReactJS", "Java Spring Boot", "MongoDB"],
    image: "/images/project2.jpg",
    bullets: [
      "Developed a dynamic shopping platform with catalog, cart, and checkout systems.",
      "Implemented 10+ key use cases including authentication, order management.",
      "Managed technical documentation to support development and future scaling."
    ]
  },
  {
    title: "Emotion-Based Music Recommendation System",
    date: "Apr 2023",
    institute: "LDRP Institute of Technology and Research",
    techStack: ["OpenCV", "Python", "SVM", "Haar Cascade"],
    image: "/images/project3.jpg",
    bullets: [
      "Designed an intelligent music player that detects emotions via facial expressions.",
      "Used machine learning to recommend playlists based on user mood in real-time."
    ]
  },
  {
    title: "E-Society Application",
    date: "Nov 2022",
    institute: "LDRP Institute of Technology and Research",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/project4.jpg",
    bullets: [
      "Created a digital platform for residential communities to streamline operations.",
      "Integrated alerts, maintenance logs, issue reporting, and resident messaging.",
      "Implemented role-based access control for admin and emergency communication."
    ]
  },
  {
    title: "E-Health Care Management System",
    date: "Apr 2022",
    institute: "LDRP Institute of Technology and Research",
    techStack: ["Python", "Tkinter", "Machine Learning"],
    image: "/images/project5.jpg",
    bullets: [
      "Developed an AI-based desktop app for disease diagnosis using X-ray images.",
      "Enabled uploads and automated predictions for doctors and patients.",
      "Enhanced clinical decision-making with efficient, AI-driven feedback."
    ]
  },
  {
    title: "CyberScope – Cybersecurity Project",
    date: "Jan 2025 – May 2025",
    institute: "University of Dayton, Ohio",
    techStack: ["Shodan", "Maltego", "GoPhish", "Ettercap", "SQLMap", "Cuckoo Sandbox", "PyTorch", "Hugging Face"],
    image: "/images/project6.jpg",
    bullets: [
      "Executed OSINT investigations using tools like Shodan and Maltego.",
      "Simulated phishing and MITM attacks using GoPhish and Ettercap.",
      "Analyzed malware behavior using dynamic and static methods.",
      "Built machine learning models for threat detection and mitigation strategies."
    ]
  }
];

const PortFolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">My Projects</h2>
      <div className="portfolio__grid">
        {portfolioData.map((project, index) => (
          <div className="portfolio__card" key={index}>
            <div className="portfolio__card-inner">
              <div className="portfolio__card-front">
                <img src={project.image} alt={project.title} className="portfolio__image" />
                <h3>{project.title}</h3>
              </div>
              <div className="portfolio__card-back">
                <h3>{project.title}</h3>
                <p className="portfolio__date">{project.date}</p>
                <p className="portfolio__institute">{project.institute}</p>
                <ul>
                  {project.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="portfolio__tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span className="portfolio__tag" key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortFolio;
