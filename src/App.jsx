import React from "react";
import {HomePage, NotFound, ViewMessages, AddProjects, ViewProjects,Pingpage} from "./pages";
import {Route, Routes} from 'react-router-dom'
import AboutProject from "./pages/AboutProject";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="*" Component={NotFound} />
        <Route path="/admin" Component={ViewMessages} />
        <Route path="/add-project" Component={AddProjects} />
        <Route path="/view-project" Component={ViewProjects} />
        <Route path="/ping" Component={Pingpage} />
        <Route path="/project/:id" Component={AboutProject} />
        <Route path="/ping/:url" Component={Pingpage} />
      </Routes>
    </>
  );
}

export default App;
