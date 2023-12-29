import Link from "next/link";
import ModelsList from "@/components/ModelsList";
import RemoveBtn from "@/components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <ModelsList />
      <ModelsList />
    </>
  );
}
