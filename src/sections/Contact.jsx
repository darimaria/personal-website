import React from "react";
import { Mail, Linkedin } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const email = "dari.mariadennis@gmail.com";
  const linkedInURL = "https://www.linkedin.com/in/dari-dennis";
  return (
    <div className="contact-section">
      <div className="section-header">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-cards-container">
        <div className="contact-card">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
          >
            <Mail size={84} />
            <div>
              <h3 className="text-lg font-semibold">{email}</h3>
            </div>
          </a>
        </div>
        <div className="contact-card">
          <a
            href={linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
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
