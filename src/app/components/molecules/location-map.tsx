"use client";

import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const L = require("leaflet");
    require("leaflet/dist/leaflet.css");

    const map = L.map("map").setView([-8.5069, 115.2627], 13);

    // 🟣 Tile layer dengan tema dark
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // 🔵 Custom icon dengan gaya sesuai tema biru
    const customIcon = L.divIcon({
      html: `
    <div style="position: relative; width: 48px; height: 48px;">
      <span style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 9999px;
        background-color: rgba(59, 130, 246, 0.5); /* biru dengan transparansi */
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
      "></span>
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 9999px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4-4-6-6-6-9a6 6 0 1112 0c0 3-2 5-6 9z"/>
        </svg>
      </div>
    </div>
  `,
      className: "",
      iconSize: [48, 48],
      iconAnchor: [24, 48],
      popupAnchor: [0, -40],
    });

    L.marker([-8.5069, 115.2627], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        "<div style='color:white'><b>The Udaya Resort & Spa</b><br/>Luxury resort in Ubud, Bali.</div>"
      );

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="w-full h-[400px] rounded-xl shadow-lg" />;
};

export default MapComponent;
