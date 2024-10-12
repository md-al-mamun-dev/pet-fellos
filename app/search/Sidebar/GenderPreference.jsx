
export default function GenderPreference() {
  return (
    <div className="mt-8">
      <h4 className='search-filter-title'>Gender Preference</h4>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2 ">
          <input
            type="radio"
            name="gender"
            value="any"
            id="gender_filter_any"
            // checked={selectedGender === 'any'}
            // onChange={() => setSelectedGender('any')}
            className="form-radio cursor-pointer"
          />
          <label htmlFor='gender_filter_any' className='text-base font-medium text-slate-600 leading-6 cursor-pointer' > Any</label>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            id="gender_filter_male"
            // checked={selectedGender === 'male'}
            // onChange={() => setSelectedGender('male')}
            className="form-radio cursor-pointer"
          />
          <label htmlFor="gender_filter_male" className='text-base font-medium text-slate-600 leading-6 cursor-pointer'> Male</label>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            id="gender_filter_female"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}
            className="form-radio cursor-pointer"
          />
          <label htmlFor="gender_filter_female" className='text-base font-medium text-slate-600 leading-6 cursor-pointer'> Female</label>
        </div>

      </div>
    </div>
  )
}
