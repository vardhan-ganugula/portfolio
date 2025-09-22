import { useEffect, useState, useCallback } from 'react'
import ProjectBox from './ProjectBox';
import axiosInstance from '../utils/axios';

function ProjectContainer() {
    const [projects, setProjects] = useState([])
    const getAllProjects = useCallback(async () => {
      try {
        const resp = await axiosInstance.get('/projects');
        const response = await resp.data;
        setProjects(response.data)
      } catch (error) {
        console.log(error)
      }
    }, [setProjects]);

    useEffect(()=> {
      getAllProjects();
    }, [getAllProjects])
  return (
    <>
        <section className='p-5 w-full h-auto overflow-y-auto'>
            {(projects.length===0) && <div>
                no projects to display
            </div> }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {projects.map(proj => (
                    <ProjectBox projectname={proj.projectName} demolink={proj.demoLink} codelink={proj.githubLink} coverpic={proj.imageURL} key={proj._id} id={proj._id} />
                ))}
            </div>
        </section>
    
    </>
  )
}

export default ProjectContainer;