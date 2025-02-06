import React from "react";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((skill, i) => {
          return (
            <div className="software-skill-inline" key={i}>
              <i className={skill.fontAwesomeClassname}></i>
              <p>{skill.skillName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}