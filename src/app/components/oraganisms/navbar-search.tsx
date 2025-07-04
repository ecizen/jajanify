// components/organisms/navbar-search.tsx

"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavbarSearchItem from "../molecules/navbar-searc-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterFreeIcons, PreferenceHorizontalFreeIcons, Search01Icon } from "@hugeicons/core-free-icons";

interface NavbarSearchProps {
  onCategoryChange: (type: "tour" | "hotel") => void;
  onFilterToggle: () => void;
}
const NavbarSearch = ({
  onCategoryChange,
  onFilterToggle,
}: NavbarSearchProps) => {
  return (
    <header className="w-full border-b bg-white">
      <nav className="lg:px-6 px-4 py-4 flex justify-between items-center gap-x-2">
        <div className="lg:w-auto w-full flex items-center space-x-4">
          <h1 className="text-neutral-800 text-xl font-semibold lg:block hidden">
            <span className="text-blue-600">JALAN.</span>IFY
          </h1>
          <div className="lg:w-96 w-full flex items-center bg-gray-50 rounded-full relative">
            <div className=" lg:max-w-max max-w-none bg-gray-50 p-1.5 rounded-l-full">
              <Select
                defaultValue="tour"
                onValueChange={(value) =>
                  onCategoryChange(value as "tour" | "hotel")
                }
              >
                <SelectTrigger className="w-full rounded-full shadow-none text-xs  data-[size=default]:h-7 border-none bg-white">
                  <SelectValue
                    placeholder="Select category"
                    className="text-xs"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tour">Tour</SelectItem>
                  <SelectItem value="hotel">Hotel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Plan your next adventure..."
              className="w-full h-10 rounded-full shadow-none border-0 bg-gray-50 text-xs placeholder:text-xs  focus-visible:ring-blue-500 focus-visible:ring-[1px]"
            />
            <div className="absolute right-4">
              <HugeiconsIcon icon={Search01Icon} />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="lg:block hidden">
            <NavbarSearchItem />
          </div>
          <div className="flex items-center lg:space-x-4">
            <div className=" pr-4 border-r lg:block hidden">
              <Select>
                <SelectTrigger className="text-xs border lg:w-[138.45px] h-10 rounded-full w-auto shadow-none ">
                  <div className="lg:block hidden">
                    <SelectValue
                      placeholder="Select location"
                      className="text-xs"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jogja">Jogja</SelectItem>
                  <SelectItem value="bali">Bali</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <button
                className="md:hidden h-10 w-10  text-black rounded border border-gray-100 flex items-center justify-center"
                onClick={onFilterToggle}
              >
                <HugeiconsIcon icon={PreferenceHorizontalFreeIcons}/>
              </button>
            </div>
            <div className="lg:flex hidden items-center space-x-2">
              <Avatar className="rounded-lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <h1 className="text-sm">john dae</h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSearch;
