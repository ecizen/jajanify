"use client";
import BottomNav from "@/app/components/molecules/bottom-nav";
import NavbarSearch from "@/app/components/oraganisms/navbar-search";
import SearchContent from "@/app/components/oraganisms/search-content";
import { useState } from "react";

export default function SearchPage() {
  const [type, setType] = useState<"tour" | "hotel">("tour");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <NavbarSearch
        onCategoryChange={setType}
        onFilterToggle={() => setShowFilter(!showFilter)}
      />
      <main className="flex flex-col md:flex-grow gap-6 px-6 py-0 relative">
        <div className="flex items-start">
          {/* Sidebar for desktop */}
          <SearchContent
            type={type}
            showFilter={showFilter}
            onClose={() => setShowFilter(false)}
          />

          <article className="w-full bg-gray-200"></article>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
