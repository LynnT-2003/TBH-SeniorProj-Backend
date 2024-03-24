"use client";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import CircularProgress from "@mui/joy/CircularProgress";

import { useContext } from "react";
import { LayoutProvider } from "@/libs/LayoutContext";
import LayoutContext from "@/libs/LayoutContext";

import Stack from "@mui/material/Stack";
import Gauge from "@mui/x-charts/Gauge";

const ModelSummaryPage = ({ params }) => {
  // const { showNavbar } = useContext(LayoutContext);

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
    // <LayoutProvider>
    <div className="relative flex items-center justify-center pt-8">
      {/* {showNavbar && <Navbar />} */}
      <h1>
        <Grid container justify="center" alignItems="center">
          <Grid className="flex justify-center items-center" xs={12}>
            <Image
              src={model.ImgUrl}
              alt={`${model.Brand} ${model.Product_Name} Image`}
              width={500}
              height={500}
              objectFit="cover"
            />
          </Grid>
          <Grid
            className="flex justify-center items-center font-poppins font-bold mt-8"
            xs={12}
            style={{ fontSize: 24 }}
          >
            {model.Brand}
            {model.Product_Name} {"("}
            {model.Ram}
            {"/"}
            {model.Storage}
            {")"}
          </Grid>
          <Grid
            className="flex justify-center items-center font-poppins font-bold mt-2 mb-8"
            xs={12}
            style={{ fontSize: 24 }}
          >
            <Image
              src="/price-icon.png"
              alt="Weight Icon"
              width={27}
              height={27}
              className="mr-2"
            />
            {model.Price} mmk
          </Grid>
          <Grid
            className="font-poppins font-bold relative flex justify-center items-center mb-12"
            xs={4}
            style={{ fontSize: 12 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <Image
                  src="/weight-icon.png"
                  alt="Weight Icon"
                  width={25}
                  height={25}
                  className="mb-1"
                />
              </div>
              <div>Weight: {model.Weight}g</div>
            </div>
          </Grid>

          <Grid
            className="font-poppins font-bold flex justify-center items-center mb-12"
            xs={4}
            style={{ fontSize: 12 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <Image
                  src="/soc-icon.png"
                  alt="SOC Icon"
                  width={25}
                  height={25}
                  className="mb-1"
                />
              </div>
              SOC: {model.SOC}
            </div>
          </Grid>

          <Grid
            className="font-poppins font-bold flex justify-center items-center mb-12"
            xs={4}
            style={{ fontSize: 12 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <Image
                  src="/display-icon.png"
                  alt="Display Icon"
                  width={25}
                  height={25}
                  className="mb-1"
                />
              </div>
              Display: {model.Display_Size}&quot; {model.Refresh_Rate}Hz
            </div>
          </Grid>

          <Grid
            className="font-poppins flex justify-center items-center"
            xs={4}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CircularProgress
                  determinate
                  value={Math.round((model.Antutu_Score / 2100000) * 100)}
                />
                <h1 className="font-poppins font-bold ml-2">
                  {Math.round((model.Antutu_Score / 2100000) * 100)}%
                </h1>
              </div>
              <div className="mt-1 mb-8">Performance</div>
            </div>
          </Grid>

          <Grid
            className="font-poppins flex justify-center items-center"
            xs={4}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CircularProgress
                  determinate
                  value={Math.round((model.DXO_Score / 158) * 100)}
                />
                <h1 className="font-poppins font-bold ml-2">
                  {Math.round((model.DXO_Score / 158) * 100)}%
                </h1>
              </div>
              <div className="mt-1 mb-8">Camera</div>
            </div>
          </Grid>

          <Grid
            className="font-poppins flex justify-center items-center"
            xs={4}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CircularProgress
                  determinate
                  value={Math.round((model.p_to_p / 1.6) * 100)}
                />
                <h1 className="font-poppins font-bold ml-2">
                  {Math.round((model.p_to_p / 1.6) * 100)}%
                </h1>
              </div>
              <div className="mt-1 mb-8">P to P</div>
            </div>
          </Grid>

          <Grid
            className="font-poppins font-bold flex justify-center items-center"
            xs={12}
          >
            {" "}
            {model.Review_Link}
          </Grid>

          <Grid
            className="font-poppins font-bold flex justify-center items-center"
            xs={12}
          >
            {" "}
            {model.MessengerUrl}
          </Grid>
        </Grid>

        {model.Review_Link ? (
          <Grid
            xs={12}
            style={{ backgroundColor: "#D9D9D9" }}
            className="font-poppins font-bold flex justify-center items-center py-4 mx-4"
            onClick={() => window.open(model.Review_Link, "_blank")}
          >
            <Image
              src="/youtube-icon.png"
              alt="YouTube Icon"
              width={25}
              height={25}
              className="mr-2"
            />
            <div>Watch the Review</div>
          </Grid>
        ) : (
          <Grid
            xs={12}
            style={{
              backgroundColor: "#D9D9D9",
              opacity: 0.5,
              pointerEvents: "none",
            }}
            className="font-poppins font-bold flex justify-center items-center py-4 mx-4"
          >
            <Image
              src="/youtube-icon.png"
              alt="YouTube Icon"
              width={25}
              height={25}
              className="mr-2"
            />
            <div>Watch the Review</div>
          </Grid>
        )}

        {model.MessengerUrl ? (
          <Grid
            xs={12}
            style={{ backgroundColor: "#D9D9D9" }}
            className="font-poppins font-bold flex justify-center items-center py-4 mx-4 mt-4"
            onClick={() => (window.location.href = model.MessengerUrl)}
          >
            <Image
              src="/messenger-icon.png"
              alt="Messenger Icon"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>Message the Seller</div>
          </Grid>
        ) : (
          <Grid
            xs={12}
            style={{
              backgroundColor: "#D9D9D9",
              opacity: 0.5,
              pointerEvents: "none",
            }}
            className="font-poppins font-bold flex justify-center items-center py-4 mx-4 mt-4"
          >
            <Image
              src="/messenger-icon.png"
              alt="Messenger Icon"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>Message the Seller</div>
          </Grid>
        )}
      </h1>
      {/* Render other model details here */}
    </div>
    // </LayoutProvider>
  );
};

export default ModelSummaryPage;
