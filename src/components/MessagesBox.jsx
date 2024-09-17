import React,{useRef} from "react";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useFirebase } from "../context/FirebaseContext";
import {toast} from 'react-toastify'
function MessagesBox({ message, email, username,id }) {
    const {deleteMsg} = useFirebase();
    const msgRef = useRef()
    function handleDelete(){
        deleteMsg(id)
        msgRef.current.style.display = 'none'
        toast.info('message deleted successfully')
    }
  return (
    <div ref={msgRef} className="msgContainer rounded bg-white text-black p-4 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="rounded-full bg-orange-300 px-3 py-1 inline-block text-white text-xs">
          {username}
        </div>
        <div className="font-bold my-5 capitalize">{message}</div>
      </div>
      <div id="msgBox" className="h-14 -mx-4 -mb-4 rounded-e flex justify-between items-center">
        <div className="text-xs mx-5 text-white">{email}</div>
        <div className="flex">
          <div className="p-3 rounded-full bg-white mr-2 cursor-pointer" onClick={handleDelete}>
            <RxCross1 size={15} />
          </div>
          <div className="p-3 rounded-full bg-white mr-2 cursor-pointer">
            <FaArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesBox;
