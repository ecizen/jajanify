"use client";
import GaleriDestination from "@/app/components/molecules/galeri-destination";
import { Tabs } from "@/components/ui/tabs";
import HeaderInformation from "@/app/components/molecules/header-information";
import TabDetailInformation from "@/app/components/molecules/tab-detail";
import NavbarDetail from "@/app/components/oraganisms/navbar-detail";

export default function DetailTravelPage() {
  return (
    <>
      <NavbarDetail />
      <main>
        <div className="lg:px-6 md:px-6 px-0 py-0 lg:min-h-screen">
          <HeaderInformation
            title="The Udaya Resort & Spa"
            rating={4.7}
            countRivew={364}
            location="Jl. Sri Wedari No.48B, Ubud, Gianyar, Bali 80571, Indonesia"
          />

          <div className="mt-8">
            <div className="block lg:hidden">
              <Tabs defaultValue="main">
                <GaleriDestination showTabsContent showTabsList />
              </Tabs>
            </div>
            <GaleriDestination /> {/* untuk desktop */}
            <TabDetailInformation />
          </div>
        </div>
      </main>
      
    </>
  );
}
