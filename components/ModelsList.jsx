"use client";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import RemoveBtn from "./RemoveBtn";
import { Grid } from "@mui/material";
import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { auth } from "@/libs/Firebase";
import Image from "next/image";
import Navbar from "./Navbar";

const pageSize = 5;

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

  const [page, setPage] = useState(1);

  const [selectedFilter, setSelectedFilter] = useState("");

  const [selectedBrandFilter, setSelectedBrandFilter] = useState("");
  const [selectedShopFilter, setSelectedShopFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn === "false") {
      router.push("/login");
    }
  }, [router]);

  // const search = (data) => {
  //   return data.filter((item) => {
  //     const searchTerm = `${item.Brand} ${item.Product_Name}`.toLowerCase();
  //     return searchTerm.includes(query.toLowerCase());
  //   });
  // };

  // const filteredModels = search(models).filter((item) => {
  //   const keyMatch = item.Brand.toLowerCase().includes(query.toLowerCase());
  //   const productMatch = item.Product_Name.toLowerCase().includes(
  //     query.toLowerCase()
  //   );
  //   const filterMatch = selectedFilter ? item.Shop === selectedFilter : true;
  //   return (keyMatch || productMatch) && filterMatch;
  // });

  // Update the search function to include filters for both brand and shop
  const search = (data) => {
    return data.filter((item) => {
      const searchTerm = `${item.Brand} ${item.Product_Name}`.toLowerCase();
      return (
        searchTerm.includes(query.toLowerCase()) &&
        (selectedBrandFilter ? item.Brand === selectedBrandFilter : true) &&
        (selectedShopFilter ? item.Shop === selectedShopFilter : true)
      );
    });
  };

  // Update the filteredModels function to use the selectedBrandFilter and selectedShopFilter
  const filteredModels = search(models);

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
    fetchModels();
  }, [models]);

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedIsAllowedUser = localStorage.getItem("isAllowedUser");

    if (storedUserEmail && storedIsAllowedUser) {
      setUserEmail(storedUserEmail);
      setIsAllowedUser(JSON.parse(storedIsAllowedUser));
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          const userEmail = user.email;
          localStorage.setItem("userEmail", userEmail);
          const isAllowedUser = allowedEmails.includes(userEmail);
          localStorage.setItem("isAllowedUser", isAllowedUser);
          setUserEmail(userEmail);
          setIsAllowedUser(isAllowedUser);
          console.log("User has logged in");
        } else {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("isAllowedUser");
          setUserEmail(null);
          setIsAllowedUser(false);
          console.log("User is logged out");
        }
      });
    }
  }, []);

  useEffect(() => {
    // Set current page to 1 whenever the query changes
    setPage(1);
  }, [query]);

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  const handleCardClick = (id) => {
    console.log("Card has been clicked", id);
    router.push(`/editModel/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedModels = filteredModels.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

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
        <Navbar />
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
                value={selectedShopFilter}
                onChange={(e) => setSelectedShopFilter(e.target.value)}
                label="Filter by Shop:"
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
                value={selectedBrandFilter}
                onChange={(e) => setSelectedBrandFilter(e.target.value)}
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

      {paginatedModels.map((m) => (
        <div
          className="card px-12 p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={m._id}
          onClick={() => handleCardClick(m._id)}
        >
          <div className="flex gap-4">
            {m.ImgUrl && (
              <div
                className="image-container mr-4 flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the event from bubbling up
                  router.push(`/summary/${m._id}`);
                }}
              >
                <Image
                  src={m.ImgUrl}
                  alt={`${m.Brand} ${m.Product_Name} Image`}
                  width={150}
                  height={150}
                  objectFit="cover"
                  objectPosition="0% 50%"
                />
              </div>
            )}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl">
                  {m.Brand} {m.Product_Name}{" "}
                  <span className="text-xl">
                    ({m.Ram}/{m.Storage})
                  </span>
                </h2>
                {m.Note && (
                  <h2>
                    {" - "} {m.Note}
                  </h2>
                )}
                <h2 className="text-s mt-2">
                  {"Price: "} {m.Price.toLocaleString()} {"MMK"}
                </h2>

                <h2 className="text-s">
                  {"Price to Performance: "} {m.p_to_p}
                </h2>
                {/* {m.Antutu_Score || m.DXO_Score ? (
                <h2 className="text-s">
                  {m.Antutu_Score && `Antutu Score: ${m.Antutu_Score} `}
                  {m.DXO_Score && `DXO Score: ${m.DXO_Score}`}
                </h2>
              ) : null} */}
              </div>
              <div className="flex items-end">
                <p className="text-xs text-blue-400">
                  Last Updated At: {new Date(m.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
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

      <div className="flex justify-between items-center mb-4">
        <Pagination
          count={Math.ceil(filteredModels.length / pageSize)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
        <button className="border border-slate-500 px-2" onClick={signOut}>
          Sign out
        </button>
      </div>

      {/* <Pagination
        count={Math.ceil(filteredModels.length / pageSize)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />

      <button className="border border-slate-500 px-2" onClick={signOut}>
        Sign out
      </button> */}
    </>
  );
}
