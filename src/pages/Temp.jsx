import React, { useState } from 'react'
import { useFirebase } from '../context/FirebaseContext'

function Temp() {
    const [projectName,setProjectName] = useState('')
    const [codeLink,setCodelink] = useState('')
    const [demoLink,setDemoLink] = useState('')
    const [coverPic, setCoverPic] = useState(null)
    const {submitProject} = useFirebase();
    function handleSubmit(e){
        e.preventDefault();
        submitProject(projectName, codeLink, demoLink, coverPic)
    }   
  return (
    <div className='bg-black'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={projectName} onChange={e=> setProjectName(e.target.value)} />
            <input type="text" value={codeLink} onChange={e=> setCodelink(e.target.value)} />
            <input type="text" value={demoLink} onChange={e=> setDemoLink(e.target.value)} />
            <input type="file" onChange={e=> setCoverPic(e.target.files[0])} />
            <button type="submit" className='text-white'>upload</button>
        </form>
    </div>
  )
}

export default Temp