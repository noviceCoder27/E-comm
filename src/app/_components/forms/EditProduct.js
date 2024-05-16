"use client"
import { useParams } from "next/navigation";
import { useState } from "react"

const EditProduct = ({productDetails}) => {
    const {id} = useParams();
    const [details,setDetails] = useState({
        title: productDetails?.productName, 
        description: productDetails?.productDescription,
        price: productDetails.price, 
        category: productDetails.department});

        const editProduct = async (e) => {
            e.preventDefault();
            try {
              const res = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
              });
              if (res.ok) {
                const form = e.target;
                form.reset();
                router.push(`api/products/${id}`);
              } else {
                console.log("Update failed.");
              }
            } catch (error) {
              console.log("Update failed: ", error);
            }
        };
        
        return (
            <form className="flex flex-col mt-5 ml-auto mr-auto space-y-4 text-black border-2 border-white w-[50%] p-5 rounded-lg">
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-white">Title:</label>
                    <input value = {details.title} onChange = {(e) => setDetails(prev => ({...prev,title: e.target.value}))}className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-white">Description:</label>
                    <textarea value = {details.description} onChange = {(e) => setDetails(prev => ({...prev,description: e.target.value}))}className="px-3 py-2 border border-gray-300 h-[100px] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-white">Category:</label>
                    <input value = {details.category} onChange = {(e) => setDetails(prev => ({...prev,category: e.target.value}))}className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-white">Price:</label>
                    <input value = {details.price} onChange = {(e) => setDetails(prev => ({...prev,price: e.target.value}))}className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button onClick = {editProduct} className = "p-2 ml-auto mr-auto bg-white rounded-lg w-fit hover:font-semibold">
                    Update Details
                </button>
            </form>
        )
}

export default EditProduct
