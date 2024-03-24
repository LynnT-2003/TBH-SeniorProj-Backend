import ModelsList from "@/components/ModelsList";
import SearchAndFilter from "@/components/SearchAndFilter";
import { LayoutProvider } from "@/libs/LayoutContext";

export default function Home() {
  return (
    <LayoutProvider>
      {/* <SearchAndFilter /> */}
      <ModelsList />
    </LayoutProvider>
  );
}
