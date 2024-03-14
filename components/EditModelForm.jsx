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
import { auth } from "@/libs/Firebase";

const allowedEmails = ["aungchammyae95@gmail.com", "allowed@example.com"];

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
  Review_Link,
  p_to_p,
}) {
  // const userEmail = auth.currentUser.email;

  const [userEmail, setUserEmail] = useState(null);
  const [isAllowedUser, setIsAllowedUser] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userEmail = user.email;
        setUserEmail(userEmail);
        setIsAllowedUser(allowedEmails.includes(userEmail));
        console.log("User has logged in");
      } else {
        setUserEmail(null);
        setIsAllowedUser(false);
        console.log("User is logged out");
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  console.log("Logged in as:", userEmail);

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
  const [newRefresh_Rate, setNewRefresh_Rate] = useState(Refresh_Rate);
  const [newCamera_Opinion, setNewCamera_Opinion] = useState(Camera_Opinion);
  const [newPerformance_Opinion, setNewPerformance_Opinion] =
    useState(Performance_Opinion);
  const [newShop, setNewShop] = useState(Shop);

  const [newReview_Link, setNewReview_Link] = useState(Review_Link);
  const [newp_to_p, setNewp_to_p] = useState(p_to_p);

  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log("REFRESH RATE:", newRefresh_Rate, newRefresh_Rate.type);
    e.preventDefault();
    console.log("PUTTING...");
    console.log({
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
      newRefresh_Rate: Number(newRefresh_Rate),
      newResolution: newResolution,
      newCamera_Opinion: newCamera_Opinion,
      newPerformance_Opinion: newPerformance_Opinion,
      newShop: newShop,

      newReview_Link: newReview_Link,
      newp_to_p: newp_to_p,
    });
    try {
      const res = await fetch(
        `https://tbh-chat-essentials.vercel.app/api/models/${id}`,
        // `http://localhost:3000/api/models/${id}`,
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

            newRefresh_Rate: Number(newRefresh_Rate),
            newResolution: newResolution,
            newCamera_Opinion: newCamera_Opinion,
            newPerformance_Opinion: newPerformance_Opinion,
            newShop: newShop,

            newReview_Link: newReview_Link,
            newp_to_p: newp_to_p,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to Update Model.");
      } else {
        console.log("No error in updating model");
        router.push("/");
      }
    } catch (error) {
      console.log("ERROR IS HERE:", error.message);
    }
  };

  useEffect(() => {
    console.log(newReview_Link);
  }, [newReview_Link]);

  const titleStyle = {
    fontFamily: "Roboto", // Replace with the desired font family
    fontSize: "2rem", // Adjust the font size as needed
    fontWeight: "bold",
    color: "#333", // Set the desired text color
  };

  useEffect(() => {
    console.log({
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
      newRefresh_Rate: newRefresh_Rate,
      newResolution: newResolution,
      newCamera_Opinion: newCamera_Opinion,
      newPerformance_Opinion: newPerformance_Opinion,
      newShop: newShop,

      newReview_Link: newReview_Link,
      newp_to_p: p_to_p,
    });
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewRefresh_Rate(Number(e.target.value))}
                value={newRefresh_Rate}
                type="number"
                label="Refresh Rate /Hz"
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div>
              <TextField
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
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
                  disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewShop(e.target.value)}
                value={newShop}
                type="text"
                label="Recommended Shop / Reseller"
              />
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <TextField
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewp_to_p(Number(e.target.value))}
                value={newp_to_p}
                type="number"
                label="Price to Performance Score"
              />
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <TextField
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewReview_Link(e.target.value)}
                value={newReview_Link}
                type="text"
                label="Review Link"
              />
            </div>
          </Grid>
          <Grid xs={12}>
            <div>
              <TextField
                disabled={!isAllowedUser}
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
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewCamera_Opinion(e.target.value)}
                value={newCamera_Opinion}
                type="text"
                label="Camera Opinion"
              />
            </div>
          </Grid>
          <Grid xs={12}>
            <div>
              <TextField
                disabled={!isAllowedUser}
                className="w-full"
                onChange={(e) => setNewPerformance_Opinion(e.target.value)}
                value={newPerformance_Opinion}
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
    </div>
  );
}
