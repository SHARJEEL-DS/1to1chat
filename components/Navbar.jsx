/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'
import {AuthContext} from'../context/AuthContext'
import {useRouter}  from 'next/router'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
 
  const router = useRouter();
  const signOut = () => {
    signOut(auth);
  };

  const logout = () => {
    // sessionStorage.removeItem('username');
    router.push('/auth/login')
  }
  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={ logout }>logout</button>
      </div>
    </div>
  )
}

export default Navbar