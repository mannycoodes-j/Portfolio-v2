import React from "react";
import { BiLink, BiPaperclip } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Container from "../components/sections/Container";
import Title from "../components/UI/Title";
import { projects } from "../context";
import { IProject } from "../types/types";
const SinglePortfolio = () => {
  const { id } = useParams();
  const allProjects: IProject[] = [];
  projects.forEach((project) => {
    project.projects.forEach((project) => {
      allProjects.push(project);
    });
  });
  const project = allProjects.find(
    (project) => project.id === parseInt(id as string)
  );
  const screenshots = project?.screenshots?.length
    ? project.screenshots
    : project?.image
    ? [project.image]
    : [];
  const isMobile = project?.platform === "mobile";

  return (
    <Container nextPageLink={`/portfolio`} nextPageText={`View other projects`}>
      <section className="w-full py-8">
        <div
          className={`flex gap-5 overflow-x-auto horizontal-scrollbar pb-4 ${
            isMobile ? "items-start" : "items-center"
          }`}
        >
          {screenshots.length === 0 && (
            <div className="w-full min-h-[360px] rounded-[10px] bg-mainDarkColor text-white flex flex-col items-center justify-center text-center p-8">
              <span className="text-[13px] uppercase tracking-[0.22em] opacity-60 mb-4">
                {project?.confidential ? "NDA Protected" : "Project Preview"}
              </span>
              <span className="text-[40px] sm:text-[64px] leading-tight font-bold tracking-[-0.05em]">
                {project?.placeholderLabel || project?.name}
              </span>
              {project?.confidential && (
                <p className="max-w-[520px] mt-5 text-white/70">
                  Visuals and product links are intentionally withheld to respect
                  client confidentiality.
                </p>
              )}
            </div>
          )}
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className={
                isMobile
                  ? `relative min-w-[250px] sm:min-w-[300px] h-[500px] sm:h-[600px] overflow-hidden ${
                      project?.hasDeviceFrame
                        ? "bg-transparent"
                        : "rounded-[30px] border-[8px] border-mainDarkColor bg-white"
                    }`
                  : "min-w-full rounded-[10px] overflow-hidden"
              }
            >
              {isMobile && !project?.hasDeviceFrame && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-mainDarkColor rounded-full z-[1]" />
              )}
              <img
                src={`../images/projects/${screenshot}`}
                alt={`${project?.name} screen ${index + 1}`}
                className={`w-full h-full ${
                  isMobile
                    ? project?.hasDeviceFrame
                      ? "object-contain object-center"
                      : "object-cover object-top"
                    : "object-contain object-center"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Title topOfPage={false} text={(project?.name as string) + "."} />
        <h3 className="mt-4 font-light text-[17px]">
          {project?.desc.split(".").map((desc, index) => {
            return (
              <p key={index} className="text-mainDarkColor">
                <span className="inline-block pr-2 align-middle">
                  <BiPaperclip />
                </span>
                {desc}
              </p>
            );
          })}
        </h3>
        <h3 className="font-bold text-[24px] mt-4">Tools.</h3>
        {project?.role && (
          <p className="mt-2 text-mainDarkColor">
            <span className="font-bold">My role:</span> {project.role}
          </p>
        )}
        <div className="mt-2 flex flex-wrap gap-4">
          {project?.tools ? (
            project?.tools?.map((tool, index) => {
              return (
                <span
                  className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
                  key={index}
                >
                  {tool}
                </span>
              );
            })
          ) : (
            <>Undisclosed</>
          )}
        </div>
        {(project?.links?.live ||
          project?.links?.github ||
          project?.links?.appStore ||
          project?.links?.playStore) && (
          <>
            <h3 className="mt-4 font-bold text-[24px] mb-2">Links.</h3>
            <div className="flex gap-y-2 gap-x-4 w-full sm:flex-row flex-col items-start">
          {project?.links?.live && (
            <a
              target={"_blank"}
              rel="noreferrer"
              href={project?.links?.live}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View project live{" "}
              <span className="inline-block ml-2 align-middle">
                <BiLink />
              </span>
            </a>
          )}
          {project?.links?.github && (
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://github.com/daniel-dunsin" + project?.links?.github}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View on github{" "}
              <span className="inline-block ml-2 align-middle">
                <BsGithub />
              </span>
            </a>
          )}
          {project?.links?.appStore && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.links.appStore}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View on App Store
            </a>
          )}
          {project?.links?.playStore && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.links.playStore}
              className="items-center px-4 py-2 rounded-md bg-mainDarkColor text-white cursor-pointer"
            >
              View on Google Play
            </a>
          )}
            </div>
          </>
        )}
      </section>
    </Container>
  );
};

export default SinglePortfolio;
