import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import rocketgirlie from "../../assets/lottie/rocketgirlie";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left Side - Image or Animation */}
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={rocketgirlie} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>

        {/* Right Side - Text Content */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            {/* Title */}
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>

            {/* Subtitle */}
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>

            {/* Software Skills (FontAwesome icons) */}
            <SoftwareSkill />

            {/* General Skills List */}
            <div>
              {skillsSection.skills.map((skill, i) => (
                <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                  {skill}
                </p>
              ))}
            </div>

            {/* My Tech Toolkit Section */}
            <h3 className="skills-section-header">🛠️ My Tech Toolkit</h3>
            <div className="skills-list">
              {skillsSection.toolkit.map((item, index) => (
                <div key={index} className="skills-list-item">
                  <span className="bullet-emoji">{item.emoji}</span> {item.text}
                </div>
              ))}
            </div>


            {/* What I Love Creating Section */}
            <h3 className="skills-section-header">💖 What I Love Creating</h3>
            <div className="skills-list">
              {skillsSection.toolkit.map((item, index) => (
                <div key={index} className="skills-list-item">
                  <span className="bullet-emoji">{item.emoji}</span> {item.text}
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

