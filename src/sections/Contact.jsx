import React from "react";
import { Mail, Linkedin } from "lucide-react";
import "../styles/Contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const email = "dari.mariadennis@gmail.com";
  const linkedInURL = "https://www.linkedin.com/in/dari-dennis";
  // useGSAP(() => {
  //   gsap.to('#email-card', {
  //     x: 250, 
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: 'power1.inOut'
  //   })
  // }, []);
  return (
    <div className="contact" id="contact">
      <div className="section-header">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-cards-container">
        <div id="email-card" className="contact-card">
          <a
            href={`mailto:${email}`}
          >
            <Mail size={84} />
            <div>
              <h3 className="text-lg font-semibold">{email}</h3>
            </div>
          </a>
        </div>
        <div id="linkedin-card" className="contact-card">
          <a
            href={linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={84} />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
