import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
interface filterProps {
  id: string;
  label: string;
}
type data = {
  category: filterProps[];
  title: string;
};
const SelectFilter: React.FC<data> = ({ category, title }) => {
  return (
    <div className="">
      <div className="mb-3">
        <label className="text-md font-medium">{title}</label>
      </div>
      <div className="flex flex-col gap-y-4 ">
        {category.map((item: filterProps) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={item.id} className="data-[state=checked]:bg-blue-400  data-[state=checked]:border-none" />
            <label htmlFor={item.id} className="text-xs">{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SelectFilter;
