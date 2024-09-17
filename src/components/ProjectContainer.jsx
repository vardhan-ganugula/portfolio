import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/FirebaseContext'
import { useNavigate } from 'react-router-dom';
import ProjectBox from './ProjectBox';
function ProjectContainer() {
    const {getAllProjects} = useFirebase();
    const [projects, setProjects] = useState([])
    const navigate = useNavigate();
    useEffect(()=> {
        async function allProjects() {
            try {
              const projectData = await getAllProjects();
              setProjects(projectData);
            } catch (error) {
              console.error('Error fetching projects:', error);
            }
          }
          allProjects();
    }, [getAllProjects, navigate])
  return (
    <>
        <section className='p-5 w-full h-auto overflow-y-auto'>
            {(projects.length===0) && <div>
                no projects to display
            </div> }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {projects.map(proj => (
                    <ProjectBox projectname={proj.projectName} demolink={proj.demoLink} codelink={proj.codeLink} coverpic={proj.coverPic} key={proj.time} id={proj.id} />
                ))}
            </div>
        </section>
    
    </>
  )
}

export default ProjectContainer;