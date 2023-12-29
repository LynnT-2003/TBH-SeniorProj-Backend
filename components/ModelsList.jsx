import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function ModelsList() {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
      <div>
        <h2 className="text-white font-bold text-2xl">Model Name</h2>
        <div className="text-white">Model Description</div>
      </div>

      <div className="flex gap-2 items-start">
        <RemoveBtn />
        <Link href="/editModel">
          <HiPencilAlt className="text-white" size={24} />
        </Link>
      </div>
    </div>
  );
}
