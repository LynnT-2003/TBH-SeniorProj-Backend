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
    Refresh_Rate,
    Resolution,
    Camera_Opinion,
    Performance_Opinion,
    Shop,
    Review_Link,
    p_to_p,
    MessengerUrl,
    ImgUrl,
  } = await request.json();

  console.log("Received Data:", {
    Available_in_local_market,
    Battery,
    Brand,
    Charging_Rate,
    Display_Size,
    Display_Type,
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
    Refresh_Rate,
    Resolution,
    Camera_Opinion,
    Performance_Opinion,
    Shop,
    Review_Link,
    p_to_p,
    MessengerUrl,
    ImgUrl,
  });
  await connectMongoDB();
  await Model.create({
    Available_in_local_market,
    Battery,
    Brand,
    Charging_Rate,
    Display_Size,
    Display_Type,
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
    Refresh_Rate,
    Resolution,
    Camera_Opinion,
    Performance_Opinion,
    Shop,
    Review_Link,
    p_to_p,
    MessengerUrl,
    ImgUrl,
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

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Model.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Model deleted successfully!" },
    { status: 200 }
  );
}
