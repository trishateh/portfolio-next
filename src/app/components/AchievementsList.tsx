import React from "react";
import { Achievement } from "../data/aboutData";

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList: React.FC<AchievementsListProps> = ({
  achievements,
}) => {
  return (
    <ul className="list-disc pl-2">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement.name}</li>
      ))}
    </ul>
  );
};

export default AchievementsList;
