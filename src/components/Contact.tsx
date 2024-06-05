import { ContactSetion } from "../styles/Contact/style";
import { FaGithub } from "react-icons/fa6";
import { SiTistory } from "react-icons/si";

function Contact() {
  return (
    <ContactSetion id="contact">
      <div className="inner">
        <div>
          <p>백민정 | Minjung Baik</p>
          <p>Seoul/Korea</p>
          <p>(+82) 10-3168-9388</p>
          <p>b.qdecision@gmail.com</p>
        </div>
        <div>
          <a href="https://github.com/MJBaik" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a href="https://codgehog.tistory.com/" target="_blank">
            <SiTistory className="icon" />
          </a>
        </div>
        <div>©2024 Minjung Baik. All Rights Reserved.</div>
      </div>
    </ContactSetion>
  );
}

export default Contact;
