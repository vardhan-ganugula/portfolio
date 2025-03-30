import React from "react";
import { FaGithub } from "react-icons/fa";
import ProjectTitle from "../components/ProjectTitle";
import Slider from "../components/Slider";
import ProjectDescription from "../components/ProjectDescription";
import ProjectTags from "../components/ProjectTags";
import ProjectFeedback from "../components/ProjectFeedback";
import { HiMiniGlobeEuropeAfrica } from "react-icons/hi2";
import StarRating from "../components/StarRating";

const AboutProject = () => {
  const tags = [
    "html",
    "css",
    "tailwind",
    "javascript",
    "html",
    "css",
    "tailwind",
    "javascript",
    "html",
    "css",
    "tailwind",
    "javascript",
  ];

  const updateStars = (value) => {
    console.log(value)
  }

  return (
    <section className="bg-zinc-950 min-h-screen w-full flex items-center justify-center">
      <div className="md:w-[1000px] p-0 pt-5 w-full border-1 h-full bg-zinc-950 border border-white/10">
        <ProjectTitle />
        <div className="w-full h-[400px] border relative mt-5">
          <Slider />
        </div>
        <div>
          <ProjectDescription />
        </div>
        <div>
          <ProjectTags tags={tags} />
        </div>
        <div className="px-5 py-2 flex justify-between pt-5 items-center overflow-hidden">
          <div className="flex gap-5 text-white">
            <a
              href="/"
              className="rounded bg-zinc-950 px-4 py-2 text-center text-white border border-white/20 flex items-center gap-2 justify-center "
            >
              <HiMiniGlobeEuropeAfrica size={20} /> <span>Demo</span>
            </a>
            <a
              href="/"
              className="rounded bg-zinc-950 px-4 py-2 text-center text-white border border-white/20 flex items-center gap-2 justify-center "
            >
              <FaGithub size={20} /> <span>Code</span>
            </a>
          </div>


          <div className="inline">
            <StarRating value={3.8} onChange={updateStars} />
          </div>


        </div>
        <div>
          <ProjectFeedback/>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
