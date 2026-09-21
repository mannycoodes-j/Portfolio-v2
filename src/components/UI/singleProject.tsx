import React, { FC } from "react";
import { IProject } from "../../types/types";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

type singleProjectProps = IProject;

const SingleProject: FC<singleProjectProps> = (props) => {
  const isMobile = props.platform === "mobile";

  return (
    <article
      className={`hoverImg relative overflow-hidden shadow-md bg-mainDarkColor ${
        isMobile
          ? `mobile-project-card min-w-[270px] h-[470px] rounded-[28px] ${
              props.hasDeviceFrame
                ? "bg-transparent"
                : "border-[7px] border-mainDarkColor"
            }`
          : "min-w-[350px] h-[200px] rounded-[10px]"
      }`}
    >
      <div
        className={`w-full h-full ${
          props.hasDeviceFrame ? "bg-transparent" : "bg-mainGrayColor"
        }`}
      >
        {props.image ? (
          <img
            src={`./images/projects/${props.image}`}
            alt={`${props.name} project preview`}
            className={`w-full h-full ${
              isMobile
                ? props.hasDeviceFrame
                  ? "object-contain object-center"
                  : "object-cover object-top"
                : "object-cover object-center"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-mainDarkColor p-6 text-center">
            <span className="text-[13px] uppercase tracking-[0.22em] opacity-60 mb-3">
              {props.confidential ? "NDA Protected" : "Project Preview"}
            </span>
            <span className="text-[30px] sm:text-[38px] leading-tight font-bold tracking-[-0.04em]">
              {props.placeholderLabel || "OE"}
            </span>
          </div>
        )}
      </div>
      {isMobile && !props.hasDeviceFrame && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-mainDarkColor z-[1]" />
      )}
      <div className="absolute top-0 left-0 hoverText w-0 h-full overflow-hidden flex flex-col justify-end text-white font-bold p-6">
        <span className="text-[12px] uppercase tracking-[0.16em] mb-2 opacity-80">
          {props.platform || "web"}
          {props.year && ` • ${props.year}`}
          {props.role && ` • ${props.role}`}
          {props.confidential && " • confidential"}
        </span>
        <h2 className="text-[18px] font-bold">{props.name}</h2>
        <Link
          to={"/portfolio/" + props.id}
          className="px-3 py-2 bg-mainDarkColor max-w-fit rounded-md shadow-md flex items-center gap-x-4"
        >
          View Project
          <span>
            <BsSearch />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default SingleProject;
