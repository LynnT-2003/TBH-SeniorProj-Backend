"use client";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const ModelSummaryPage = ({ params }) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(params);
    const fetchModel = async () => {
      try {
        const response = await fetch(`/api/models/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch model");
        }
        const data = await response.json();
        console.log("Fetched data", data.model);
        setModel(data.model);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching model:", error);
        setLoading(false);
      }
    };

    fetchModel();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render model details
  return (
    <div>
      <h1>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid className="flex justify-center items-center" xs={12}>
            {model.ImgUrl}
          </Grid>
          <Grid className="flex justify-center items-center" xs={12}>
            {model.Brand}
            {model.Product_Name}
          </Grid>
          <Grid className="flex justify-center items-center" xs={12}>
            {model.Price}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.Weight}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.SOC}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.Display_Size}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.Antutu_Score}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.Main_Camera}
          </Grid>
          <Grid className="flex justify-center items-center" xs={4}>
            {model.p_to_p}
          </Grid>
          <Grid className="flex justify-center items-center" xs={12}>
            {model.Review_Link}
          </Grid>
          <Grid className="flex justify-center items-center" xs={12}>
            {model.MessengerUrl}
          </Grid>
        </Grid>
      </h1>
      {/* Render other model details here */}
    </div>
  );
};

export default ModelSummaryPage;
