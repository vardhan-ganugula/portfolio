import React from 'react'
import Dashboard from './Dashboard'
import {MessageContainer} from '../components'
function ViewMessages() {
  return (
    <Dashboard title='Messages' subtitle="all messages will shown here">
        <MessageContainer  />
    </Dashboard>
  )
}

export default ViewMessages