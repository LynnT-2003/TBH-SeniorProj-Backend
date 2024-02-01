"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Grid, Item } from "@mui/material";

const getModels = async () => {
  try {
    const res = await fetch(
      "https://tbh-chat-essentials.vercel.app/api/models",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        "Failed to fetch models. Something went wrong during the fetching process in ModelsList.jsx"
      );
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default function ModelsList() {
  // const models = await getModels();

  // const user = localStorage.getItem("name");

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const keys = ["Brand", "Product_Name"]
  const [query, setQuery] = useState("")
  
  const search = (data) => {
    return data.filter((item => keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))))
  }

  const fetchModels = async () => {
    const fetchedModels = await getModels();
    setModels(fetchedModels);
    setLoading(false);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  // if (!models) {
  //   // You can optionally show a loading spinner or message here
  //   return (
  //     <>
  //       <div className="text-center text-2xl font-bold">Loading...</div>
  //     </>
  //   );
  // }

  if (loading) {
    // Render the loading GIF while fetching tasks
    return (
      <div className="flex justify-center items-center">
        <img src="/loading.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <>
    <div>
      <Grid container spacing={2} className="">
        <Grid xs={8} className="pl-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 border border-slate-800"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid xs={4} className="flex justify-end">
          <select className="border border-slate-800 py-0.5 pr-5">
            <option value="" disabled selected hidden>
              Filter by...
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </Grid>
      </Grid>
    </div>
      {search(models).map((m) => (
        <div
          className="px-12 p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={m._id}
        >
          <div>
            <h2 className="text-2xl">
              {m.Brand} {m.Product_Name}
            </h2>
            <div className="">{m.Note}</div>
            <p className="text-xs pt-3 text-blue-400">
              Last Updated At: {new Date(m.updatedAt).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <RemoveBtn id={m._id} />
            <Link href={`/editModel/${m._id}`}>
              <HiPencilAlt className="" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
