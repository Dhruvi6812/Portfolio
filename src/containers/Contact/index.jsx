import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="contact__container">

        {/* LEFT SIDE */}
        <Animate
          play
          duration={1}
          start={{ transform: "translateX(-100px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <div className="contact__info">
            <h2>Let’s Connect</h2>

            <p>
              I’m currently open to full-stack and frontend opportunities.
              Feel free to reach out if you’d like to collaborate or just say hi!
            </p>

            <div className="contact__links">
              <a href="mailto:dhruvi.patel.cs@gmail.com">Email</a>
              <a href="https://linkedin.com/in/pateldhruvih" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Dhruvi6812" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Animate>

        {/* RIGHT SIDE (Simple Form) */}
        <Animate
          play
          duration={1}
          start={{ transform: "translateX(100px)", opacity: 0 }}
          end={{ transform: "translateX(0px)", opacity: 1 }}
        >
          <div className="contact__form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </Animate>

      </div>
    </section>
  );
};

export default Contact;