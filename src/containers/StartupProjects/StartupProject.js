import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects, skillsSection } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill"; // ✅ Import SoftwareSkill

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);

  // ✅ Ensure bigProjects exists before accessing display
  if (!bigProjects || !bigProjects.display) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="skills-text-div">
        {/* Title */}
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {skillsSection.title}
        </h1>

        {/* Subtitle */}
        <p
          className={
            isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"
          }
        >
          {skillsSection.subTitle}
        </p>

        {/* Software Skills (FontAwesome icons) */}
        <SoftwareSkill />

        {/* General Skills List */}
        <div>
          {skillsSection.skills.map((skill, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }} // Staggered animation
              className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}
            >
              {skill}
            </motion.p>
          ))}
        </div>

        {/* My Tech Toolkit Section */}
        <h3 className="skills-section-header">🛠️ My Tech Toolkit</h3>
        <div className="skills-list">
          {skillsSection.toolkit.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="skills-list-item"
            >
              <span className="bullet-emoji">{item.emoji}</span> {item.text}
            </motion.div>
          ))}
        </div>

        {/* What I Love Creating Section */}
        <h3 className="skills-section-header">💖 What I Love Creating</h3>
        <div className="skills-list">
          {skillsSection.loveCreating.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="skills-list-item"
            >
              <span className="bullet-emoji">{item.emoji}</span> {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
