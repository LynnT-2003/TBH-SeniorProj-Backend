"use client";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const removeModel = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(
        // `https://tbh-chat-essentials.vercel.app/api/models/?id=${id}`,
        `http://localhost:3000/api/models/?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        window.location.reload();
      }
    }
  };
  return (
    <button onClick={removeModel}>
      <HiOutlineTrash className="text-red-400" size={24} />
    </button>
  );
}
