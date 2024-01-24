"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditModelForm({
  id,
  Product_Name,
  Note,
  Available_in_local_market,
  Battery,
  Brand,
  Charging_Rate,
  Display_Size,
  Display_Type,
  ID,
  Main_Camera,
  Price,
  SOC,
  Weight,
  Ram,
  Storage,
  Antutu_Score,
  DXO_Score,
}) {
  const [newProductName, setNewProductName] = useState(Product_Name);
  const [newNote, setNewNote] = useState(Note);
  const [newBattery, setNewBattery] = useState(Battery);
  const [newBrand, setNewBrand] = useState(Brand);
  const [newChargingRate, setNewChargingRate] = useState(Charging_Rate);
  const [newDisplaySize, setNewDisplaySize] = useState(Display_Size);
  const [newDisplayType, setNewDisplayType] = useState(Display_Type);
  const [newID, setNewID] = useState(ID);
  const [newMainCamera, setNewMainCamera] = useState(Main_Camera);
  const [newPrice, setNewPrice] = useState(Price);
  const [newSOC, setNewSOC] = useState(SOC);
  const [newWeight, setNewWeight] = useState(Weight);
  const [newRam, setNewRam] = useState(Ram);
  const [newStorage, setNewStorage] = useState(Storage);
  const [newAntutuScore, setNewAntutuScore] = useState(Antutu_Score);
  const [newDXOScore, setNewDXOScore] = useState(DXO_Score);
  const [newAvailableInLocalMarket, setNewAvailableInLocalMarket] = useState(
    Available_in_local_market
  );

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("To update:", { newProductName });
    try {
      const res = await fetch(
        `https://tbh-chat-essentials.vercel.app/api/models/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newAvailable_in_local_market: newAvailableInLocalMarket,
            newBattery: newBattery,
            newBrand: newBrand,
            newCharging_Rate: newChargingRate,
            newDisplay_Size: newDisplaySize,
            newDisplay_Type: newDisplayType,
            newID: newID,
            newMain_Camera: newMainCamera,
            newPrice: newPrice,
            newProduct_Name: newProductName,
            newSOC: newSOC,
            newWeight: newWeight,
            newNote: newNote,
            newRam: newRam,
            newStorage: newStorage,
            newAntutu_Score: newAntutuScore,
            newDXO_Score: newDXOScore,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to Update Model.");
      } else {
        console.log("No error in updating model");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(newProductName);
  }, [newProductName]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewProductName(e.target.value)}
          value={newProductName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setNewNote(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Model Description"
          value={newNote}
        />
        <input
          onChange={(e) => setNewAvailableInLocalMarket(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Available in Local Market"
          value={newAvailableInLocalMarket}
        />
        <input
          onChange={(e) => setNewBattery(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Battery"
          value={newBattery}
        />
        <input
          onChange={(e) => setNewBrand(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Brand"
          value={newBrand}
        />
        <input
          onChange={(e) => setNewChargingRate(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Charging Rate"
          value={newChargingRate}
        />
        <input
          onChange={(e) => setNewDisplaySize(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Display Size"
          value={newDisplaySize}
        />
        <input
          onChange={(e) => setNewDisplayType(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Display Type"
          value={newDisplayType}
        />
        <input
          onChange={(e) => setNewID(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="ID"
          value={newID}
        />
        <input
          onChange={(e) => setNewMainCamera(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Main Camera"
          value={newMainCamera}
        />
        <input
          onChange={(e) => setNewPrice(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Price"
          value={newPrice}
        />
        <input
          onChange={(e) => setNewSOC(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="SOC"
          value={newSOC}
        />
        <input
          onChange={(e) => setNewWeight(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Weight"
          value={newWeight}
        />
        <input
          onChange={(e) => setNewRam(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Ram"
          value={newRam}
        />
        <input
          onChange={(e) => setNewStorage(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Storage"
          value={newStorage}
        />
        <input
          onChange={(e) => setNewAntutuScore(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Antutu Score"
          value={newAntutuScore}
        />
        <input
          onChange={(e) => setNewDXOScore(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="DXO Score"
          value={newDXOScore}
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Model
        </button>
      </form>
    </div>
  );
}
