"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Grid, Item } from "@mui/material";
import { Select, TextField, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useRouter } from "next/navigation";

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

  const [selectedFilter, setSelectedFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn === "false") {
      router.push('/login'); // Redirect to login page
    }
  }, [router]);
  
  const search = (data) => {
    // return data.filter((item => keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))))
    return data.filter((item => {
      // const brandMatch = item.Brand.toLowerCase().includes(query.toLowerCase());
      const keyMatch = keys.some((key) =>
        item[key].toLowerCase().includes(query.toLowerCase())
      );
      const filterMatch = selectedFilter ? item.Brand === selectedFilter : true;
      return keyMatch && filterMatch;}))
  }

  const fetchModels = async () => {
    const fetchedModels = await getModels();
    setModels(fetchedModels);
    setLoading(false);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const signOut = () => {
    localStorage.clear();
    router.push('/login');
  };

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
          {/* <input
            type="text"
            placeholder="Search..."
            className="px-2 border border-slate-800"
            onChange={(e) => setQuery(e.target.value)}
          /> */}
          <TextField
              size="small"
              label="Search..."
              variant="outlined"
              onChange={(e) => setQuery(e.target.value)}
            />
        </Grid>
        <Grid xs={4} className="flex justify-end">
          {/* <select className="border border-slate-800 py-0.5 pr-5" onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="" disabled selected hidden>
              Filter by...
            </option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
          </select> */}
          
          <FormControl fullWidth
              size="small">
              <InputLabel>Filter by Brand:</InputLabel>
              <Select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                label= "Filter by Brand:"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Apple">Apple</MenuItem>
                <MenuItem value="Samsung">Samsung</MenuItem>
                <MenuItem value="Xiaomi">Xiaomi</MenuItem>
              </Select>
            </FormControl>

          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
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
      <button className="border border-slate-500 px-2" onClick={signOut}>Sign out</button>
    </>
  );
}
