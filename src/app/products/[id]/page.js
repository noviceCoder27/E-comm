import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/[auth]/[...nextauth]/route";




export const getProductDetails = async (id) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/products/${id}`,{
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

const page = async ({params}) => {
  const {id} = params;
  const {product} = await getProductDetails(id);
  return (
    <main className = "flex flex-col min-h-[100vh]">
      <Navbar />
      <div className = "flex flex-grow text-white bg-gradient-to-r from-gray-800 to-gray-900">
        {product && 
        <div className = "flex justify-center w-full gap-20 p-5 pt-[5rem]">
          <div className = "p-5 bg-orange-200 h-[70vh] flex">
            <Image src = {product.image} alt = "Product Image" className = "" width = {500} height = {700} />
          </div>
          
          <div className = "w-[50%]">
            <h3 className = "text-[3rem]">{product.productName}</h3>
            <p className = "text-[1.5rem] text-slate-300">{product.productDescription}</p>
            <div className = "flex items-center gap-5 mt-2">
              <p className = "font-semibold text-[1rem]">Category:</p>
              <span className = "px-8 py-2 font-semibold text-black bg-orange-200 rounded-xl">{product.department}</span>
            </div>
            <div className = "flex items-center gap-5 mt-24">
              <p className = "font-semibold text-[2rem]">Price:</p>
              <p className = "font-semibold text-[2rem] text-red-400">${product.price}</p>
            </div>
            <div className = "w-40 py-4 mt-6 text-center text-white bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600">
              <Link href = {`/products/${id}/edit`}>
                Edit Details
              </Link>
            </div>
          </div>
        </div>
        }
      </div>
    </main>
  )
}

export default page
