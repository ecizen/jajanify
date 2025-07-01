import {
  AirbnbIcon,
  Dumbbell01Icon,
  ParkingAreaCircleIcon,
  Restaurant01Icon,
  SwimmingIcon,
  Tv01Icon,
  Wifi01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import MapComponent from "../molecules/location-map";
import ReservationCard from "../molecules/reservation-card";
const facilities = [
  {
    name: "Free WiFi",
    icon: <HugeiconsIcon icon={Wifi01Icon} className="w-4 h-4 text-blue-500" />,
  },
  {
    name: "Swimming Pool",
    icon: (
      <HugeiconsIcon icon={SwimmingIcon} className="w-4 h-4 text-blue-500" />
    ),
  },
  {
    name: "Spa & Wellness",
    icon: (
      <HugeiconsIcon icon={SwimmingIcon} className="w-4 h-4 text-blue-500" />
    ),
  },
  {
    name: "Fitness Center",
    icon: (
      <HugeiconsIcon icon={Dumbbell01Icon} className="w-4 h-4 text-blue-500" />
    ),
  },
  {
    name: "Restaurant",
    icon: (
      <HugeiconsIcon
        icon={Restaurant01Icon}
        className="w-4 h-4 text-blue-500"
      />
    ),
  },
  {
    name: "Free Parking",
    icon: (
      <HugeiconsIcon
        icon={ParkingAreaCircleIcon}
        className="w-4 h-4 text-blue-500"
      />
    ),
  },
  {
    name: "Air Conditioner",
    icon: <HugeiconsIcon icon={AirbnbIcon} className="w-4 h-4 text-blue-500" />,
  },
  {
    name: "Smart TV",
    icon: <HugeiconsIcon icon={Tv01Icon} className="w-4 h-4 text-blue-500" />,
  },
];

const DestinationDetail = () => {
  const [readmore, setReadmore] = useState(false);

  const handelRead = () => {
    setReadmore(!readmore);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6 lg:px-0 px-4">
        <div className="col-span-2">
          <h1 className="text-xl font-medium">About The Destination</h1>
          <div className="text-xs leading-relaxed lg:max-w-[90%] mt-2 text-gray-400">
            <p
              className={`${
                readmore ? "line-clamp-none" : "line-clamp-5"
              } text-justify`}
            >
              The Udaya Resort & Spa is a luxury retreat nestled in the lush
              greenery of Ubud, Bali. Known for its serene atmosphere and warm
              hospitality, it offers a perfect blend of traditional Balinese
              charm and modern comfort. Surrounded by tropical nature, the
              resort provides a peaceful escape for relaxation and rejuvenation.
              Guests can enjoy premium facilities such as an infinity pool,
              natural spa treatments, and a scenic restaurant. Each room is
              beautifully designed with authentic Balinese details and equipped
              with contemporary amenities. The Udaya Spa offers a range of
              holistic treatments that soothe both body and soul. It’s an ideal
              destination for honeymooners, romantic getaways, or personal
              wellness retreats.
              <button
                onClick={handelRead}
                className="ml-1 text-blue-500 font-medium inline"
              >
                {readmore ? " Read Less" : "... Read More"}
              </button>
            </p>
          </div>
          <div className="mt-6 lg:max-w-[85%]">
            <h2 className="text-xl font-medium mb-4">Our Best Facilities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700   transition"
                >
                  <span className="p-1  bg-gray-100 rounded-full">
                    {facility.icon}
                  </span>
                  <span className="text-xs font-semibold">{facility.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:block hidden">
          <ReservationCard />
        </div>
      </div>
      <div className="">

        <h1 className="text-xl mt-6 mb-2">Location</h1>
        <MapComponent />
      </div>
    </div>
  );
};

export default DestinationDetail;
