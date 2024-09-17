import React, { useId, useState } from "react";
import { TbSlashes } from "react-icons/tb";
import { useFirebase } from "../context/FirebaseContext";
import { toast } from "react-toastify";
function ContectSection() {
  const emailId = useId();
  const msgId = useId();
  const nameId = useId();
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
    const {submitMessage} = useFirebase();
    function handleSubmit(e){
        e.preventDefault();
        submitMessage(name,email,msg);
        toast.success('successfully sent')
    }


  return (
    <div className="py-5 px-5 border-b-2 border-zinc-800/50 items-center overflow-hidden">
      <div>
        <h4 className="section-title before:bg-indigo-500 ">Contact</h4>
        <p className="section-para">
          <TbSlashes /> Submit this form or shoot me an email -
          gvardhan2004@gmail.com
        </p>
      </div>
      <div className="md:p-5 flex items-center justify-center overflow-hidden">
        <div className="flex-1 md:flex-grow-0">
          <form className="flex flex-col py-5 gap-5 h-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col text-zinc-500 gap-2">
              <label htmlFor={nameId}>Your Name</label>
              <input
                type="text"
                className="profile_contact_input"
                required
                id={nameId}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                name="username"
              />
            </div>

            <div className="flex flex-col text-zinc-500 gap-2">
              <label htmlFor={emailId}>Your Email</label>
              <input
                type="email"
                className="profile_contact_input"
                required
                id={emailId}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
              />
            </div>

            <div className="flex flex-col text-zinc-500 gap-2">
              <label htmlFor={msgId}>Your Message</label>
              <textarea
                id={msgId}
                cols="20"
                rows="7"
                className="hover:border-white/30 text-white p-3 bg-transparent rounded-sm border border-white/20 outline-none"
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                required
                name="message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-orange-400 text-white px-5 py-2 hover:bg-orange-500 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContectSection;
