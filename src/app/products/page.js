import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/[auth]/[...nextauth]/route";


const getProducts = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/products`,{
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
      return res.json();
    } catch (error) {
      console.log("Error loading products: ", error);
    }
};

async function Products() {
    const { products } = await getProducts();
    const displayProducts = products?.map(product => (
      <Link key = {product.id} href = {`/products/${product._id}`}>
         <div  className = "flex flex-col p-3 cursor-pointer bg-white shadow-lg rounded-md hover:scale-110 w-[20vw] h-[40vh] border-2 border-slate-400">
            <Image src = {product.image} alt = "Product image" className = "w-[50%] h-[60%] ml-auto mr-auto" width = {300} height = {400}/> 
            <hr className = "mt-auto mb-[5]"/>
            <p className = "font-semibold text-violet-700">{product.productName}</p>
        </div>
      </Link>
     
    ))
    return (
      <main className = "flex flex-col min-h-[100vh]">
        <Navbar />
        <div className = "pt-[4rem] flex flex-wrap justify-center gap-10 p-5 bg-gradient-to-r from-violet-400 to-indigo-600">
          {displayProducts}
        </div>
      </main>
    );
  }
  
  export default Products;