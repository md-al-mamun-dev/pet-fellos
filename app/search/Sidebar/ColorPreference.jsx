import React from 'react'

export default function ColorPreference() {
  return (
    <div className="mt-8">
      <h4 className='search-filter-title'>Color Preference</h4>
      <div className="mx-4 space-y-4 mt-4">
        <div className="w-full">
          <input
            type="radio"
            name="color_preference"
            value="any"
            id="color_preference_any"
            // checked={selectedGender === 'any'}
            // onChange={() => setSelectedGender('any')}

          />
          <label htmlFor="color_preference_any" className='text-base font-medium text-slate-600 leading-6 cursor-pointer'> Any</label>
        </div>

        <div className="w-full">
          <input
            type="radio"
            name="color_preference"
            value="orange"
            id="color_preference_orange"
            // checked={selectedGender === 'male'}
            // onChange={() => setSelectedGender('male')}

          />
          <label htmlFor="color_preference_orange" className='text-base font-medium text-slate-600 leading-6 cursor-pointer'> Orange </label>
        </div>

        <div className="w-full">
          <input
            type="radio"
            name="color_preference"
            value="white"
            id="color_preference_white"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}

          />
          <label htmlFor="color_preference_white" className='text-base font-medium text-slate-600 leading-6 cursor-pointer'> White</label>
        </div>
      </div>
    </div>
  )
}
