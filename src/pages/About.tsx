import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BiPaperclip } from "react-icons/bi";
import { BsAward, BsArrowUpRight, BsTrophy } from "react-icons/bs";
import Container from "../components/sections/Container";
import ScrollContainers from "../components/sections/ScrollContainers";
import DisplayContainer from "../components/UI/displayContainers";
import Title from "../components/UI/Title";
import { useGlobalContext } from "../context";
import {
  CSS3,
  Cypress,
  Github,
  HTML5,
  Javascript,
  Jest,
  MongoDB,
  NextJS,
  NodeJs,
  PostgreSQL,
  ReactJS,
  ReduxJS,
  TailwindCSS,
  Typescript,
  VSCode,
} from "../components/Icons";
import { myDetailsProps, skillsProps, toolsProps } from "../types/types";

const myDetails: myDetailsProps[] = [
  { question: "Full Name", answer: "Oladele Emmanuel" },
  { question: "Email", answer: "feranmioladele04@gmail.com" },
  { question: "Primary Role", answer: "Software & AI/ML Engineer" },
  { question: "Degree", answer: "B.Sc. Computer Science" },
  { question: "University", answer: "FUNAAB" },
  { question: "Focus", answer: "Web, Mobile, Desktop & AI" },
];

const skills: skillsProps[] = [
  { name: "JavaScript", icon: <Javascript size={27} fill="#000" /> },
  { name: "TypeScript", icon: <Typescript size={27} fill="#000" /> },
  { name: "React JS", icon: <ReactJS size={27} fill="#000" /> },
  { name: "Next JS", icon: <NextJS size={27} fill="#000" /> },
  { name: "Tailwind CSS", icon: <TailwindCSS size={27} fill="#000" /> },
  { name: "Redux Toolkit", icon: <ReduxJS size={27} fill="#000" /> },
  { name: "Node JS", icon: <NodeJs size={27} fill="#000" /> },
  { name: "PostgreSQL", icon: <PostgreSQL size={27} fill="#000" /> },
  { name: "MongoDB", icon: <MongoDB size={27} fill="#000" /> },
  { name: "Jest", icon: <Jest size={27} fill="#000" /> },
  { name: "Cypress", icon: <Cypress size={27} fill="#000" /> },
  { name: "HTML", icon: <HTML5 size={27} fill="#000" /> },
  { name: "CSS", icon: <CSS3 size={27} fill="#000" /> },
];

const tools: toolsProps[] = [
  { icon: <VSCode size={27} fill="#000" />, name: "Visual Studio Code" },
  { icon: <Github size={27} fill="#000" />, name: "Git & GitHub" },
];

const recognitions = [
  {
    title: "Winner - ZAP Africa Hackathon",
    label: "1st Place",
    icon: <BsTrophy />,
    description:
      "Won first place for building an application that simplifies Web3 onboarding. The solution lets users create a digital wallet with their Google account, removing the friction of traditional wallet setup. I contributed to the product architecture and full-stack implementation.",
  },
  {
    title: "Xerberus MCP Buildathon Winner",
    label: "Winner",
    icon: <BsTrophy />,
    description:
      "Built Xentinel, a DeFi risk command center with deep live integration of the Xerberus MCP. The product turns complex protocol and asset-risk data into a clearer operational view for faster decision-making.",
  },
  {
    title: "OpenBuild AI³ Growth Hackathon",
    label: "Track 1 Winner",
    icon: <BsTrophy />,
    description:
      "Built Vectra, an AI agent that safely pays for premium services, applies user-controlled spending policies, and returns transparent, verifiable receipts for every completed transaction.",
  },
  {
    title: "Vara Network Hackathon",
    label: "3rd Place - DeFi",
    icon: <BsAward />,
    description:
      "Built A2A Radar, a three-agent protocol designed for the Vara agent economy. The project placed third in the hackathon's DeFi track.",
  },
  {
    title: "Wheelhouse Hackathon",
    label: "3rd Place",
    icon: <BsAward />,
    description:
      "Built Kivora, an AI revenue-operations platform that helps short-term rental managers identify opportunities and improve revenue decisions. The project earned third place in the hackathon.",
  },
  {
    title: "People's Choice Award",
    label: "Wheelhouse Hackathon",
    icon: <BsTrophy />,
    description:
      "Kivora was also selected as the People's Choice winner at the Wheelhouse Hackathon, recognizing the product's practical value, presentation, and audience impact.",
  },
  {
    title: "Microsoft Innovative Educator Expert",
    label: "Award Nomination",
    icon: <BsAward />,
    description:
      "Nominated for the Microsoft Innovative Educator Expert recognition for contributions to technology education, mentoring, and helping young learners build practical software-development skills.",
  },
];

