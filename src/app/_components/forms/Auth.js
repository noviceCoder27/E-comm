"use client"
import {useRouter} from 'next/navigation'
import { useState } from 'react';
import { signIn } from "next-auth/react";

const Auth = ({login}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("user");
    
    const router = useRouter();
    const navigate = (e,route) => {
        e.preventDefault(e);
        router.push(route)
    }
    
    const userLogin = async (e) => {
        e.preventDefault();
        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
          if (res.error) {
            return;
          }
          router.replace("/");
        } catch (error) {
          console.log(error);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        if (!role || !email || !password) {
          return;
        }
        try {
          const res = await fetch("api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              role,
              email,
              password,
            }),
          });
          if (res.ok) {
            const form = e.target;
            form.reset();
            router.push("/");
          } else {
            console.log("User registration failed.");
          }
        } catch (error) {
          console.log("Error during registration: ", error);
        }
    };
    
    
    return (
        <form className = "mt-[10rem] w-[30vw] min-w-60" onSubmit = {login ? (e) => userLogin(e): (e) => register(e)}>
            <div className = "flex flex-col gap-2">
                <label className = "text-[1.5rem] font-semibold">Email:</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} className = "p-2 border-4 border-black rounded-xl" />
            </div>
            <div className = "flex flex-col gap-2 mt-5">
                <label className = "text-[1.5rem] font-semibold">Password:</label>
                <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" className = "p-2 border-4 border-black rounded-xl" />
            </div>
            {!login && <div className = "flex flex-col gap-2 mt-5">
                <label className = "text-[1.5rem] font-semibold">Select Role:</label>
                <select value = {role} onChange={(e) => setRole(e.target.value)} className = "p-2 border-4 border-black rounded-xl">
                    <option value = "user">User</option>
                    <option value = "admin">Admin</option>
                </select>
            </div>}
            {login ? <button className = "w-[30vw] min-w-60 my-5 font-semibold bg-[#656ED3] text-white py-2 rounded-lg">
                Sign in
            </button>:
            <button className = "w-[30vw] min-w-60 my-5 font-semibold bg-[#656ED3] text-white py-2 rounded-lg">
                Register
            </button>}
            {login ?
            <p className="mt-5 text-center">Don&apos;t have an account? <span className = "text-blue-500 cursor-pointer" onClick = {(e) => navigate(e,"/register")}>Register</span></p>
            :
            <p className="mt-5 text-center">Already have an account? <span className = "text-blue-500 cursor-pointer" onClick = {(e) => navigate(e,"/login")}>Login</span></p>
            }
        </form>
    )
}

export default Auth
