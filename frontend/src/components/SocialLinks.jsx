import { Github, Linkedin, Download } from "lucide-react";
import "./SocialLinks.css";


const SocialLinks = () => {

  return (
    <div className="social-links">
      <a href="https://github.com/SimBenoit" target="_blank" rel="noopener noreferrer">
        <Github/>
      </a>
      <a href="https://www.linkedin.com/in/simonbenoitbing/" target="_blank" rel="noopener noreferrer">
        <Linkedin/>
      </a>
      <a href="/Simon_CVM.pdf" download>
        <Download/>
      </a>
    </div>
  );
};

export default SocialLinks;
