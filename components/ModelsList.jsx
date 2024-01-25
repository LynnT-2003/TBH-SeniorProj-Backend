"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

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

  const user = localStorage.getItem("name");

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {models.map((m) => (
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
