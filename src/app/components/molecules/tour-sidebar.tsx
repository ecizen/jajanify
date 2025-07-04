// components/organisms/tour-sidebar-filter.tsx
"use client";
import { useState } from "react";
import DepartureDate from "./departure-date-";
import PriceRangeSelector from "./price-range-filter";
import SelectFilter from "./category-filter";
import { Button } from "@/components/ui/button";
const categoriOption = [
  { id: "nature", label: "Nature" },
  { id: "cultural", label: "Cultural" },
  { id: "culinary", label: "Culinary" },
  { id: "family", label: "Family" },
  { id: "romantic", label: "Romantic" },
];
const tourType = [
  { id: "private", label: "Private Tour" },
  { id: "group", label: "Group Tour" },
  { id: "self_guided", label: "Self-Guided" },
  { id: "open_trip", label: "Open Trip" },
  { id: "customizable", label: "Customizable" },
]
const TourSidebarFilter = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  return (
    <aside className="space-y-4 min-h-screen  overflow-y-auto">
      <SelectFilter category={categoriOption} title="Category" />
      <DepartureDate
        title="Departure Date"
        departureDate={checkInDate}
        onDateChange={setCheckInDate}
      />
      <PriceRangeSelector />
      <SelectFilter category={tourType} title="Tour Type" />
      <div className="mt-6">
          <Button className="text-sm text-white w-full px-4 h-10 bg-blue-700 rounded-full">Apply filter</Button>
      </div>
    </aside>
  );
};

export default TourSidebarFilter;
