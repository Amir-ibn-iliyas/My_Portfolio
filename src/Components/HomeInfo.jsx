import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box ">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      HI, I am <span className="font-bold">AMIR AHMAD</span>👋 <br />I am Web
      Developer from India{" "}
    </h1>
  ),
  2: (
    <InfoBox
      text="Passionate React developer eager to deliver high-quality, tailored solutions for your project. Let's bring your vision to life together."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: <InfoBox
  text="Excited to start my journey as a React developer! Check out my portfolio to see the fresh, innovative projects I've built. Let's create something amazing together!"
  link="/projects"
  btnText="Visit My Portfolio"
/>,
  4:<InfoBox
  text="Ready to bring your ideas to life with fresh, creative solutions! Reach out—let's discuss how we can collaborate to make your project a success"
  link="/contact"
  btnText="Let's Talk"
/>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
