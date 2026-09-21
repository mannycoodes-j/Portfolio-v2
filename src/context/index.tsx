import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { IContext, myExperienceProps, ProjectCategories } from "../types/types";
import { projects } from "../data/projects";

export { projects } from "../data/projects";

export type AppProviderProps = { children: ReactElement };

const AppContext = createContext({} as IContext);

const myExperience: myExperienceProps[] = [
  {
    company: "Hypa Intelligence",
    start_date: "February 2026",
    end_date: "Present",
    position: "Software / AI/ML Engineer",
    works: [
      "Build and maintain web and mobile applications across an AI and African-language technology ecosystem.",
      "Integrate LLM, translation, speech-to-text, text-to-speech, and multilingual AI capabilities into production products.",
      "Contribute to model experimentation, evaluation, inference, dataset handling, API integration, and output validation.",
      "Collaborate with AI researchers, engineers, and product teams from prototype through production deployment.",
    ],
    skillsets: ["React", "React Native", "TypeScript", "Python", "LLMs"],
  },
  {
    company: "TSES",
    start_date: "Contract",
    end_date: "",
    position: "Mobile & Web Developer",
    works: [
      "Develop enterprise-grade web and mobile applications across multiple products and client projects.",
      "Build SaaS platforms, dashboards, internal systems, and mobile applications from product requirements through implementation.",
      "Integrate APIs, authentication, real-time services, third-party platforms, and business workflows.",
      "Create reusable components and modules that accelerate delivery across product teams.",
    ],
    skillsets: ["React", "React Native", "TypeScript", "REST APIs"],
  },
  {
    company: "Motion Labs",
    start_date: "January 2026",
    end_date: "March 2026",
    position: "Desktop Application Engineer",
    works: [
      "Designed desktop applications for specialized operational and enterprise use cases.",
      "Built oil and gas software supporting tracking, monitoring, data management, and operational workflows.",
      "Implemented reliable local processing, structured data handling, and integrations with external services and devices.",
      "Tested, debugged, optimized, and maintained applications for reliability and usability.",
    ],
    skillsets: ["Electron", "TypeScript", "Desktop Applications"],
  },
  {
    company: "CENTRL",
    start_date: "May 2025",
    end_date: "August 2025",
    position: "Frontend Developer",
    works: [
      "Collaborated with designers and engineers on a booking and event-ticketing platform.",
      "Wrote clean, maintainable frontend code with Next.js.",
      "Participated in code reviews and sprint planning.",
    ],
    skillsets: ["Next.js", "TypeScript", "Frontend Development"],
  },
  {
    company: "Applegrove Advisory",
    start_date: "March 2025",
    end_date: "June 2025",
    position: "Frontend Developer",
    works: [
      "Built responsive, role-based dashboards for applicants, developers, communities, and mortgage institutions.",
      "Developed mortgage application forms and property listings with validation, progress tracking, and API integration.",
      "Created secure drag-and-drop document upload experiences for sensitive application information.",
      "Improved performance using code splitting, lazy loading, and efficient state management.",
    ],
    skillsets: ["Next.js", "TypeScript", "State Management", "REST APIs"],
  },
  {
    company: "Fixeroni",
    start_date: "December 2024",
    end_date: "March 2025",
    position: "Frontend Developer",
    works: [
      "Collaborated with designers and engineers to develop an artisan booking platform.",
      "Built clean, maintainable frontend features with Next.js.",
      "Contributed through code reviews and sprint planning.",
    ],
    skillsets: ["Next.js", "TypeScript", "Frontend Development"],
  },
  {
    company: "Motherland AI",
    start_date: "June 2024",
    end_date: "February 2025",
    position: "Frontend Developer",
    works: [
      "Created gamified African-language learning interfaces with pronunciation, storytelling, and adaptive progress tracking.",
      "Developed cross-platform mobile experiences with offline and low-data support for African markets.",
      "Built community content tools for audio stories, traditional music, testimonials, and collaborative translation.",
      "Implemented AI-powered education dashboards and interactive cultural-preservation archives.",
    ],
    skillsets: ["React", "React Native", "AI Integration", "Offline Apps"],
  },
  {
    company: "Attitech",
    start_date: "Contract",
    end_date: "",
    position: "Frontend Developer",
    works: [
      "Developed an interactive drawing board with pen, brush, and eraser tools.",
      "Created reusable components and connected frontend features to backend services.",
      "Delivered mobile-first, accessible, and cross-browser experiences.",
    ],
    skillsets: ["React", "JavaScript", "Responsive Design"],
  },
  {
    company: "CryptoBrothers",
    start_date: "Contract",
    end_date: "",
    position: "Frontend Developer",
    works: [
      "Developed and maintained a cryptocurrency platform for buying, selling, and exchanging digital assets.",
      "Built reusable components and integrated frontend features with backend services.",
      "Optimized the application for mobile devices, accessibility, and cross-browser support.",
    ],
    skillsets: ["React", "API Integration", "Responsive Design"],
  },
  {
    company: "VCINT",
    start_date: "December 2023",
    end_date: "August 2024",
    position: "Frontend Developer Intern",
    works: [
      "Converted high-fidelity UI designs into responsive, interactive web applications.",
      "Developed reusable components and connected frontend features to backend services.",
      "Optimized applications for speed, accessibility, and browser compatibility.",
    ],
    skillsets: ["React", "JavaScript", "Responsive Design"],
  },
  {
    company: "Petforde Technologies",
    start_date: "June 2024",
    end_date: "November 2024",
    position: "Web Development & Coding Instructor",
    works: [
      "Taught web development across multiple bootcamps to students aged 8 to 17.",
      "Guided 15 students in building functional websites and interactive Scratch projects.",
      "Created a supportive environment for experimentation, confidence, and creative problem-solving.",
    ],
    skillsets: ["Web Development", "Scratch", "Technical Instruction"],
  },
  {
    company: "Microsoft",
    start_date: "May 2022",
    end_date: "June 2023",
    position: "Tech Mentor & Software Development Tutor",
    works: [
      "Mentored young people entering technology and helped them identify suitable career paths.",
      "Led individual and group software-development tutoring focused on practical skills.",
      "Helped mentees build foundations across programming languages and technologies.",
      "Received a nomination for the Microsoft Innovative Educator Expert award.",
    ],
    skillsets: ["Mentoring", "Software Development", "Technical Instruction"],
  },
];

