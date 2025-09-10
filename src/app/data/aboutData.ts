export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Achievement {
  name: string;
}

export const skills: Skill[] = [
  { name: "Solidity" },
  { name: "Hardhat" },
  { name: "Ethers.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "React / NextJS" },
  { name: "Express" },
  { name: "Node.js" },
  { name: "NestJS" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "Golang" },
  { name: "Python" },
];

export const experiences: Experience[] = [
  {
    title: "Web3 Full Stack Engineer",
    company: "Lavarage",
    period: "November 2024 - Present",
    responsibilities: [
      "Full stack development of a decentralized trading platform.",
      "Created client SDKs from Solana smart contracts for external integration.",
      "Built plug-and-play APIs that powered $200M+ in trading and enabled integration of thousands of Solana tokens.",
      "Implemented gRPC services using Go for streaming on-chain data.",
      "Developed a Telegram trading bot with a Telegram mini app.",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "Salad Ventures",
    period: "April 2022 - October 2024",
    responsibilities: [
      "Developed, tested, deployed smart contracts for blockchain applications, ensuring security and efficiency.",
      "Collaborated with the team to build and scale blockchain products to 300k+ users within 4 months.",
      "Maintained and enhanced client- and server-side applications to ensure performance and reliability.",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "Freelance",
    period: "January 2021 - March 2022",
    responsibilities: [
      "Write, test and deploy Smart Contracts to the Blockchain.",
      "Integrate smart contracts to create full-stack blockchain applications (DApps).",
    ],
  },
  {
    title: "Medical Doctor",
    company: "Ministry of Health, Malaysia",
    period: "October 2012 - March 2022",
    responsibilities: [
      "Clinical skills to diagnose, educate, treat and care for patients.",
      "Mentor junior doctors to attain the necessary skills.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    name: "Speaker at Solana Summit 2025",
  },
  {
    name: "Certificate of Completion of Official (ISC)² Certified in Cybersecurity (CC) Training (2003)",
  },
  {
    name: "Certificate of Completion of Covalent's Data Alchemist Bootcamp (2022)",
  },
  {
    name: "Bachelor of Medicine, Bachelor of Surgery (2012)",
  },
];
