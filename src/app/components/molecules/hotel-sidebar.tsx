// components/organisms/hotel-sidebar-filter.tsx

const HotelSidebarFilter = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Filter Hotel</h3>
      <div>
        <label className="text-sm font-medium">Location</label>
        <input type="text" placeholder="e.g. Jakarta" className="w-full border px-2 py-1 rounded" />
      </div>
      <div>
        <label className="text-sm font-medium">Star Rating</label>
        <select className="w-full border px-2 py-1 rounded">
          <option>Any</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
        </select>
      </div>
    </div>
  )
}

export default HotelSidebarFilter
