import React from 'react'

export default function BreadPreference() {
  return (
    <div className="mt-8">
      <h4 className='search-filter-title'>Bread Preference</h4>
      <div className="mx-4 space-y-4 mt-4">
        <div className="w-full">
          <input
            type="radio"
            name="bread_preference"
            value="any"
            id="bread_preference_any"
            // checked={selectedGender === 'any'}
            // onChange={() => setSelectedGender('any')}

          />
          <label htmlFor="bread_preference_any" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'> Any</label>
        </div>

        <div className="w-full">
          <input
            type="radio"
            name="bread_preference"
            value="bangle_cat"
            id="bread_preference_bangle_cat"
            // checked={selectedGender === 'male'}
            // onChange={() => setSelectedGender('male')}

          />
          <label htmlFor="bread_preference_bangle_cat" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'> Bangle Cat </label>
        </div>

        <div className="w-full">
          <input
            type="radio"
            name="bread_preference"
            value="persian"
            id="bread_preference_persian"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}

          />
          <label htmlFor="bread_preference_persian" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'> Persian</label>
        </div>

        <div className="w-full">
          <input
            type="radio"
            name="bread_preference"
            value="chartreux"
            id="bread_preference_chartreux"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}
          />
          <label htmlFor="bread_preference_chartreux" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'> Chartreux</label>
        </div>


      </div>
    </div>
  )
}
