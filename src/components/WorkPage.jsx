import React, { lazy, Suspense, useEffect, useState } from "react";
import { TbSlashes } from "react-icons/tb";
import { useFirebase } from "../context/FirebaseContext";
function WorkPage() {
  let { getProjects } = useFirebase();
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [showLoadMore, setLoadMore] = useState(true)
  async function fetchProjects(){
    let projs = await getProjects();
    setLoadMore(projs.length == 5);
    setLoading(false)
    setProjects(prev => {
      const newProjects = projs.filter(proj => !prev.some(p => p.time === proj.time));
      return [...prev, ...newProjects];
    });
  }
  useEffect(() => {
    fetchProjects()
  }, []);
  return (
    <div className="py-5 px-5 border-b-2 border-zinc-800/50 items-center">
      <div>
        <h4 className="section-title before:bg-orange-500">Work</h4>
        <p className="section-para">
          <TbSlashes /> Check out some of my recent work
        </p>
      </div>
      <div className="py-5">
        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
          
          {projects.map((proj) => (
            <div className="w-[350px] h-[350px] bg-red-500 relative group overflow-hidden " key={proj.time}>
              <div className="w-full h-full">
                <img src={proj.coverPic} alt="portfolio picture" className="object-cover w-full h-full" />
              </div>
              <div className="absolute left-0 bg-yellow-300/50 w-full h-full flex flex-col items-center justify-center gap-9 bottom-[-100%] group-hover:bottom-0 transition-all duration-500">
                <h4 className="text-blue-600 text-2xl font-bold capitalize ">{proj.projectName}</h4>
                <div>
                  <a
                    href={proj.demoLink}
                    className="rounded-md px-3 py-2 text-white bg-sky-400 mr-5"
                  >
                    Demo
                  </a>
                  <a
                    href={proj.codeLink}
                    className="rounded-md px-3 py-2 text-white bg-black"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
          {isLoading && <div className="w-[350px] h-[350px]"> <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading" className="w-full h-full object-cover" />  </div> }
        </div>
        { (showLoadMore) && <button className="mx-auto bg-red-400 px-5 py-2 text-white mt-5 block" onClick={fetchProjects}>Load More</button>}
      </div>
    </div>
  );
}

export default WorkPage;
