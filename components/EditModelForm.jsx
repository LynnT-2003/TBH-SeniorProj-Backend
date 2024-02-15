"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

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
  Main_Camera,
  Price,
  SOC,
  Weight,
  Ram,
  Storage,
  Antutu_Score,
  DXO_Score,
  Resolution,
  Refresh_Rate,
  Camera_Opinion,
  Performance_Opinion,
  Shop,
}) {
  const [newProductName, setNewProductName] = useState(Product_Name);
  const [newNote, setNewNote] = useState(Note);
  const [newBattery, setNewBattery] = useState(Battery);
  const [newBrand, setNewBrand] = useState(Brand);
  const [newChargingRate, setNewChargingRate] = useState(Charging_Rate);
  const [newDisplaySize, setNewDisplaySize] = useState(Display_Size);
  const [newDisplayType, setNewDisplayType] = useState(Display_Type);
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

  const [newResolution, setNewResolution] = useState(Resolution);
  const [newRefreshRate, setNewRefreshRate] = useState(Refresh_Rate);
  const [newCameraOpinion, setNewCameraOpinion] = useState(Camera_Opinion);
  const [newPerformanceOpinion, setNewPerformanceOpinion] =
    useState(Performance_Opinion);
  const [newShop, setNewShop] = useState(Shop);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("To update:", { newProductName });
    console.log("Note to update:", { newNote });
    console.log(
      newProductName,
      newBattery,
      newBrand,
      newChargingRate,
      newDisplaySize,
      newDisplayType,
      newMainCamera,
      newPrice,
      newSOC,
      newWeight,
      newRam,
      newStorage,
      newAntutuScore,
      newDXOScore,
      newAvailableInLocalMarket,
      newResolution,
      newRefreshRate,
      newCameraOpinion,
      newPerformanceOpinion,
      newShop
    );
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

            newRefreshRate: newRefreshRate,
            newResolution: newResolution,
            newCameraOpinion: newCameraOpinion,
            newPerformanceOpinion: newPerformanceOpinion,
            newShop: newShop,
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

  useEffect(() => {
    console.log(
      newProductName,
      newBattery,
      newBrand,
      newChargingRate,
      newDisplaySize,
      newDisplayType,
      newMainCamera,
      newPrice,
      newSOC,
      newWeight,
      newRam,
      newStorage,
      newAntutuScore,
      newDXOScore,
      newAvailableInLocalMarket,
      newResolution,
      newRefreshRate,
      newCameraOpinion,
      newPerformanceOpinion,
      newShop
    );
  }, []);

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
        <option value={34} />
        <option value={64} />
        <option value={128} />
        <option value={256} />
        <option value={512} />
      </datalist>

      <datalist id="display">
        <option value="IPS" />
        <option value="OLED" />
        <option value="PLS LED" />
      </datalist>

      <datalist id="refreshRate">
        <option value={60} />
        <option value={90} />
        <option value={120} />
        <option value={144} />
      </datalist>

      <datalist id="shop">
        <option value="Kyaw Mobile Mawlamyine" />
      </datalist>

      <h1 style={titleStyle} className="pt-0">
        Update an Entry
      </h1>
      <p className="pb-5 text-xs">API ID: {id}</p>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewBrand(e.target.value)}
                value={newBrand}
                type="text"
                label="Brand"
              />
            </div>
          </Grid>
          <Grid xs={8}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewProductName(e.target.value)}
                value={newProductName}
                type="text"
                label="Product Name"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewDXOScore(Number(e.target.value))}
                value={newDXOScore}
                type="number"
                label="DXO Score"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewAntutuScore(Number(e.target.value))}
                value={newAntutuScore}
                type="number"
                label="Antutu Score"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewPrice(Number(e.target.value))}
                value={newPrice}
                type="number"
                label="Price /MMK"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewWeight(Number(e.target.value))}
                value={newWeight}
                type="number"
                label="Weight /g"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewStorage(Number(e.target.value))}
                value={newStorage}
                type="number"
                label="Storage /GB"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewRam(Number(e.target.value))}
                value={newRam}
                type="number"
                label="RAM /GB"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewDisplaySize(Number(e.target.value))}
                value={newDisplaySize}
                type="number"
                label="Display Size /in"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewDisplayType(e.target.value)}
                value={newDisplayType}
                type="text"
                label="Display Type"
                InputProps={{
                  inputProps: {
                    list: "display",
                  },
                }}
              />
              {/* <datalist id="display-type-options">
                {displayTypes.map((type, index) => (
                  <option key={index} value={type} />
                ))}
              </datalist> */}
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewResolution(e.target.value)}
                value={newResolution}
                type="type"
                label="Resolution (w x h)"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewRefreshRate(Number(e.target.value))}
                value={newRefreshRate}
                type="number"
                label="Refresh Rate /Hz"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewBattery(Number(e.target.value))}
                value={newBattery}
                type="number"
                label="Battery Capacity /mAH"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewChargingRate(Number(e.target.value))}
                value={newChargingRate}
                type="number"
                label="Charging Rate /A"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewMainCamera(Number(e.target.value))}
                value={newMainCamera}
                type="number"
                label="Main Camera /px"
              />
            </div>
          </Grid>
          <Grid xs={8}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewSOC(e.target.value)}
                value={newSOC}
                type="text"
                label="SOC (System on a Chip)"
              />
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <FormControl variant="outlined" className="w-full">
                <InputLabel id="availability-label">
                  Available in Local Market?
                </InputLabel>
                <Select
                  labelId="availability-label"
                  id="availability"
                  value={newAvailableInLocalMarket.toString()}
                  onChange={(e) =>
                    setNewAvailableInLocalMarket(Number(e.target.value))
                  }
                  label="Available in Local Market?"
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="0">No</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewShop(e.target.value)}
                value={newShop}
                type="text"
                label="Recommended Shop / Reseller"
              />
            </div>
          </Grid>
          <Grid xs={12}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewNote(e.target.value)}
                value={newNote}
                type="text"
                label="Note:"
              />
            </div>
          </Grid>
          <Grid xs={12}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewCameraOpinion(e.target.value)}
                value={newCameraOpinion}
                type="text"
                label="Camera Opinion"
              />
            </div>
          </Grid>
          <Grid xs={12}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setNewPerformanceOpinion(e.target.value)}
                value={newPerformanceOpinion}
                type="text"
                label="Performance Opinion"
              />
            </div>
          </Grid>
        </Grid>
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-2"
        >
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
