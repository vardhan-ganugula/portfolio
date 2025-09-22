import axiosInstance from "../utils/axios";
import { useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

function ProjectBox({ projectname, codelink, demolink, coverpic, id }) {
  const msgRef = useRef();
  const imgRef = useRef();
  const deleteProject = async(id) => {
    try {
      const resp = await axiosInstance.delete(`/projects/${id}`);
      if(resp.data.status === 'success'){
        if (msgRef.current) {
          msgRef.current.style.display = "none";
        }
        toast.info("project deleted successfully");
      }else{
        if (msgRef.current) {
          msgRef.current.style.display = "block";
        }
        toast.info("project deletion unsuccessfully");

      }
    } catch (error) {
      console.log(error)
    }
    
  }
  function handleDelete() {
    deleteProject(id);
    

  }

  function handleImg(){
    imgRef.current.style.opacity = 1;
  }
  return (
    <div
      ref={msgRef}
      className="msgContainer rounded bg-white text-black overflow-hidden flex flex-col justify-between "
    >
      <div className="relative">
        <div className="absolute top-5 left-5 rounded-full bg-orange-300 px-3 py-1 inline-block text-white text-xs">
          {projectname}
        </div>
        <div className="font-bold h-[180px] w-full img_thumb" >
          <img ref={imgRef} onLoad={handleImg}
            src={coverpic}
            alt={projectname}
            className="w-full h-full object-cover opacity-0 transition-opacity duration-200"
          />
        </div>
      </div>
      <div className="h-14 rounded-e flex justify-between items-center bg-indigo-400">
        <div className="text-xs mx-5 text-white flex gap-3">
          <a href={demolink} className="bg-orange-500 px-4 py-2 rounded">Demo</a>
          <a href={codelink} className="bg-black px-4 py-2 rounded">Code</a>
        </div>
        <div className="flex">
          <div
            className="p-3 rounded-full bg-white mr-2 cursor-pointer"
            onClick={handleDelete}
          >
            <RxCross1 size={15} className="text-red-500 font-extrabold" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
