import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import { skillsData } from "./utils1";
import { AnimateKeyframes } from "react-simple-animate";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__innercontent">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-400px)',
              }}
              end={{
                transform: 'translateX(0px)',
              }}
            >
              <h3 className="skills__content-wrapper__innercontent__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__innercontent__contanier">
                {item.data.map((SKillsItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="2"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{SKillsItem.skillName}</p>
                      <Line
                        percent={SKillsItem.percentage}
                        strokeWidth='2'
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth='2'
                        strokeLinecap='square'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
