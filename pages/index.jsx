// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import React, { useEffect, useState } from 'react'
import {useRouter}  from 'next/router'

export default function Home() {
  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  
  const router = useRouter();
  // const [studentsData, setStudentsData] = useState([]);


  // const [user] = useAuthState(auth);
  // console.log(user);

  return (
    // <>
    //   <Head>
    //     <title>Boilerplate</title>
    //   </Head>

    //   <main>
    //     <h1 className="text-xl lg:text-6xl text-center my-10 uppercase tracking-[2px]">
    //       Hello {value}
    //     </h1>
    //     <div className="flex items-center justify-center gap-x-8">
    //       <button
    //         onClick={() => dispatch(incremented())}
    //         className="px-12 py-2 text-2xl text-white bg-black rounded-lg"
    //       >
    //         +
    //       </button>
    //       <button
    //         onClick={() => dispatch(decremented())}
    //         className="px-12 py-2 text-2xl text-white bg-black rounded-lg"
    //       >
    //         -
    //       </button>
    //     </div>
    //   </main>
    // </>
    <>
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
    </>
  );
}
