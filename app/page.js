import ModelsList from "@/components/ModelsList";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function Home() {
  return (
    <>
      <SearchAndFilter />
      <ModelsList />
      <button className="border border-slate-500 px-2">Sign out</button>
    </>
  );
}
