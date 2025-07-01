import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar1Icon, CalendarIcon } from "lucide-react";
import { useState } from "react";

const ReservationCard = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  return (
    <div className="w-full h-auto border border-gray-200 rounded-md p-4 lg:block ">
      <div className="pb-4 border-b">
        <h1 className="text-2xl font-medium">
          $400.00{" "}
          <span className="text-gray-400 text-xs font-normal">per night</span>
        </h1>
      </div>
      <div className="py-4 grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-medium text-gray-700 text-left">
            Check In
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-0 text-sm font-medium justify-start text-left px-0 bg-white text-black  border-gray-100 rounded-none shadow-none border-b  hover:shadow-md focus:ring-2 focus:ring-blue-500 transition"
              >
               
                {checkInDate
                  ? format(checkInDate, "MMMM d, yyyy")
                  : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-md">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-medium text-gray-700 text-left">
            Check Out
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                 className="w-full border-0 text-sm font-medium justify-start text-left px-0 bg-white text-black  border-gray-100 rounded-none shadow-none border-b  hover:shadow-md focus:ring-2 focus:ring-blue-500 transition"
              >
              
                {checkOutDate
                  ? format(checkOutDate, "MMMM D, yyyy")
                  : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-md">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        <label className="text-xs font-normal text-gray-400" htmlFor="">
            Guest
        </label>
        <Input placeholder="Add Guest" className="w-full placeholder:text-gray-400 text-sm border-0 border-b rounded-none border-gray-100 shadow-none px-0"/>
      </div>
      <div className="pt-4 pb-6 flex items-center justify-between">
        <span className="text-xs font-normal text-gray-400">Total</span>
        <h1 className="text-lg font-medium">$1,200.00</h1>
      </div>
      <button className="px-4 h-10 bg-blue-700 text-white text-sm w-full rounded-full">Book Now</button>
      <button className="w-full py-4 text-xs font-medium text-blue-600">Ask Manager a Question</button>
    </div>
  );
};

export default ReservationCard;
