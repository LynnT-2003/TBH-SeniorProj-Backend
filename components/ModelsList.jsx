"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Grid, Item } from "@mui/material";
import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { auth } from "@/libs/Firebase";

const allowedEmails = ["aungchammyae95@gmail.com", "allowed@example.com"];

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
  const [userEmail, setUserEmail] = useState(null);
  const [isAllowedUser, setIsAllowedUser] = useState(false);

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  const keys = ["Brand", "Product_Name"];
  const [query, setQuery] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn === "false") {
      router.push("/login"); // Redirect to login page
    }
  }, [router]);

  const search = (data) => {
    // return data.filter((item => keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))))
    return data.filter((item) => {
      // const brandMatch = item.Brand.toLowerCase().includes(query.toLowerCase());
      const keyMatch = keys.some((key) =>
        item[key].toLowerCase().includes(query.toLowerCase())
      );
      const filterMatch = selectedFilter
        ? item.Brand === selectedFilter || item.Shop === selectedFilter
        : true;
      return keyMatch && filterMatch;
    });
  };

  const fetchModels = async () => {
    const fetchedModels = await getModels();
    fetchedModels.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    setModels(fetchedModels);
    setLoading(false);
  };

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

  useEffect(() => {
    fetchModels();
  }, []);

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  const handleClick = (id) => {
    console.log("Card has been clicked", id);
    router.push(`/editModel/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <img src="/loading.gif" alt="Loading..." />
      </div>
    );
  }

  const shops = Array.from(new Set(models.map((m) => m.Shop)));
  const brands = Array.from(new Set(models.map((m) => m.Brand)));

  return (
    <>
      <div>
        <Grid container spacing={2} className="">
          <Grid xs={6} className="pl-4">
            <TextField
              size="small"
              label="Search..."
              variant="outlined"
              style={{ width: "95%" }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>
          <Grid xs={6} className="flex justify-end">
            <FormControl fullWidth size="small">
              <InputLabel>Filter by Shop:</InputLabel>
              <Select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                label="Filter by Brand:"
                style={{ width: "95%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {shops.map((shop) => (
                  <MenuItem key={shop} value={shop}>
                    {shop}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Filter by Brand:</InputLabel>
              <Select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                label="Filter by Brand:"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {brands.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      {search(models).map((m) => (
        <div
          className="card px-12 p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={m._id}
          onClick={() => handleClick(m._id)}
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

          <div className="flex gap-2 justify-center items-center items-start">
            {/* <RemoveBtn id={m._id} /> */}
            {isAllowedUser && <RemoveBtn id={m._id} />}
            {/* <Link href={`/editModel/${m._id}`}>
              <HiPencilAlt className="" size={24} />
            </Link> */}
          </div>
        </div>
      ))}
      <button className="border border-slate-500 px-2" onClick={signOut}>
        Sign out
      </button>
    </>
  );
}
