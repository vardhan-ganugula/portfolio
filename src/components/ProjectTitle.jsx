import React from "react";

const ProjectTitle = () => {
  return (
    <div className="w-full relative before:content[''] before:absolute before:w-screen before:h-full before:border before:border-white/10 before:-translate-x-1/2 before:left-1/2 before:top-0">
      <h1 className="text-slate-200 relative px-5 py-5 text-3xl border text-center">
        <span className="w-2 h-2 bg-white absolute -left-2 -top-2 "></span>
        <span className="w-2 h-2 bg-white absolute -bottom-2 -left-2 "></span>
        <span className="w-2 h-2 bg-white absolute -bottom-2 -right-2 "></span>
        <span className="w-2 h-2 bg-white absolute -right-2 -top-2 "></span>
        FOXY URL shortner
      </h1>
    </div>
  );
};

export default React.memo(ProjectTitle);
