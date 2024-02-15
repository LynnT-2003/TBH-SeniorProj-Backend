const mongoose = require("mongoose");
// delete mongoose.connection.models["Model"];
const modelSchema = new mongoose.Schema(
  {
    Available_in_local_market: { type: Number, required: true },
    Battery: { type: Number, required: true },
    Brand: { type: String, required: true },
    Charging_Rate: { type: Number, required: true },
    Display_Size: { type: Number, required: true },
    Display_Type: { type: String, required: true },
    Main_Camera: { type: Number, required: true },
    Price: { type: Number, required: true },
    Product_Name: { type: String, required: true },
    SOC: { type: String, required: true },
    Weight: { type: Number, required: true },
    Note: String,
    Ram: { type: Number, required: true },
    Storage: { type: Number, required: true },
    Antutu_Score: Number,
    DXO_Score: Number,
    Refresh_Rate: String,
    Resolution: String,
    Camera_Opinion: String,
    Performance_Opinion: String,
    Shop: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.models.Model || mongoose.model("Model", modelSchema);

export default Model;
