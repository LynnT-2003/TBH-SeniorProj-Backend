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

export default async function ModelsList() {
  const models = await getModels();
  if (!models) {
    // You can optionally show a loading spinner or message here
    return (
      <>
        <div className="text-center text-2xl font-bold">Loading...</div>
      </>
    );
  }

  return (
    <>
      {models.map((m) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={m._id}
        >
          <div>
            <h2 className="font-bold text-2xl">
              {m.Brand} {m.Product_Name}
            </h2>
            <div className="">{m.Note}</div>
          </div>

          <div className="flex gap-2 items-start">
            <RemoveBtn />
            <Link href={`/editModel/${m._id}`}>
              <HiPencilAlt className="" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

// "use client";
// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/models", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

// export default async function TopicsList() {
//   const { topics } = await getTopics();

//   return (
//     <>
//       {topics.map((t) => (
//         <div
//           key={t._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
//         >
//           <div>
//             <h2 className="font-bold text-2xl">{t.Product_Name}</h2>
//             <div>{t.Note}</div>
//           </div>

//           <div className="flex gap-2">
//             <RemoveBtn id={t._id} />
//             <Link href={`/editModel/${t._id}`}>
//               <HiPencilAlt size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
