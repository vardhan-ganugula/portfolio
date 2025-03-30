import React from "react";

const ProjectTags = ({ tags }) => {
  return (
    <div className="p-2 flex flex-wrap gap-3 px-5 text-white">
      {tags.map((tag, idx) => (
        <div
          key={idx}
          className="bg-zinc-900 px-3 py-1 rounded-sm shadow uppercase cursor-pointer"
        >
            {tag}
        </div>
      ))}
    </div>
  );
};

export default ProjectTags;
