import React from "react";
import { Skill } from "../data/aboutData";

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <ul className="list-disc pl-2">
      {skills.map((skill, index) => (
        <li key={index}>{skill.name}</li>
      ))}
    </ul>
  );
};

export default SkillsList;
