import connectMongoDB from "@/libs/mongodb";
import Model from "@/models/model";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newAvailable_in_local_market: Available_in_local_market,
    newBattery: Battery,
    newBrand: Brand,
    newCharging_Rate: Charging_Rate,
    newDisplay_Size: Display_Size,
    newDisplay_Type: Display_Type,
    newMain_Camera: Main_Camera,
    newPrice: Price,
    newProduct_Name: Product_Name,
    newSOC: SOC,
    newWeight: Weight,
    newNote: Note,
    newRam: Ram,
    newStorage: Storage,
    newAntutu_Score: Antutu_Score,
    newDXO_Score: DXO_Score,

    newRefresh_Rate: Refresh_Rate,
    newResolution: Resolution,
    newCamera_Opinion: Camera_Opinion,
    newPerformance_Opinion: Performance_Opinion,
    newShop: Shop,

    newReview_Link: Review_Link,
    newp_to_p: p_to_p,
  } = await request.json();
  await connectMongoDB();
  await Model.findByIdAndUpdate(id, {
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
  });
  return NextResponse.json(
    { message: "Model updated successfully!" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const model = await Model.findOne({ _id: id });
  return NextResponse.json({ model }, { status: 200 });
}
