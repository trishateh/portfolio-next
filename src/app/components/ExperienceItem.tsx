import React from "react";
import { Experience } from "../data/aboutData";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="p-6">
      <h5 className="text-lg text-white font-semibold">{experience.title}</h5>
      <h6 className="text-lg text-gray-300">{experience.company}</h6>
      <p className="text-gray-400">{experience.period}</p>
      <ul className="list-disc pl-8">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-300">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
