import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useFirebase } from "../context/FirebaseContext";

function Sidebar() {
  let {sideBarOpen, setSidebar} = useFirebase();
  let isLargeScreen = window.innerWidth > 700 ? true : false;
  return (
    <>
      {sideBarOpen && <div className="fixed w-screen h-screen bg-white z-20 left-0 top-0">
        <div className="p-5 ">
          <RxCross1 size={30} className="cursor-pointer" onClick={()=>setSidebar(false)} />
        </div>
        <ul className="flex flex-col gap-3 p-5">
          <li>
            <NavLink to="/admin" className="mobileSideBar"  onClick={()=>setSidebar(false)}>
              <CiMail size={25} /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-project" className="mobileSideBar" onClick={()=>setSidebar(false)}>
              <MdOutlineAddBox size={25} /> Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-project" className="mobileSideBar" onClick={()=>setSidebar(false)}>
              <FaEye size={25} /> Project
            </NavLink>
          </li>
        </ul>
      </div>}
      {isLargeScreen && <div className="md:min-w-[250px] border-r-2 h-full border-white/10 text-white p-5">
        <aside>
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink to="/admin" className="sidebarNavlink">
                <CiMail size={25} /> Messages
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-project" className="sidebarNavlink">
                <MdOutlineAddBox size={25} /> Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/view-project" className="sidebarNavlink">
                <FaEye size={25} /> Project
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>}
    </>
  );
}

export default Sidebar;
