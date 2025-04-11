import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/Contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Dhruvi Patel
          <br />
          I’m a passionate Software Engineer and Computer Science graduate student, driven by curiosity, creativity, and a love for solving real-world problems with clean, efficient code.
          <br />
          With a solid foundation in full-stack development and growing expertise in cybersecurity,
          <br />
          I specialize in building robust web applications using technologies like ReactJS, Java Spring Boot, Django, and MongoDB.
          <br />
          My journey includes hands-on experience through academic projects, professional internships, and coursework that bridges software engineering with cyber defense strategies.
          <br />
          Whether it’s developing scalable solutions or securing digital systems, I’m always eager to learn, adapt, and contribute meaningfully to forward-thinking teams.
          <br />
          Let’s build something amazing together. 🚀
        </h1>
      </div>

      <Animate
        play={true}
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact_btn">
          <button onClick={handleNavigateToContactMePage}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
