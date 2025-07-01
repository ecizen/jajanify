import images from "../assets/data-image";

const hotelsInBali = [
  {
    id: 1,
    name: "The Ubud Resort & Spa",
    location: "Ubud, Bali",
    rating: 4.7,
    reviews: 1983,
    price: 1724000,
    city: 'bali',
    imageUrl: images.feature1,
    facilities: ["Free WiFi", "Breakfast", "Pool", "Spa"],
  },
  {
    id: 2,
    name: "Seminyak Beachfront Villas",
    location: "Seminyak, Bali",
    rating: 4.5,
    reviews: 1457,
    price: 2045000,
    city: 'bali',
    imageUrl:  images.feature2,
    facilities: ["Free Parking", "Private Pool", "Beach Access"],
  },
  {
    id: 3,
    name: "Kuta Paradise Hotel",
    location: "Kuta, Bali",
    rating: 4.2,
    reviews: 2543,
    price: 1120000,
    city: 'bali',
    imageUrl:  images.feature3,
    facilities: ["Breakfast", "Airport Shuttle", "Fitness Center"],
  },
  {
    id: 4,
    name: "Nusa Dua Ocean Resort",
    location: "Nusa Dua, Bali",
    rating: 4.8,
    reviews: 3121,
    price: 2590000,
    city: 'bali',
    imageUrl:  images.feature4,
    facilities: ["Ocean View", "All-Inclusive", "Spa", "Gym"],
  },

];
export default hotelsInBali;