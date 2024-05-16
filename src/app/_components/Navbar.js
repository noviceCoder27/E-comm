"use client"
import Image from "next/image"
import { signOut } from "next-auth/react";
import Link from "next/link"
import { useState } from "react"
import { useSession } from "next-auth/react";



const Navbar = () => {
  const [show,setShow] = useState(false);
  const {data} = useSession();
  return (
    <div className = "relative z-10 bg-white h-[10vh] flex justify-between px-10 items-center">
        <div className="flex items-center gap-2">
          <Image src = "/cart.png" alt = "Cart Image" width = {60} height = {60}/>
          <h1 className = "text-[2rem] font-bold text-orange-400">E-Comm</h1>
        </div>
        <div className="flex items-center gap-5">
          <span className = "hover:font-bold"><Link href = "/" >Home</Link></span>
          <span className = "hover:font-bold"><Link href = "/products">Products</Link></span>
           <div className = "relative cursor-pointer">
              <Image src = "/user.png" alt = "User Icon" width = {50} height = {50} onClick = {() => setShow(prev => !prev)}/>
              {show && <div className = "absolute left-[-8rem] w-40 p-5 bg-white shadow-lg shadow-slate-600 rounded-md">
                {data ? <button onClick={() => signOut()}>Logout</button>: <Link href = "/login">Login</Link> }
              </div>}
           </div>
        </div>
    </div>
  )
}

export default Navbar
