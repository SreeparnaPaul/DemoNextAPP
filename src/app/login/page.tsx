"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function LoginPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin=async()=>{

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-black text-2xl">
                Login
            </h1>
            <hr/>
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
            focus:outline-none focus:border-gray-600" onClick={onLogin}>Login here</button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
}