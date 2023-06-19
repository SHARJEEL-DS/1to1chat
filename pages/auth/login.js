import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
// import React, { useState } from 'react'
// import { database } from '../../firebase';
import {useRouter} from 'next/router'
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [err, setErr] = useState(false);
  // const navigate = useNavigate();
  const router = useRouter();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
        router.push('/');
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">sharjeel Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You dont have an account?<Link href={"/auth/register"}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
