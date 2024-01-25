import ModelsList from "@/components/ModelsList";
import SearchAndFilter from "@/components/SearchAndFilter";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <SearchAndFilter />
      <ModelsList />
      <button className="border border-slate-500 px-2">Sign out</button>
    </>
  );
}
