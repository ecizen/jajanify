// components/organisms/search-content.tsx

import HotelSidebarFilter from "../molecules/hotel-sidebar"
import TourSidebarFilter from "../molecules/tour-sidebar"


interface SearchContentProps {
  type: "tour" | "hotel"
  showFilter: boolean
  onClose: () => void
}

const SearchContent = ({ type, showFilter, onClose }: SearchContentProps) => {
  const Sidebar = type === "tour" ? <TourSidebarFilter /> : <HotelSidebarFilter />

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 border-r p-4">
        {Sidebar}
      </aside>

      {/* Mobile sidebar overlay */}
      {showFilter && (
        <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto md:hidden shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button onClick={onClose} className="text-sm text-gray-500">Tutup</button>
          </div>
          {Sidebar}
        </div>
      )}
    </>
  )
}

export default SearchContent
