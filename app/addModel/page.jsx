"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

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
  const [mainCamera, setMainCamera] = useState("");
  const [SOC, setSOC] = useState("");
  const [weight, setWeight] = useState("");
  const [RAM, setRAM] = useState("");
  const [storage, setStorage] = useState("");
  const [note, setNote] = useState("");
  const [availability, setAvailability] = useState("");

  const [refreshRate, setRefreshRate] = useState("");
  const [resolution, setResolution] = useState("");
  const [cameraOpinion, setCameraOpinion] = useState("");
  const [performanceOpinion, setPerformanceOpinion] = useState("");
  const [shop, setShop] = useState("");

  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

  const handleToggleAdditionalInputs = () => {
    setShowAdditionalInputs((prev) => !prev);
  };

  const displayTypes = ["OLED", "AMOLED", "Retina", "IPS", "LED"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", e);
    console.log(
      brand,
      productName,
      availability,
      price,
      antutuScore,
      dxoScore,
      battery,
      charging,
      displaySize,
      displayType,
      mainCamera,
      SOC,
      weight,
      RAM,
      storage,
      note,
      refreshRate,
      resolution,
      cameraOpinion,
      performanceOpinion,
      shop
    );

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
            // Brand: brand,
            // Product_Name: productName,
            // Price: price,
            // Antutu_Score: antutuScore,
            // DXO_Score: dxoScore,
            // Battery: battery,
            // Charging_Rate: charging,
            // Display_Size: displaySize,
            // Display_Type: displayType,
            // // ID: id,
            // Main_Camera: mainCamera,
            // SOC: SOC,
            // Weight: weight,
            // RAM: RAM,
            // Storage: storage,
            // Note: note,
            // Available_in_local_market: availability,
            Available_in_local_market: availability,
            Battery: battery,
            Brand: brand,
            Charging_Rate: charging,
            Display_Size: displaySize,
            Display_Type: displayType,
            Main_Camera: mainCamera,
            Price: price,
            Product_Name: productName,
            SOC: SOC,
            Weight: weight,
            Note: note,
            Ram: RAM,
            Storage: storage,
            Antutu_Score: antutuScore,
            DXO_Score: dxoScore,
            Refresh_Rate: refreshRate,
            Resolution: resolution,
            Camera_Opinion: cameraOpinion,
            Performance_Opinion: performanceOpinion,
            Shop: shop,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-xl">Create an Entry</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                type="text"
                label="Brand"
              />
            </div>
          </Grid>
          <Grid xs={8}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                type="text"
                label="Product Name"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setDxoScore(Number(e.target.value))}
                value={dxoScore}
                type="number"
                label="DXO Score"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setAntutuScore(Number(e.target.value))}
                value={antutuScore}
                type="number"
                label="Antutu Score"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price}
                type="number"
                label="Price /MMK"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setWeight(Number(e.target.value))}
                value={weight}
                type="number"
                label="Weight /g"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setStorage(Number(e.target.value))}
                value={storage}
                type="number"
                label="Storage /GB"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setRAM(Number(e.target.value))}
                value={RAM}
                type="number"
                label="RAM /GB"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setDisplaySize(Number(e.target.value))}
                value={displaySize}
                type="number"
                label="Display Size /in"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setDisplayType(e.target.value)}
                value={displayType}
                type="text"
                label="Display Type"
                InputProps={{
                  inputProps: {
                    list: "display-type-options",
                  },
                }}
              />
              <datalist id="display-type-options">
                {displayTypes.map((type, index) => (
                  <option key={index} value={type} />
                ))}
              </datalist>
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setResolution(e.target.value)}
                value={resolution}
                type="type"
                label="Resolution (w x h)"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setRefreshRate(Number(e.target.value))}
                value={refreshRate}
                type="number"
                label="Refresh Rate /Hz"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setBattery(Number(e.target.value))}
                value={battery}
                type="number"
                label="Battery Capacity /mAH"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setCharging(Number(e.target.value))}
                value={charging}
                type="number"
                label="Charging Rate /A"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setMainCamera(Number(e.target.value))}
                value={mainCamera}
                type="number"
                label="Main Camera /px"
              />
            </div>
          </Grid>
          <Grid xs={8}>
            <div>
              <TextField
                className="w-full"
                onChange={(e) => setSOC(e.target.value)}
                value={SOC}
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
                  value={availability.toString()}
                  onChange={(e) => setAvailability(Number(e.target.value))}
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
                onChange={(e) => setShop(e.target.value)}
                value={shop}
                type="text"
                label="Recommended Shop / Reseller"
              />
            </div>
          </Grid>

          {showAdditionalInputs && (
            <>
              <Grid xs={12}>
                <div>
                  <TextField
                    className="w-full"
                    onChange={(e) => setNote(e.target.value)}
                    value={note}
                    type="text"
                    label="Note:"
                  />
                </div>
              </Grid>
              <Grid xs={12}>
                <div>
                  <TextField
                    className="w-full"
                    onChange={(e) => setCameraOpinion(e.target.value)}
                    value={cameraOpinion}
                    type="text"
                    label="Camera Opinion"
                  />
                </div>
              </Grid>
              <Grid xs={12}>
                <div>
                  <TextField
                    className="w-full"
                    onChange={(e) => setPerformanceOpinion(e.target.value)}
                    value={performanceOpinion}
                    type="text"
                    label="Performance Opinion"
                  />
                </div>
              </Grid>
            </>
          )}
        </Grid>

        <Grid container>
          <Button
            variant="outlined"
            className="px-6"
            onClick={handleToggleAdditionalInputs}
          >
            {showAdditionalInputs ? "Hide Details" : "Add More Details"}
          </Button>
          <button
            // variant="outlined"
            type="submit"
            className="bg-green-600 font-bold text-white py-2 px-6 w-fit ml-6 rounded-md"
          >
            Create Model
          </button>
          <Grid xs={8}></Grid>
          <Grid xs={4}></Grid>
        </Grid>

        {/* Antutu Score */}

        {/* DXO Score */}

        {/* Battery Capacity */}

        {/* Charging Rate */}

        {/* Display Size */}

        {/* Display Type */}

        {/* Main Camera */}

        {/* SOC */}

        {/* Weight */}

        {/* RAM */}

        {/* Storage */}

        {/* Availability */}
        {/* <select
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
      </select> */}
      </form>
    </div>
  );
}
