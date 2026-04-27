import React from "react";
import "./styles.scss";

const portfolioData = [
  {
    title: "ThreatStream – Real-Time Threat Intelligence Platform",
    date: "2025",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Prisma", "Docker", "JWT"],
    image: "/images/threatstream-dashboard.png",
    github: "https://github.com/Dhruvi6812/ThreatStream.git",
    live: "https://threat-stream-five.vercel.app/login",
    bullets: [
      "Built a full-stack cybersecurity platform for real-time threat intelligence.",
      "Integrated AbuseIPDB API to fetch and process live malicious IP data.",
      "Implemented JWT authentication with secure httpOnly cookies.",
      "Designed PostgreSQL schema using Prisma ORM with relational models.",
      "Handled API rate limiting (429 errors) with fallback strategies.",
      "Developed responsive dashboard with severity classification (NEW / RECENT / STALE)."
    ]
  },
  {
    title: "Full-Stack Web Application Suite",
    date: "2024",
    techStack: ["React.js", "Node.js", "Spring Boot", "MongoDB"],
    image: "/images/project2.jpg",
    bullets: [
      "Developed scalable applications with cart, checkout, and real-time features.",
      "Designed REST APIs and optimized database queries for performance.",
      "Built responsive UI improving usability and engagement."
    ]
  },
  {
    title: "Mobile Agricultural Platform",
    date: "2024",
    techStack: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
    image: "/images/project1.jpg",
    github: "https://github.com/Dhruvi6812/Procure-produce-sales-management.git",
    bullets: [
      "Built a platform connecting farmers and buyers with transparent transactions.",
      "Implemented backend systems for order tracking and contract management.",
      "Enabled scalable cloud-based deployment using AWS."
    ]
  },
  {
    title: "AI-Powered Smart Applications",
    date: "2023",
    techStack: ["Python", "OpenCV", "PyTorch", "Django"],
    image: "/images/project3.jpg",
    bullets: [
      "Built AI-based applications including emotion detection and healthcare systems.",
      "Implemented ML models for facial recognition and medical predictions.",
      "Developed data pipelines and user-friendly interfaces."
    ]
  },
  {
    title: "CyberScope – Cybersecurity Analysis",
    date: "2025",
    techStack: ["Shodan", "Maltego", "SQLMap", "Ettercap", "Cuckoo Sandbox"],
    image: "/images/project6.jpg",
    bullets: [
      "Performed OSINT investigations and vulnerability analysis.",
      "Simulated phishing and MITM attacks in controlled environments.",
      "Analyzed malware behavior using dynamic and static techniques."
    ]
  }
];

const PortFolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">Projects</h2>

      <div className="portfolio__grid">
        {portfolioData.map((project, index) => (
          <div className="portfolio__card" key={index}>
            <div className="portfolio__card-inner">

              {/* FRONT */}
              <div className="portfolio__card-front">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
              </div>

              {/* BACK */}
              <div className="portfolio__card-back">
                <h3>{project.title}</h3>
                <p className="portfolio__date">{project.date}</p>

                <ul>
                  {project.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* TECH STACK */}
                <div className="portfolio__tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="portfolio__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
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