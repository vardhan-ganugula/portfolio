import React, { useState } from "react";
import { useFirebase } from "../context/FirebaseContext";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

function AdminHeader() {
  const { sideBarOpen, setSidebar, logOut } = useFirebase();
  let isLargeScreen = window.innerWidth > 700 ? true : false;
  return (
    <>
      <nav className="z-10 w-full px-5 pt-4 pb-2 flex justify-between border-b-2 border-white/10 bg-zinc-900">
        {/* logo */}
        <div className="text-2xl text-white font-bold ">Dashboard</div>
        { !isLargeScreen &&<div className="text-white cursor-pointer" onClick={()=> setSidebar(true)}> <HiOutlineBars3CenterLeft size={30} /> </div>}
        <button className="bg-orange-500 rounded-sm px-4 py-2 text-sm text-white " onClick={logOut}>LogOut</button>
      </nav>
    </>
  );
}

export default AdminHeader;
