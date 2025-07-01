import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DestinationDetail from "../oraganisms/detail-content";
import MapComponent from "./location-map";

const tabsOption = [
  { id: "main", label: "Overview" },
  { id: "1", label: "Policies" },
  { id: "2", label: "Location" },
  { id: "3", label: "Included" },
  { id: "4", label: "Review" },
  { id: "5", label: "Avability" },
  { id: "6", label: "FAQs" },
  { id: "7", label: "Amenities" },
];

const TabDetailInformation = () => {
  return (
    <div className="relative min-h-screen">
      <Tabs defaultValue="main" className="w-full">
        <TabsList className="w-full lg:px-0 mb-4 flex items-center gap-4 overflow-x-auto scrollbar-hide scrolldetail whitespace-nowrap bg-white mt-6 px-4 z-40">
          {tabsOption.map((item) => (
            <TabsTrigger
              value={item.id}
              key={item.id}
              className="px-2 pb-4 border-b-2 border-neutral-100 bg-white border-t-0 rounded-none border-x-0 shadow-none  data-[state=active]:border-b-blue-700  data-[state=active]:font-semibold  data-[state=active]:text-blue-600 text-gray-400  data-[state=active]:shadow-none"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="main">
          <DestinationDetail />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default TabDetailInformation;
