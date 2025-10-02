import { TimelineItem } from "../components/ui/Timeline";
import { SkillCategory } from "../components/ui/SkillsGrid";

export interface Achievement {
  name: string;
  year?: string;
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Smart Contracts & Blockchain",
    skills: ["Solidity", "Hardhat", "IPFS"],
    variant: "accent",
  },
  {
    title: "Frontend & Web3",
    skills: ["React", "Next.js", "TypeScript", "Ethers.js", "Web3.js", "Wagmi"],
    variant: "blue",
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Railway",
      "AWS",
    ],
    variant: "default",
  },
  {
    title: "Languages & Tools",
    skills: ["JavaScript", "TypeScript", "Golang", "Python", "Git"],
    variant: "default",
  },
];

export const experiences: TimelineItem[] = [
  {
    title: "Web3 Full Stack Engineer",
    company: "Lavarage",
    period: "November 2024 - Present",
    location: "Singapore, Remote",
    current: true,
    responsibilities: [
      "Full stack development of a decentralized trading platform handling $200M+ in trading volume.",
      "Created client SDKs from smart contracts for seamless external integration.",
      "Built plug-and-play APIs enabling integration of thousands of Solana tokens.",
      "Implemented gRPC services using Go for real-time streaming of on-chain data.",
      "Developed a Telegram trading bot with integrated mini app functionality.",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "Salad Ventures",
    period: "April 2022 - October 2024",
    location: "Singapore, Remote",
    responsibilities: [
      "Developed, tested, and deployed smart contracts for blockchain applications with zero security incidents.",
      "Collaborated with cross-functional teams to build and scale blockchain products to 300k+ users within 4 months.",
      "Maintained and enhanced client- and server-side applications ensuring 99% uptime.",
      "Contributed to technical architecture decisions for NFT staking and gaming mechanics.",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "Freelance",
    period: "January 2021 - March 2022",
    location: "Remote",
    responsibilities: [
      "Wrote, tested and deployed Smart Contracts to multiple blockchain networks.",
      "Integrated smart contracts to create full-stack blockchain applications (DApps).",
    ],
  },
  {
    title: "Medical Doctor",
    company: "Ministry of Health, Malaysia",
    period: "October 2012 - March 2022",
    location: "Malaysia",
    responsibilities: [
      "Applied clinical skills to diagnose, educate, treat and care for patients in high-pressure environments.",
      "Mentored junior doctors and medical students to develop necessary clinical skills.",
      "Maintained detailed patient records and collaborated with multidisciplinary healthcare teams.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    name: "Speaker at Solana Summit 2025",
    year: "2025",
    description:
      "Main stage speaker at Solana Summit 2025 representing Lavarage",
  },
  {
    name: "Certified in Cybersecurity (CC) Training",
    year: "2023",
    description: "Official (ISC)² certification in cybersecurity fundamentals",
  },
  {
    name: "Covalent's Data Alchemist Bootcamp",
    year: "2022",
    description: "Completed intensive blockchain data analytics program",
  },
  {
    name: "Bachelor of Medicine, Bachelor of Surgery",
    year: "2012",
    description: "Medical degree from International Medical University",
  },
];
