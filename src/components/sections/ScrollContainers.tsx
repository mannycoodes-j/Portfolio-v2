import React, { FC, ReactElement } from "react";

type scrollContainerProps = {
  children: ReactElement[];
  width: number;
  displayWidgets: boolean;
};

const ScrollContainers: FC<scrollContainerProps> = ({ children }) => {
  const container = React.useRef<any>(null);

  return (
    <>
      <div
        className="flex items-center gap-x-4 horizontal-scrollbar flex-nowrap overflow-x-scroll skills-container pb-4 transition duration-300"
        ref={container}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollContainers;
