import React, { useEffect, useState } from 'react';
import { Login, AdminHeader, Sidebar, Loading} from '../components';
import { useFirebase } from '../context/FirebaseContext';

function Dashboard({children, title, subtitle}) {
  const { isUserLoggedIn} = useFirebase();
  const [logged, setLogged] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLogged(isUserLoggedIn)
    setLoading(false)
  }, [isUserLoggedIn])
  if(loading){
    return<Loading/>
  }
  if (!logged) {
    return <Login />;
  }else
  return (
    <div className='bg-zinc-900 h-screen flex flex-col'>
      <AdminHeader/>
      <div className='flex gap-5 flex-grow overflow-y-auto'>
        <Sidebar/>
        <div className='h-full p-5 text-white flex-grow overflow-y-auto'>
            <h4 className='font-bold text-2xl'>{title}</h4>
            <p className='text-zinc-600 text-sm lowercase mt-2'> <span className='text-white'>-</span> {subtitle}</p>
            <section className='overflow-y-auto'>
              {children}
            </section>
            <div className='p-5 w-full'></div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
