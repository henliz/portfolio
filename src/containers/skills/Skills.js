import React, { useContext } from "react";
import "./Skills.scss";
import { illustration, skillsSection, techStack } from "../../portfolio"; // ✅ Added techStack
import { motion } from "framer-motion";
import rocketgirlie from "../../assets/lottie/rocketgirlie";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
//import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import Build from "../../assets/lottie/build.json"; // ✅ Added Build animation


export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left Side - Image or Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="skills-image-div"
        >
          {illustration.animated ? (
            <DisplayLottie animationData={rocketgirlie} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            />
          )}
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className="skills-heading">Proficiency</h1>
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }} // Staggered effect
                    className="skill"
                  >
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="skills-image"
            >
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img alt="Skills" src={require("../../assets/images/skill.svg")} />
              )}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

