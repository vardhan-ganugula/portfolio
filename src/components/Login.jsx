import React, {useId, useState} from "react";
import {toast} from 'react-toastify'
import { useFirebase } from "../context/FirebaseContext";
function Login() {
    const {signIn} = useFirebase();
    const emailId = useId();
    const passwordId = useId();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleLogin(e){
        e.preventDefault();
        try{
            await signIn(email, password)
            toast.success('successfully login')
        }catch(e){
            toast.error('invalid credients')
        }
    }
  return (
    <>
      <main className="w-screen h-screen bg-white flex flex-col justify-center items-center">
        <div className="w-auto h-auto px-8 border shadow-lg py-14">
          <h2 className="font-bold text-3xl ">Welcome <span className="text-blue-600">Back!</span></h2>
          <p className="text-zinc-600 lowercase text-sm my-3">Enter the Dashboard</p>
          <div>
            <form className="font-semibold flex flex-col gap-5" autoComplete="false" onSubmit={handleLogin}>
                <div className="flex flex-col gap-2">
                    <label htmlFor={emailId} className="text-sm">Email <sup className="text-red-500">*</sup> </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id={emailId} className="border-2 rounded-md outline-blue-500 px-5 py-3 w-[300px] border-black/10 text-xs font-normal " autoComplete="false" placeholder="enter the mail address" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor={passwordId} className="text-sm">Password <sup className="text-red-500">*</sup> </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id={passwordId} className="border-2 rounded-md outline-blue-500 px-5 py-3 w-[300px] border-black/10 text-xs font-normal " autoComplete="false" placeholder="enter the password" />
                </div>
                <div>
                    <button type="submit" className="bg-blue-600 py-2 px-8 text-white">Login</button>
                </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
