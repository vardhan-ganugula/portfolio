
import { TbSlashes } from "react-icons/tb";
import Hero from "../assets/model.png";
function AboutSection() {
  return (
    <div className="py-5 px-4 border-b-2 border-zinc-800/50 items-center">
      <div>
        <h4 className="section-title before:bg-violet-500">About</h4>
        <p className="section-para">
          <TbSlashes /> Who I am
        </p>
      </div>
      <div className="py-5 grid gap-5 md:grid-rows-1 grid-rows-1 grid-cols-1 md:grid-cols-3 px-2 justify-start">
        <div className="md:h-auto text-justify flex flex-col gap-3 text-white text-md md:col-span-2 order-2 md:order-1 ">
          <p>
            I&apos;m a dedicated Software Developer with a focus on web development,
            basic to moderate cloud technology knowledge, and a solid foundation
            in programming. I work with HTML, CSS, Python, and C. While my cloud
            expertise is at an intermediate level, I have a good grasp of
            essential cloud concepts, making me a versatile and valuable
            addition to any tech team.
          </p>
          <p>
            I specialize in crafting elegant and responsive web applications
            with a keen eye for detail in user interface design. My knowledge of
            HTML and CSS enables me to create visually appealing and
            user-friendly websites.
          </p>
          <p>
          In the cloud space, I possess a fundamental to intermediate understanding of cloud platforms and services, enabling me to deploy web applications and manage them in a cloud environment. My knowledge of Linux commands, network protocols, and system administration skills provides a strong foundation for cloud-based development.
          </p>
        </div>
        <div className="md:w-[350px] h-[300px] md:h-[350px] w-full overflow-hidden cursor-pointer rounded  order-1 md:order-2">
          <img
            src={Hero}
            alt="vardhan"
            className="object-cover rounded hover:scale-105 scale-100 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
