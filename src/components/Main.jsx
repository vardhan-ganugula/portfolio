import React,{Suspense} from "react";
import {HeroPage, ExperienceSection, AboutSection,ContectSection} from "./";
const WorkSection = React.lazy(()=> import("./WorkPage"))
function Main() {
  return (
    <main className="pt-20 lg:px-[100px] px-3 py-5">
      <div id="home" className="m-t-[50px]">
        <HeroPage/>
      </div>
      <div id="experience" className="py-5">
        <ExperienceSection/>
      </div>
      <div id="about" className="py-5">
        <AboutSection/>
      </div>
      <div id="work" className="py-5">
        <Suspense fallback={<div className="w-[350px] h-[350px]"> Loading </div> }>
          <WorkSection/>
        </Suspense>
      </div>
      <div id="contact" className="">
        <ContectSection/>
      </div>
    </main>
  );
}

// {isLoading && <div className="w-[350px] h-[350px]"> <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading" className="w-full h-full object-contain" />  </div> }
export default Main;
