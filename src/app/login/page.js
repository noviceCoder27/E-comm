"use client"
import Image from "next/image"
import Navbar from "../_components/Navbar"
import Auth from "../_components/forms/Auth"


const page = () => {

  
  return (
    <main className = "flex flex-col min-h-[100vh]">
      <Navbar />
      <div className = "flex flex-grow border-t-2 border-blue-300">
        <div className = "w-[70%] flex flex-col items-center">
          <Auth login = {true}/>
        </div>
        <div className = "bg-[#AFB3FF] w-[30%] relative">
          <Image src = "/laptop.png" alt = "Laptop image" width = {500} height = {600} className = "absolute left-[-10rem]"/>
        </div>
      </div>
    </main>
  )
}

export default page
