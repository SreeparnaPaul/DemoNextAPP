"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function SignupPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:""
    })

    const onSignup=async()=>{

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-black text-2xl">
                Signup
            </h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 
            focus:outline-none focus:border-gray-600" id="username" placeholder="username"
                type="text" 
                value={user.username} 
                onChange={(e)=>setUser({...user,username:e.target.value})}/>
             <label htmlFor="email">Email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 
            focus:outline-none focus:border-gray-600" id="email" placeholder="email"
                type="email" 
                value={user.email} 
                onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 
            focus:outline-none focus:border-gray-600" id="password" placeholder="password"
                type="password" 
                value={user.password} 
                onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button className="p-2 border border-gray-300 rounded-lg mb-4 
            focus:outline-none focus:border-gray-600" onClick={onSignup}>Signup here</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}