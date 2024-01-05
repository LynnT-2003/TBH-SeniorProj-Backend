import connectMongoDB from "@/libs/mongodb";
import Model from "@/models/model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    Available_in_local_market,
    Battery,
    Brand,
    Charging_Rate,
    Display_Size,
    Display_Type,
    ID,
    Main_Camera,
    Price,
    Product_Name,
    SOC,
    Weight,
    Note,
    Ram,
    Storage,
    Antutu_Score,
    DXO_Score,
  } = await request.json();
  await connectMongoDB();
  await Model.create({
    Available_in_local_market,
    Battery,
    Brand,
    Charging_Rate,
    Display_Size,
    Display_Type,
    ID,
    Main_Camera,
    Price,
    Product_Name,
    SOC,
    Weight,
    Note,
    Ram,
    Storage,
    Antutu_Score,
    DXO_Score,
  });
  return NextResponse.json(
    { message: "Model created successfully!" },
    { status: 200 }
  );
}

export async function GET() {
  await connectMongoDB();
  const models = await Model.find();
  return NextResponse.json(models);
}
