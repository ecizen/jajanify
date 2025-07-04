import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

interface SidebarProps {
  departureDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
  title: string
}

const DepartureDate: React.FC<SidebarProps> = ({
  departureDate,
  onDateChange,
  title
}) => {
  return (
    <div className="py-2">
      <div className="text-md font-md mb-3">{title}</div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal shadow-none bg-white text-black border border-gray-300 rounded-md  focus:ring-2 focus:ring-blue-500 transition"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {departureDate ? format(departureDate, "dd MMMM yyyy") : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-md">
          <Calendar
            mode="single"
            selected={departureDate}
            onSelect={onDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default DepartureDate;
