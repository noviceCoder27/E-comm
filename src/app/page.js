import Navbar from "@/app/_components/Navbar";
import Image from 'next/image'


async function page() {

  return (
    <main className = "flex flex-col">
      <Navbar />
      <div>
        <Image 
        src = '/banner.jpg' 
        alt = "furniture" 
        fill
        />
        <div className = "absolute top-[10rem] left-14 z-10 text-white">
          <h2 className = "text-[4rem] font-bold">Experience the Joy of Shopping</h2>
          <p className = "text-[1.5rem] font-bold">From Click to Doorstep, We Deliver Happiness!”</p>
          <p className = "w-[40vw] min-w-[300px] mt-5 text-slate-200">Dive into a world where quality meets convenience. Explore our vast selection of products from the comfort of your home. With our user-friendly interface, finding what you need has never been easier. Whether it’s fashion, electronics, or groceries, we’ve got it all. Enjoy seamless shopping with secure payments and swift delivery. Remember, it’s not just shopping, it’s an experience. Your Marketplace, Your Choice - Discover, Shop, and Enjoy!”</p>
        </div>
      </div>
      
    </main>
  );
}

export default page;
