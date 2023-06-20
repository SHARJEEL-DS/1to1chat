// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import React, { useEffect, useState } from 'react'
import {useRouter}  from 'next/router'


function home() {
      
  
  // const [studentsData, setStudentsData] = useState([]);


  return (
    
    <>
    <div className='home'>
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
    </>
    
  )
}

export default home
