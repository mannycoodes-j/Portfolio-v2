import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../../data/projects";

const siteUrl = "https://mannycodes-portfolio.vercel.app";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Oladele Emmanuel | Software & AI/ML Engineer",
    description:
      "Portfolio of Oladele Emmanuel, a software and AI/ML engineer building accessible web, mobile, desktop, multilingual AI, and Web3-enabled products.",
  },
  "/about": {
    title: "About Oladele Emmanuel | Software & AI/ML Engineer",
    description:
      "Learn about Oladele Emmanuel's software engineering, AI/ML, mobile, and Web3 experience, technical skills, hackathon wins, and education milestones.",
  },
  "/portfolio": {
    title: "Projects | Oladele Emmanuel",
    description:
      "Explore web, mobile, 3D, AI, and Web3-enabled products built by Oladele Emmanuel, including Verith, Vectra, GodConnect, and Hypa Intelligence.",
  },
  "/contact": {
    title: "Contact Oladele Emmanuel | Software Engineer",
    description:
      "Contact Oladele Emmanuel for software engineering, frontend, mobile, AI/ML, Web3 integration, product development, and technical collaboration.",
  },
};

const setMeta = (selector: string, attribute: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attribute, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectId = pathname.match(/^\/portfolio\/(\d+)$/)?.[1];
    const project = projectId
      ? projects
          .flatMap((category) => category.projects)
          .find((item) => item.id === Number(projectId))
      : undefined;
    const meta = project
      ? {
          title: `${project.name} | Oladele Emmanuel`,
          description: project.desc,
        }
      : pageMeta[pathname] || pageMeta["/"];
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
  }, [pathname]);

  return null;
};

export default Seo;
