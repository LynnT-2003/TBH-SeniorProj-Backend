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
    newID: ID,
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
  } = await request.json();
  await connectMongoDB();
  await Model.findByIdAndUpdate(id, {
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
    { message: "Model updated successfully!" },
    { status: 200 }
  );
}

// import connectMongoDB from "@/libs/mongodb";
// import Model from "@/models/model";
// import { NextResponse } from "next/server";

// async function updateModelInDatabase(id, updatedFields) {
//   try {
//     await Model.findByIdAndUpdate(id, updatedFields);
//   } catch (error) {
//     // Handle database update error
//     console.error("Error updating model in the database:", error);
//     throw new Error("Failed to update model in the database");
//   }
// }

// export async function PUT(request, { params }) {
//   const { id } = params;
//   const updatedFields = await request.json();

//   try {
//     await connectMongoDB();
//     await updateModelInDatabase(id, updatedFields);

//     return NextResponse.json(
//       { message: "Model updated successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     // Handle any unexpected errors
//     console.error("Unexpected error:", error);
//     return NextResponse.json(
//       { message: "Failed to update model." },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const model = await Model.findOne({ _id: id });
  return NextResponse.json({ message: model }, { status: 200 });
}
