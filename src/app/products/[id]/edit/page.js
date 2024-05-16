import Navbar from "@/app/_components/Navbar"
import EditProduct from "@/app/_components/forms/EditProduct"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../api/[auth]/[...nextauth]/route";
import { getProductDetails } from "../page";


const page = async ({params}) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  const {id} = params;
  const {product} = await getProductDetails(id);
  
  return (
    <main className = "flex flex-col min-h-[100vh]">
        <Navbar />
        <div className = "flex-grow p-5 text-white bg-gradient-to-r from-gray-800 to-gray-900">
            <h3 className = "mt-10 ml-10 text-[2rem]">Edit Product Details</h3>
            <EditProduct productDetails = {product} />
        </div>
    </main>
  )
}

export default page
