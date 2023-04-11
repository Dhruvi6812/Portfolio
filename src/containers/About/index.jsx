import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Priyanka Patel",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Ahmedabad",
  },
  {
    label: "Email",
    value: "priyanka@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9876002341",
  },
];

const jobSummary =
  "I am looking for a talented frontend developer.The ideal candidate will have experience in building responsive and dynamic web applications using modern frontend technologies such as HTML, CSS,and JAVASCRIPT.Proficieny in at least one frontend framework REACT JS.Understanding of UI/UX design principles and best practices.Experience with version control systems GIT.Excellent problem-solving and analytical skills.Ability to work independently and in a team environment.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3> Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(400px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalinformationHeadertext">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
            >
          <div className="about__content__serviceswrapper__innerContent">
            <div>
              <FaDev size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={50} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
