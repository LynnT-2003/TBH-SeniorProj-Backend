"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeModel = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(
        `https://tbh-chat-essentials.vercel.app/api/models/?id=${id}`,
        // `http://localhost:3000/api/models/?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.push("/");
      }
    }
  };
  return (
    <button onClick={removeModel}>
      <HiOutlineTrash className="text-red-400" size={40} />
    </button>
  );
}
