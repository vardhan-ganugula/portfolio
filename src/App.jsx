import React from "react";
import {HomePage, NotFound, ViewMessages, AddProjects, ViewProjects} from "./pages";
import {Route, Routes} from 'react-router-dom'
import Temp from "./pages/Temp";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/test" Component={Temp} />
        <Route path="*" Component={NotFound} />
        <Route path="/admin" Component={ViewMessages} />
        <Route path="/add-project" Component={AddProjects} />
        <Route path="/view-project" Component={ViewProjects} />
      </Routes>
    </>
  );
}

export default App;