export const legacyProjects: ProjectCategories[] = [
  {
    id: 3,
    name: "Mobile Apps",
    projects: [],
  },
  {
    id: 1,
    name: "Web Applications",
    projects: [
      {
        name: "CodeAlgo Academy",
        desc: "I worked with a tem of frontend developers to build this Learning Management System (LMS) where kids are able to learn to code through gamified lessons",
        id: 25,
        links: {
          live: "https://codealgoacademy.com",
        },
        image: "codealgo.png",
      },

      {
        name: "Edssistance",
        desc: "I worked with other full stack developers to build this role-based School Managment System which helps school admins, parents, staff and students manage their activites seamlessly",
        id: 105,
        links: {
          live: "https://edssistance.com",
        },
        image: "edssistance.png",
      },
      {
        name: "Dblog",
        desc: "DBlog is a feature-rich blog application that offers a wide range of functionalities. Users can conveniently log in using their Google, Facebook, or email and password credentials. The homepage showcases a collection of blogs created by various users. With Dblog, users can explore other users' account details alongside their own. Furthermore, users have the flexibility to create, read, edit, and delete their blog posts. Dblog also empowers users to easily update their account information.",
        id: 12,
        links: {
          live: "https://dblog-dc3a4.web.app",
          github: "/dblog-v2",
        },
        image: "dblog.png",
        tools: ["React JS", "Tailwind CSS", "Firebase", "Redux Js"],
      },
      {
        name: "Realtor",
        desc: "A robust Real Estate API that empowers users to effortlessly create property listings, facilitate seamless communication with potential buyers, tenants, and fellow agents. In addition, our API offers an integrated wallet system leveraging Paystack for secure financial transactions.",
        id: 109210291,
        links: {
          live: "https://daniel-realtor.onrender.com",
          github: "/realtor-api",
        },
        image: "realtor.png",
        tools: [
          "Node JS",
          "Express JS",
          "Mongo DB",
          "Typescript",
          "Swagger UI",
          "Paystack",
        ],
      },
      {
        name: "Amado",
        desc: "This e-commerce app boasts a wide array of impressive features and a sleek, user-friendly design. Users can effortlessly browse through the extensive product catalog. With the ability to filter products based on size, color, and various other preferences, finding the perfect item is a breeze. Adding products to the cart is a simple process, and users have the flexibility to adjust the quantity of items in their cart directly from the cart page.",
        id: 13,
        links: {
          live: "https://daniel-amado.netlify.app",
          github: "/Amado-e-commerce",
        },
        image: "amado.png",
        tools: ["React JS", "Bootstrap", "Context API"],
      },

      {
        name: "Github Search",
        desc: "This is a mini github clone, which leverages the github api to provide results based on the users search input. The search results includes the related commits, topics, users and repositories. Ability to view users profile, their repositories, followers and people they follow",
        id: 14,
        links: {
          live: "https://daniel-github-search.vercel.app",
          github: "/Github-Search",
        },
        image: "github.png",
        tools: ["Next JS", "Typescript", "Tailwind CSS", "Context API"],
      },
    ],
  },
  {
    id: 0,
    name: "Web Pages",
    projects: [
      {
        name: "Homeland",
        desc: "Homeland is a real estate webapp that allows you to search and filter houses based on their location and price. It provides a page to view each houses as well as their agents",
        id: 0,
        links: {
          live: "https://daniel-homeland.vercel.app",
          github: "/Homeland",
        },
        image: "homeland.png",
        tools: ["React JS", "Tailwind CSS", "Context API"],
      },
      {
        name: "Holux",
        desc: "Holux is a real estate landing page designed which supports accessibility and is well optimized.  it features captivating scroll animations that add a touch of elegance to your browsing journey",
        id: 1,
        links: {
          live: "https://daniel-holux.netlify.app",
          github: "/Real-Estate-Website",
        },
        image: "holux.png",
        tools: ["HTML", "CSS", "AOS", "Javascript"],
      },
      {
        name: "GPT-3",
        desc: "GPT-3 is a landing page design for the OPEN-AI. This page showcases their sponsors, offers insightful blog posts, and provides various other engaging sections to explore.",
        id: 2,
        links: {
          live: "https://daniel-gpt3.vercel.app",
          github: "/gpt-3",
        },
        image: "gpt-3.png",
        tools: ["React JS", "CSS"],
      },
      {
        name: "Hoobank",
        desc: "Hoobank is a landing page for a bank platform. It features accessible and nice user interface designs",
        id: 3,
        links: {
          live: "https://daniel-hoobank.vercel.app",
          github: "/Hoobank",
        },
        image: "hoobank.png",
        tools: ["React JS", "CSS"],
      },

      {
        name: "NFT Marketplace",
        desc: "NFT marketplace is a landing page for NFT Collections. The inclusion of a filter section enables users to easily sort and discover NFT Collections based on their preferred categories.",
        id: 6,
        links: {
          live: "https://daniel-nft-marketplace.vercel.app",
          github: "/nft-marketplace",
        },
        image: "nft.png",
        tools: ["React JS", "CSS"],
      },
    ],
  },

  {
    id: 2,
    name: "Portfolios",
    projects: [
      {
        name: "Adejare Daniel",
        desc: "This is my first portfolio built with HTML, Bootstrap and Javascript",
        id: 17,
        links: {
          live: "https://adejare-daniel.netlify.app",
          github: "/Portfolio",
        },
        image: "adejare-daniel.png",
        tools: ["HTML", "Bootstrap", "Javascript"],
      },
      {
        name: "Adejare Daniel V2",
        desc: "This is my current portfolio built with React JS, Typescript and Tailwind CSS",
        id: 18,
        links: {
          live: "",
          github: "/portfolio-v2",
        },
        image: "daniel-dunsin.png",
        tools: ["React JS", "Typescript", "Context API", "Tailwind CSS"],
      },
      {
        name: "Bamidele Olaoluwa",
        desc: "This is a 3D Designer's portfolio, expertly designed to embody exceptional UI and UX principles. It offers a seamless and visually pleasing experience, with full mobile responsiveness to ensure accessibility from any device.",
        id: 19,
        links: {
          live: "https://bamidele-olaoluwa.netlify.app",
          github: "/Bamidele-Olaoluwa",
        },
        image: "bamidele-olaoluwa.png",
        tools: ["React JS", "Context API", "Tailwind CSS"],
      },
    ],
  },
];

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const [companies, setCompanies] = useState<string[]>([]);
  const [experienceInView, setExperienceInView] = useState<myExperienceProps>(
    myExperience[0]
  );
  const [filteredProjects, setFilteredProjects] = useState<ProjectCategories[]>(
    [...projects]
  );
  const [filterButtons, setFilterButtons] = useState<string[]>(["All"]);
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<string>("All");

  const selectCompany = (company: string) => {
    setExperienceInView(() => {
      return myExperience.find(
        (exp) => exp.company === company
      ) as myExperienceProps;
    });
  };
  const selectFilterButton = (name: string) => {
    setSelectedFilterButton(name);
    setFilteredProjects(() => {
      if (name === "All") {
        return [...projects];
      } else {
        return projects.filter((project) => project.name === name);
      }
    });
  };

  // get All experiences
  useEffect(() => {
    setCompanies(() => {
      return myExperience.map((exp) => exp.company);
    });
  }, []);
  // get all buttons
  useEffect(() => {
    setFilterButtons(() => {
      return [...projects].reduce(
        (acc, curr) => {
          if (!acc.includes(curr.name)) {
            acc.push(curr.name);
          }
          return acc;
        },
        ["All"]
      );
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        sidebarOpened,
        setSidebarOpened,
        experienceInView: experienceInView as myExperienceProps,
        companies,
        selectCompany,
        filteredProjects,
        filterButtons,
        selectedFilterButton,
        selectFilterButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
