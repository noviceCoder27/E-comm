import connectMongoDB from "@/libs/mongoDb";
import { NextResponse } from "next/server";
import Product from '@/models/product';

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

