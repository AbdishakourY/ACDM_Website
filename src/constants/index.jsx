import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "About us", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Protection Services",
    description:
      "ACDM focuses on providing protection services for forcibly displaced individuals and migrants in Somalia and the East and Horn of Africa, with an emphasis on community-based initiatives, child protection, legal advocacy, and gender-based violence (GBV) response. We support safe spaces and advocate for legal reforms to protect vulnerable groups, including women, children, and GBV survivors, while addressing protection gaps related to migration and climate change.",
  },
  {
    icon: <Fingerprint />,
    text: "Climate-induced Displacement and Migration",
    description:
      "ACDM addresses climate-induced displacement by protecting and supporting displaced individuals, bolstering their resilience to climate shocks, and advocating for their inclusion in climate adaptation policies while collaborating with communities to restore the environment and improve livelihoods.",
  },
  {
    icon: <ShieldHalf />,
    text: "Durable Solutions",
    description:
      "ACDM focuses on promoting self-reliance and sustainable livelihoods for displaced individuals and migrants, ensuring their integration into host communities while advocating for legal protections and equitable access to essential services..",
  },
  {
    icon: <BatteryCharging />,
    text: "Capacity Building",
    description:
      "ACDM's capacity development initiatives enhance the technical skills of national authorities, align laws with international standards, and promote community-driven interventions to ensure forcibly displaced individuals and migrants access their rights, services, and long-term self-reliance.",
  },
  {
    icon: <PlugZap />,
    text: "Advocacy & Policy Engagement",
    description:
      "ACDM advocates for laws and policies that protect forcibly displaced individuals and migrants, collaborating with governments and stakeholders to align national frameworks with international standards, prioritize sustainable solutions, and emphasize child and gender-sensitive approaches.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Objectives",
    features: [
      "ACDM is committed to delivering comprehensive protection and sustainable solutions for individuals impacted by forced displacement, climate change, and migration. We recognize the urgency of their protection needs and are dedicated to supporting them in the process of rebuilding their lives with dignity, safety, and resilience. Our goal is to provide protection and solutions to every displaced individual and those on the move, regardless of whether their circumstances arise from conflict, persecution, climate change, and/or migration",
    ],
  },
  {
    title: "Vision",
    features: [
      "We aspire to create a world where individuals displaced by conflict, climate change, as well as those on move (migrants), can find safety and a pathway to a more promising future. Our vision encompasses communities that not only protect and support displaced persons and migrants but also empower them with opportunities to rebuild their lives and flourish.",
    ],
  },
  {
    title: "Mission",
    features: [
      "Our mission focuses on ensuring that all individuals, irrespective of the reasons behind their displacement, are equipped to reconstruct their lives with dignity and resilience. We aim to foster an environment where every person can access the resources and support necessary to thrive in their new circumstances.",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Projects" },
  { href: "#", text: "Documentation" }
];

export const platformLinks = [
  { href: "#", text: "Instagram" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "LinkedIn" }
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" }
];