const About = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { companies, selectCompany, experienceInView } = useGlobalContext();

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container nextPageLink="/portfolio" nextPageText="See my projects">
      <section className="w-full h-full pb-[2rem]">
        <Title text="About Me." topOfPage={true} />
        <div className="flex items-start justify-between gap-8 sl:flex-row flex-col">
          <div className="flex-1 w-full sl:max-w-[400px]">
            <img
              src="/favicon.png"
              alt="Oladele Emmanuel, software and AI/ML engineer"
              loading="eager"
              width="1254"
              height="1254"
              className="w-full h-[360px] sl:h-[450px] object-cover object-center rounded-[10px]"
            />
          </div>
          <div className="flex-1 w-full">
            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              triggerOnce={true}
            >
              <h1 className="text-mainDarkColor text-[25px] sl:text-[40px] font-bold">
                Oladele Emmanuel
              </h1>
            </Fade>

            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              delay={400}
              triggerOnce={true}
            >
              <div className="flex flex-col gap-y-2 my-4 text-[17px] max-w-[600px] text-mainDarkColor">
                <p>
                  I am a software and AI/ML engineer who builds impactful web,
                  mobile, and desktop products. I enjoy turning complex product
                  requirements and emerging AI capabilities into reliable,
                  accessible experiences. My work spans frontend architecture,
                  API integration, cross-platform development, and production AI
                  systems, with a strong focus on quality and user experience.
                </p>
              </div>
            </Fade>
            <div className="grid sl:grid-cols-2 grid-cols-1 gap-[1rem]">
              {myDetails.map((myDetail, index) => (
                <Fade
                  key={myDetail.question}
                  direction={width < 800 ? "left" : "up"}
                  duration={1000}
                  triggerOnce={true}
                  delay={(index + 1) * 250}
                >
                  <div className="flex items-center gap-x-2 flex-wrap">
                    <p className="font-bold">{myDetail.question}:</p>
                    <p>{myDetail.answer}</p>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade
              direction={width < 800 ? "left" : "up"}
              duration={1000}
              triggerOnce={true}
              delay={1900}
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1ma4c3l7I7gqIqbJXsw2SuT07Xs2OpS6_"
                rel="noreferrer"
              >
                <button className="mt-4 max-w-fit px-4 py-2 bg-mainDarkColor text-white text-[15px] rounded-md">
                  Download CV
                </button>
              </a>
            </Fade>
          </div>
        </div>

        <Title text="Experience." topOfPage={false} />
        <div className="flex gap-y-6 gap-x-[3rem] items-start my-8 md:flex-row flex-col">
          <div className="flex overflow-x-scroll w-[100%] max-w-fit pb-3 flex-1 pt-2 horizontal-scrollbar min-w-fit">
            <div className="flex md:flex-col gap-2 md:items-start md:justify-start justify-center items-center min-w-fit">
              {companies.map((company) => (
                <button
                  type="button"
                  className={`flex flex-col experience cursor-pointer min-w-fit max-w-fit ${
                    company === experienceInView?.company
                      ? "experience-in-view"
                      : ""
                  }`}
                  onClick={() => selectCompany(company)}
                  key={company}
                >
                  <span>{company}</span>
                  <span className="custom-underline"></span>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full flex-1">
            <h1 className="text-mainDarkerColor text-[25px] sl:text-[40px] font-bold leading-[1]">
              {experienceInView?.company}
            </h1>
            <h2 className="text-mainDarkColor text-[1.3rem] sl:text-[2rem] font-bold my-3 leading-[1]">
              {experienceInView?.position}
            </h2>
            <p className="text-[1.1rem] text-mainDarkGrayColor">
              {experienceInView?.start_date}
              {experienceInView?.end_date && ` - ${experienceInView.end_date}`}
            </p>

            <h3 className="text-[1.1rem] font-bold text-mainDarkColor mt-4 mb-3">
              Highlights
            </h3>
            <div className="flex flex-col gap-y-4">
              {experienceInView?.works?.map((work) => (
                <p key={work}>
                  <BiPaperclip className="inline-block mr-2" />
                  {work}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Title
          text="Recognitions."
          subtitle="Humble Wins hehe"
          topOfPage={false}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {recognitions.map((recognition, index) => (
            <Fade
              key={recognition.title}
              direction="up"
              delay={index * 200}
              triggerOnce={true}
            >
              <article className="group h-full min-h-[290px] rounded-[10px] bg-white shadow-md overflow-hidden flex flex-col">
                <div className="h-[120px] bg-mainDarkColor text-white px-6 flex items-center justify-between relative overflow-hidden">
                  <span className="text-[52px] relative z-[1]">
                    {recognition.icon}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.2em] border border-white/50 rounded-full px-3 py-2 relative z-[1]">
                    {recognition.label}
                  </span>
                  <span className="absolute -right-8 -bottom-16 w-40 h-40 rounded-full border-[24px] border-white/10" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[22px] sm:text-[25px] leading-tight font-bold text-mainDarkColor">
                    {recognition.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-mainDarkGrayColor">
                    {recognition.description}
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-2 font-bold text-mainDarkColor">
                    Milestone <BsArrowUpRight />
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </div>

        <Title
          text="Skills."
          subtitle="Technologies I use to design, build, test, and ship products."
          topOfPage={false}
        />
        <ScrollContainers width={620} displayWidgets={true}>
          {skills.map((skill) => (
            <DisplayContainer key={skill.name} {...skill} />
          ))}
        </ScrollContainers>

        <Title
          text="Tools."
          subtitle="The core tools I use in my development workflow."
          topOfPage={false}
        />
        <ScrollContainers width={150} displayWidgets={false}>
          {tools.map((tool) => (
            <DisplayContainer key={tool.name} {...tool} />
          ))}
        </ScrollContainers>
      </section>
    </Container>
  );
};

export default About;
