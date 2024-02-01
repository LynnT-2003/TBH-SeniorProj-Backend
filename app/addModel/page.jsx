"use client";
import { useState, useEffect } from "react";

export default function AddModel() {
  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [antutuScore, setAntutuScore] = useState("");
  const [dxoScore, setDxoScore] = useState("");
  const [battery, setBattery] = useState("");
  const [charging, setCharging] = useState("");
  const [displaySize, setDisplaySize] = useState("");
  const [displayType, setDisplayType] = useState("");
  // const [id, setId] = useState("");
  const [mainCamera, setMainCamera] = useState("");
  const [SOC, setSOC] = useState("");
  const [weight, setWeight] = useState("");
  const [RAM, setRAM] = useState("");
  const [storage, setStorage] = useState("");
  const [note, setNote] = useState("");
  const [availability, setAvailability] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brand) {
      alert("Please enter a brand name");
      return;
    }

    try {
      const res = await fetch(
        "https://tbh-chat-essentials.vercel.app/api/models",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Brand: brand,
            Product_Name: productName,
            Price: price,
            Antutu_Score: antutuScore,
            DXO_Score: dxoScore,
            Battery: battery,
            Charging_Rate: charging,
            Display_Size: displaySize,
            Display_Type: displayType,
            // ID: id,
            Main_Camera: mainCamera,
            SOC: SOC,
            Weight: weight,
            RAM: RAM,
            Storage: storage,
            Note: note,
            Available_in_local_market: availability,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Brand"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Price"
        />

        {/* Antutu Score */}
        <input
          onChange={(e) => setAntutuScore(Number(e.target.value))}
          value={antutuScore}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Antutu Score"
        />

        {/* DXO Score */}
        <input
          onChange={(e) => setDxoScore(Number(e.target.value))}
          value={dxoScore}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="DXO Score"
        />

        {/* Battery Capacity */}
        <input
          onChange={(e) => setBattery(Number(e.target.value))}
          value={battery}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Battery Capacity"
        />

        {/* Charging Rate */}
        <input
          onChange={(e) => setCharging(Number(e.target.value))}
          value={charging}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Charging Rate"
        />

        {/* Display Size */}
        <input
          onChange={(e) => setDisplaySize(Number(e.target.value))}
          value={displaySize}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Display Size"
        />

        {/* Display Type */}
        <input
          onChange={(e) => setDisplayType(e.target.value)}
          value={displayType}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Display Type"
        />

        {/* Main Camera */}
        <input
          onChange={(e) => setMainCamera(Number(e.target.value))}
          value={mainCamera}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Main Camera"
        />

        {/* SOC */}
        <input
          onChange={(e) => setSOC(e.target.value)}
          value={SOC}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="SOC"
        />

        {/* Weight */}
        <input
          onChange={(e) => setWeight(Number(e.target.value))}
          value={weight}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Weight"
        />

        {/* RAM */}
        <input
          onChange={(e) => setRAM(Number(e.target.value))}
          value={RAM}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="RAM"
        />

        {/* Storage */}
        <input
          onChange={(e) => setStorage(Number(e.target.value))}
          value={storage}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Storage"
        />

        {/* Note */}
        <input
          onChange={(e) => setNote(e.target.value)}
          value={note}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Note"
        />

        {/* Availability */}
        <select
          onChange={(e) => setAvailability(e.target.value === "true")}
          value={availability.toString()}
          className="border border-slate-500 px-8 py-2 w-fit"
          id="availability"
        >
          <option value="" disabled selected hidden>
            Available in Local Market?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Model
        </button>
      </form>


    </div>
  );
}
