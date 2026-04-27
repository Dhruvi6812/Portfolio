import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Bootstrap / Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Django", "Spring Boot"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Cloud & APIs",
    items: ["AWS (S3, Lambda, EC2)", "Azure Functions", "REST APIs", "GraphQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Prisma ORM", "Git", "Webpack"],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress", "React Testing Library"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "OpenCV", "AI Integration"],
  },
  {
    title: "Security",
    items: ["JWT Authentication", "Kali Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="skills__container">
        {skills.map((category, index) => (
          <Animate
            key={index}
            play
            duration={0.8}
            delay={index * 0.1}
            start={{ transform: "translateY(50px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="skills__card">
              <h3>{category.title}</h3>
              <div className="skills__items">
                {category.items.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Skills;