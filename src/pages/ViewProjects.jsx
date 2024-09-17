import React from 'react'
import Dashboard from './Dashboard'
import {ProjectContainer} from '../components'
function ViewProjects() {
  return (
    <Dashboard title='View Projects' subtitle="all messages will shown here">
        <ProjectContainer  />
    </Dashboard>
  )
}

export default ViewProjects