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
      <div className="home__content">
        
        {/* Profile Image */}
        <div className="home__image-wrapper">
          <img
            src="/images/profile.jpg"
            alt="Dhruvi Patel"
            className="home__image"
          />
        </div>

        {/* Text Section */}
        <div className="home__text-wrapper">
          
          {/* Main Heading */}
          <h1>
            Hi, I’m <span>Dhruvi Patel</span>
          </h1>

          {/* Subheading */}
          <h2>
            Full Stack Developer | React • Next.js • TypeScript • Node.js
          </h2>

          {/* Short Intro (clean + impactful) */}
          <p className="home__description">
            Full Stack Developer with 3+ years of experience building scalable,
            high-performance web applications. Currently working at{" "}
            <strong>Carfax</strong>, where I contribute to modernizing large-scale
            systems, improving performance, and delivering data-driven user experiences.
          </p>

          {/* Value Proposition */}
          <p className="home__description">
            I specialize in developing clean, efficient solutions across the stack —
            from intuitive frontend interfaces to robust backend APIs and cloud integrations.
          </p>

          {/* Highlight Line */}
          <p className="home__highlight">
            Recently focused on real-time systems, AI-powered applications, and cybersecurity projects like <strong>ThreatStream</strong>.
          </p>

          {/* CTA Buttons */}
          <Animate
            play={true}
            duration={1.2}
            delay={0.8}
            start={{ transform: "translateY(100px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="home__cta">
              <button onClick={handleNavigateToContactMePage}>
                Hire Me
              </button>

              <button
                className="secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Projects
              </button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Home;