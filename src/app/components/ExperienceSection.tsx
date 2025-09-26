import React from "react";
import { Experience } from "../data/aboutData";
import ExperienceItem from "./ExperienceItem";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <article>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </article>
  );
};

export default ExperienceSection;
