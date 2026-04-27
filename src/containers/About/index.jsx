import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import { Animate } from "react-simple-animate";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiReact,
  SiExpress,
} from "react-icons/si";

import "./styles.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="about__content">
        
        {/* LEFT SIDE */}
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.2}
            delay={0.5}
            start={{ transform: "translateX(-200px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            
            {/* Intro */}
            <p className="about__intro">
              I’m <strong>Dhruvi Patel</strong>, a Full Stack Developer with 3+ years of experience building scalable, high-performance web applications.
            </p>

            {/* Experience */}
            <p>
              Currently working at <strong>Carfax</strong>, where I contribute to modernizing large-scale applications, improving performance, and delivering reliable, data-driven user experiences.
            </p>

            {/* Skills */}
            <p>
              My expertise lies in <strong>React, Next.js, TypeScript, and Node.js</strong>, along with experience in cloud platforms like <strong>AWS and Azure</strong>. I enjoy working across the stack — from building intuitive frontend interfaces to designing efficient backend systems and APIs.
            </p>

            {/* Projects */}
            <p>
              I’ve developed real-time and AI-powered applications, including a cybersecurity platform <strong>ThreatStream</strong>, where I implemented live threat intelligence, secure authentication, and scalable backend architecture.
            </p>

            {/* Personal */}
            <p>
              Outside of work, I enjoy learning new technologies, exploring innovative ideas, and trying out healthy recipes to stay creative and balanced.
            </p>

            {/* Closing */}
            <p className="about__closing">
              I’m always excited to take on challenges that push me to grow and build impactful, real-world solutions.
            </p>

          </Animate>
        </div>

        {/* RIGHT SIDE (Icons) */}
        <div className="about__content__serviceswrapper">
          <Animate
            play
            duration={1.2}
            delay={0.5}
            start={{ transform: "translateX(200px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <div className="about__content__serviceswrapper__innerContent">
              <div className="icon-wrapper icon-1"><SiHtml5 /></div>
              <div className="icon-wrapper icon-2"><SiCss3 /></div>
              <div className="icon-wrapper icon-3"><SiJavascript /></div>
              <div className="icon-wrapper icon-4"><SiReact /></div>
              <div className="icon-wrapper icon-5"><SiExpress /></div>
              <div className="icon-wrapper icon-6"><SiMysql /></div>
              <div className="icon-wrapper icon-7"><SiPython /></div>
            </div>
          </Animate>
        </div>

      </div>
    </section>
  );
};

export default About;