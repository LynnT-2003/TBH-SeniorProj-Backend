import mongoose, { Schema } from "mongoose";

const modelSchema = new Schema(
  {
    Available_in_local_market: Number,
    Battery: Number,
    Brand: String,
    Charging_Rate: Number,
    Display_Size: Number,
    Display_Type: String,
    ID: Number,
    Main_Camera: Number,
    Price: Number,
    Product_Name: String,
    SOC: String,
    Weight: Number,
    Note: String,
    Ram: Number,
    Storage: Number,
    Antutu_Score: Number,
    DXO_Score: Number,
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.models.Model || mongoose.model("Model", modelSchema);

export default Model;
