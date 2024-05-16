import connectMongoDB from "@/libs/mongoDb";
import { NextResponse } from "next/server";
import Product from '@/models/product';

export async function GET(request,{params}) {
    const {id} = params;
    await connectMongoDB();
    const product = await Product.findOne({_id: id});
    return NextResponse.json({ product });
}

export async function PUT(request,{params}) {
    const {id} = params;
    const { title,category,price,description } = await request.json();
    await connectMongoDB();
    console.log("Here", id);
    // await Product.findOneAndUpdate({_id: id},{productName: title, department: category,price,productDescription: description});
    return NextResponse.json({ msg: "Succesfully updated product" });
}