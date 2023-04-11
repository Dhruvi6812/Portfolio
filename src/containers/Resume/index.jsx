import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils2";
import "./styles.scss";
import{MdWork} from 'react-icons/md';


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={30} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            linecolor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__verticaltimeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                   border:'1px solid var(--yellow-theme-main-color)'
                }}
                 date="2022 - present"
                 icon={<MdWork/>}
                 iconStyle={{
                  background: '#181818',
                  color:'var(--yellow-theme-main-color)'
                 }}
              >
                <div className="verticaltimeline-element-title-wrapper">
                  <h3 className="verticaltimeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="verticaltimeline-element-subtitle">
                    {item.subtitle}
                  </h4>
                 
                </div>
                <p className="verticaltimeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            linecolor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__verticaltimeline-element"
                 contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                   border:'1px solid var(--yellow-theme-main-color)'
                }}
                date="2022 - present"
                 icon={<MdWork/>}
                 iconStyle={{
                  background: '#181818',
                  color:'var(--yellow-theme-main-color)'
                 }}
                >
                <div className="verticaltimeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subtitle}
                  </h4>
              </div>
              <p className="verticaltimeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
