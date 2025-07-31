import React, { useState, useId } from "react";
import Dashboard from "./Dashboard";
import { useFirebase } from "../context/FirebaseContext";
import { FaFileImage } from "react-icons/fa";
import { toast } from "react-toastify";

function AddProjects() {
  const { submitProject } = useFirebase();
  const projNameId = useId();
  const demoId = useId();
  const codeId = useId();
  const coverId = useId();
  const [projName, setProjname] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [codeLink, setCodeLink] = useState("");
  const [fileName, setFileName] = useState("no file selected");
  const [coverPic, setCoverPic] = useState(null);
  const handleFilename = (e) => {
    setCoverPic(e.target.files[0])
    setFileName(e.target.files[0].name);
  };
  const handleAddProject = async(e) => {
    e.preventDefault();
   toast.promise(
    submitProject(projName, codeLink, demoLink, coverPic),
    {
      'error' : 'unknown error',
      'success' : 'uploaded successfully',
      'pending' : 'uploading'
    }
   )
  };
  return (
    <Dashboard title="Add Projects" subtitle="add new projects here">
      <div className="p-5">
        <form className="" autoComplete="false" onSubmit={handleAddProject}>
          <div className="font-semibold grid md:grid-cols-3 grid-cols-1 mb-5">
            <div className="flex flex-col gap-5 p-3">
              <div className="flex flex-col gap-2">
                <label htmlFor={projNameId} className="text-sm">
                  Project Name <sup className="text-red-500">*</sup>{" "}
                </label>
                <input
                  type="text"
                  value={projName}
                  onChange={(e) => setProjname(e.target.value)}
                  name="project_name"
                  id={projNameId}
                  className="form__input"
                  autoComplete="false"
                  placeholder="enter the project name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={demoId} className="text-sm">
                  Demo Link <sup className="text-red-500">*</sup>{" "}
                </label>
                <input
                  type="url"
                  value={demoLink}
                  onChange={(e) => setDemoLink(e.target.value)}
                  name="demo_link"
                  id={demoId}
                  className="form__input"
                  autoComplete="false"
                  placeholder="enter the demo link"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={codeId} className="text-sm">
                  Code Link <sup className="text-red-500">*</sup>{" "}
                </label>
                <input
                  type="url"
                  value={codeLink}
                  onChange={(e) => setCodeLink(e.target.value)}
                  name="code_link"
                  id={codeId}
                  className="form__input"
                  autoComplete="false"
                  placeholder="enter the demo link"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={codeId} className="text-sm">
                  Description <sup className="text-red-500">*</sup>{" "}
                </label>
                <textarea
                  type="url"
                  value={codeLink}
                  onChange={(e) => setCodeLink(e.target.value)}
                  name="code_link"
                  id={codeId}
                  className="form__input"
                  autoComplete="false"
                  placeholder="enter the demo link"
                  required
                ></textarea>
              </div>
            </div>

            <div className="md:w-[350px] w-full p-5 h-[350px]">
              <label
                className="border mt-5 border-dashed bg-white/10 w-full h-full rounded cursor-pointer flex flex-col items-center justify-center"
                htmlFor={coverId}
              >
                <div className="flex flex-col justify-center items-center gap-3">
                  <FaFileImage size={45} />
                  <div className="text-sm font-mono">{fileName}</div>
                </div>
              </label>
              <input
                type="file"
                name="thumbnail"
                id={coverId}
                className="hidden"
                required
                onChange={handleFilename}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 py-2 px-8 text-white ml-5"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
}

export default AddProjects;
