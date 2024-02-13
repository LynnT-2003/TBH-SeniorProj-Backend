"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { Grid, Item } from "@mui/material";

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
    console.log("Note to update:", { newNote });
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

  const titleStyle = {
    fontFamily: "Roboto", // Replace with the desired font family
    fontSize: "2rem", // Adjust the font size as needed
    fontWeight: "bold",
    color: "#333", // Set the desired text color
  };

  return (
    <div>

      <datalist id="ram">
        <option value={4} />
        <option value={6} />
        <option value={8} />
        <option value={12} />
        <option value={16} />
      </datalist>

      <datalist id="storage">
        <option value={34}/>
        <option value={64}/>
        <option value={128}/>
        <option value={256}/>
        <option value={512}/>
      </datalist>

      <datalist id="display">
        <option value="IPS"/>
        <option value="OLED"/>
        <option value="PLS LED"/>
      </datalist>

      <datalist id="refreshRate">
        <option value={60}/>
        <option value={90}/>
        <option value={120}/>
        <option value={144}/>
      </datalist>

      <datalist id="shop">
        <option value="Kyaw Mobile Mawlamyine"/>
      </datalist>

      <h1 style={titleStyle} className="pt-0">Update an Entry</h1>
      <p className="pb-5 text-xs">API ID: {id}</p>
      
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Brand</b>
        </label>
        <input
          onChange={(e) => setNewBrand(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Brand"
          value={newBrand}
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Model</b>
        </label>
        <input
          onChange={(e) => setNewProductName(e.target.value)}
          value={newProductName}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Product Name"
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Note</b>
        </label>
          <input
            list="notes"
            className="border border-slate-500 px-8 py-2 mb-2"
            style={{ flex: 1 }} // Use flex: 1 to allow the input to take up remaining space
            onChange={(e) => setNewNote(e.target.value)}
            value={newNote}
          />
        <datalist id="notes">
          <option value="This is note 1" />
          <option value="This is note 2" />
          <option value="This is note 3" />
        </datalist>

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Available in Local Market?</b>
        </label>
        <input
          onChange={(e) => setNewAvailableInLocalMarket(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Available in Local Market"
          value={newAvailableInLocalMarket}
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Battery</b>
        </label>
        <input
          onChange={(e) => setNewBattery(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Battery"
          value={newBattery}
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Charging Rate</b>
        </label>
        <input
          onChange={(e) => setNewChargingRate(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Charging Rate"
          value={newChargingRate}
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Display Size</b>
        </label>
        <input
          onChange={(e) => setNewDisplaySize(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Display Size"
          value={newDisplaySize}
        />

        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Display Type</b>
        </label>
        <input
          list="display"
          onChange={(e) => setNewDisplayType(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Display Type"
          value={newDisplayType}
        />
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        
        {/* <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>ID</b>
        </label>
        <input
          onChange={(e) => setNewID(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="ID"
          value={newID}
        /> */}
        <form onSubmit={handleSubmit}>
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Main Camera</b>
        </label>
        <input
          onChange={(e) => setNewMainCamera(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Main Camera"
          value={newMainCamera}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Price</b>
        </label>
        <input
          onChange={(e) => setNewPrice(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Price"
          value={newPrice}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>SOC</b>
        </label>
        <input
          onChange={(e) => setNewSOC(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="SOC"
          value={newSOC}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Weight</b>
        </label>
        <input
          onChange={(e) => setNewWeight(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Weight"
          value={newWeight}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>RAM</b>
        </label>
        <input
          list="ram"
          onChange={(e) => setNewRam(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Ram"
          value={newRam}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Storage</b>
        </label>
        <input
          list="storage"
          onChange={(e) => setNewStorage(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Storage"
          value={newStorage}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>Antutu Score</b>
        </label>
        <input
          onChange={(e) => setNewAntutuScore(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="Antutu Score"
          value={newAntutuScore}
        />
        
        <label style={{ display: "flex", alignItems: "center", paddingBottom:"0.15em" }}>
          <b>DXO Score</b>
        </label>
        <input
          onChange={(e) => setNewDXOScore(e.target.value)}
          className="border border-slate-500 px-8 py-2 mb-2"
          type="text"
          placeholder="DXO Score"
          value={newDXOScore}
        /></form>
        </Grid>
      </Grid>
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-2">
        Update Model
      </button>
      </form>

      {/* <h1 style={titleStyle} className="pt-0">Update an Entry</h1>
      <p className="pb-5 text-xs">API ID: {id}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewProductName(e.target.value)}
          value={newProductName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />

        <label style={{ display: "flex", alignItems: "center" }}>
          Note:&nbsp;&nbsp;
          <input
            list="notes"
            className="border border-slate-500 px-8 py-2"
            style={{ flex: 1 }} // Use flex: 1 to allow the input to take up remaining space
            onChange={(e) => setNewNote(e.target.value)}
            value={newNote}
          />
        </label>
        <datalist id="notes">
          <option value="This is note 1" />
          <option value="This is note 2" />
          <option value="This is note 3" />
        </datalist>

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
      </form> */}
    </div>
  );
}
