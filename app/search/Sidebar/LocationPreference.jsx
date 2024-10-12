
export default function LocationPreference() {
  return (
    <div>
        <h4 className='search-filter-title'>Loaction Preference</h4>
        <select className="w-full border rounded-lg px-4 py-2.5 mt-4 cursor-pointer">
            <option className="cursor-pointer" value='ctg'>Chattogram</option>
            <option className="cursor-pointer" value='dhk'>Dhaka</option>
        </select>
    </div>
  )
}
