import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../component/PageHeaderContent';

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

const jobSummary = `
I’m Dhruvi Patel, a software engineer and current Master’s student in Computer Science at the University of Dayton.
My journey in tech started with a fascination for how things work and quickly evolved into a passion for building meaningful,
user-focused software solutions. With hands-on experience in full-stack development, I’ve worked with technologies like React.js,
Java Spring Boot, Django, and MongoDB — contributing to real-world projects in e-commerce, agriculture, and beyond.

Recently, I’ve been diving deeper into the world of cybersecurity, combining my love for problem-solving with technical curiosity
to explore areas like threat detection, penetration testing, and ethical hacking.

Outside of coding, I’m someone who believes in growing. I love trying out new healthy recipes and exploring
creative ways to stay active and energized. Whether it's learning a new framework or crafting something in the kitchen,
I’m always up for a challenge that helps me grow.
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="about__content">
        {/* Left side - summary text */}
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <p>{jobSummary}</p>
          </Animate>
        </div>

        {/* Right side - rotating tech icons */}
        <div className="about__content__serviceswrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
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
