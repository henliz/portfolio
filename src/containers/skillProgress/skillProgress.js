import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
//import {Fade} from "react-reveal";
import { motion } from "framer-motion";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
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

    );
  }
  return null;
}
