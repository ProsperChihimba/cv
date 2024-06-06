import {
  ClevertechLogo,
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Prosper Absalom",
  initials: "PA",
  location: "Dar Es Salaam, Tanzania",
  locationLink: "https://www.google.com/maps/place/Dar+es+Salaam",
  about:
    "Full Stack Engineer with a focus on building financial products",
  summary:
    "Three years of experience as a software developer, with a focus on building financial products. I have expertise in building mobile apps, web apps, and APIs, and for two years I have been able to work with a Fintech startup that builds financial infrastructure for businesses.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1742510764970123264/n2zWqzg4_400x400.jpg",
  personalWebsiteUrl: "https://prosperabsalom.com",
  contact: {
    email: "howdy@prosperabsalom.com",
    tel: "+255747696485",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ProsperChihimba",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prosper-absalom/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Prosper_absalom",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Dar es Salaam",
      degree: "Bachelor's Degree in Business Infromation Technology",
      start: "2023",
      end: "2026",
    },
    {
      school: "Sokoine University of agriculture",
      degree: "Diploma In Information Technology",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Swahilies Inc ",
      link: "https://swahilies.com",
      badges: ["Remote"],
      title: "Software Engineer ",
      logo: ParabolLogo,
      start: "2020",
      end: "Current",
      description:
        "Built a banking feature for SMEs to access all banking services, Rebuilt mobile app for SMEs bookkeeping and banking, Built a web version of the mobile app for SMEs to access bookkeeping through desktops, Built main internal tools(Dashboards) for management and the company main website. Technologies: React, TypeScript, Flutter, Python",
    },
    {
      company: "Cheka Plus",
      link: "https://chekaplus.com",
      badges: ["Remote"],
      title: "System administrator → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2024",
      description:
        "Led the development of a mini-app version of Cheka Plus, strategically aligning with Vodacom's M-Pesa app, System Maintenance and Updates of the Cheka Plus mobile application and server infrastructure. Technologies: Flutter, Python, React, TypeScript, JavaScript, Ubuntu, AWS",
    },
  ],
  skills: [
    "Python",
    "Flutter",
    "Dart",
    "JavaScript",
    "React",
    "Django",
    "SQL",
    "Linux",
    "AWS",
    "Git"
  ],
  projects: [
    {
      title: "Momoa",
      techStack: [
        "Flutter",
        "Python",
        "Django",
        "React",
        "AWS",
      ],
      description: "Mobile application to help agents to keep track of their cashflow, debt customers, expenses and commissions",
      logo: ConsultlyLogo,
      link: {
        label: "momoa.com",
        href: "https://drimer.io/@downloadmomoa",
      },
    },
    {
      title: "Rikwest",
      techStack: ["Client Project", "Flutter", "Dart", "Python"],
      description:
        "Rikwest is Bolt like app for ride sharing between drivers and clients in Tanzania",
      logo: MonitoLogo,
      link: {
        label: "#",
        href: "https://apps.apple.com/ar/app/rikwest/id6502919669",
      },
    },
    {
      title: "Kipenzi",
      techStack: ["Client Project", "Flutter", "Dart", "Python"],
      description:
        "Tinder for Tanzania, building a dating mobile application for Tanzanians",
      logo: MonitoLogo,
      link: {
        label: "#",
        href: "https://play.google.com/store/apps/details?id=com.kipenzi.app&hl=en_AU&gl=JP",
      },
    },
    {
      title: "Shoket",
      techStack: ["Side Project", "Python", "Django", "Payment API"],
      description:
        "Stripe for developers, a payment processor for developers and small business to easly access payment.",
      logo: MonitoLogo,
      link: {
        label: "shoket.co",
        href: "https://shoket.co/",
      },
    },
    {
      title: "MedPack",
      techStack: ["Client Project", "React", "TypeScript", "JavaScript"],
      description:
        "Built website and dashboard for company dealing with Health Facilities products for managing their procurements, inventory and sales.",
      logo: MonitoLogo,
      link: {
        label: "medpack.co.tz",
        href: "https://medpack.co.tz/",
      },
    },
    {
      title: "Payroll app",
      techStack: ["Personal Project", "Flutter", "Dart", "Python"],
      description:
        "A mobile app for managing payroll within organizations and startups",
      logo: MonitoLogo,
      link: {
        label: "drimer.io/@payroll",
        href: "https://drimer.io/@payroll",
      },
    },
    {
      title: "Flutter Tanzania",
      techStack: ["Flutter", "Dart", "Writing", "Community Development"],
      description:
        "A community for Flutter developers to learn and share knowledge",
      logo: MonitoLogo,
      link: {
        label: "dev.to/fluttertanzania",
        href: "https://dev.to/fluttertanzania",
      },
    },
  ],
} as const;
