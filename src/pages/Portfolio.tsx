import React from "react";
import Container from "../components/sections/Container";
import FilterButtons from "../components/UI/FilterButtons";
import SingleProject from "../components/UI/singleProject";
import Title from "../components/UI/Title";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const { filteredProjects } = useGlobalContext();
  return (
    <Container
      nextPageLink="/contact"
      nextPageText="You love my works? Contact Me"
    >
      <>
        <Title
          text="My Projects."
          subtitle="Below is a list of my selected projects"
          topOfPage={true}
        />
        <FilterButtons />

        <div className="mt-4 mb-8">
          {filteredProjects.map((project, index: number) => {
            return (
              <section key={index}>
                <Title
                  topOfPage={false}
                  text={project.name + ` (${project.projects.length})`}
                  smallSize={true}
                />
                {project.projects.length > 0 ? (
                  <div className="flex items-center justify-start overflow-x-scroll horizontal-scroll gap-[1rem] pb-4">
                    {project.projects.map((project) => (
                      <SingleProject key={project.id} {...project} />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-6 bg-white rounded-[10px] p-5 sm:p-7 max-w-[680px] shadow-sm">
                    <div className="w-[82px] h-[150px] shrink-0 rounded-[18px] border-[5px] border-mainDarkColor bg-mainGrayColor p-2">
                      <div className="w-7 h-1 rounded-full bg-mainDarkColor mx-auto mb-4" />
                      <div className="w-full h-8 rounded bg-mainDarkColor/20 mb-2" />
                      <div className="w-4/5 h-2 rounded bg-mainDarkColor/20 mb-2" />
                      <div className="w-full h-2 rounded bg-mainDarkColor/20" />
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-mainDarkColor">
                        Mobile case studies are next.
                      </h3>
                      <p className="mt-2 text-mainDarkGrayColor max-w-[480px]">
                        Each app will be shown in a phone frame with its role,
                        platform, technology stack, and a gallery of real app
                        screens.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </>
    </Container>
  );
};

export default Portfolio;
