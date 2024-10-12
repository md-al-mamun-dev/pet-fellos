
export default function AgePreference() {

  return (
    <div className='mt-8'>
      <h4 className='search-filter-title'>Age Preference</h4>

      <div className='w-full mx-4 space-y-4 mt-4' >
        <div className='w-full'>
          <input className="cursor-pointer" type="radio" name="age_preference" value="any" id="age_preference_any"/>
          <label htmlFor="age_preference_any" className='text-base font-medium text-slate-600 leading-6 cursor-pointer' > Any</label>
        </div>

        <div className='w-full'>
          <input className="cursor-pointer" type="radio" name="age_preference" value="one_month" id="age_preference_one_month"/>
          <label className='text-base font-medium text-slate-600 leading-6 cursor-pointer' htmlFor="age_preference_one_month"> One Month</label>
        </div>


        <div className='w-full'>
          <input className="cursor-pointer" type="radio" name="age_preference" value="two_month" id="age_preference_two_month"/>
          <label className='text-base font-medium text-slate-600 leading-6 cursor-pointer' htmlFor="age_preference_two_month"> Two Month</label>
        </div>

        <div className='w-full'>
          <input className="cursor-pointer" type="radio" name="age_preference" value="three_month" id="age_preference_three_month"/>
          <label className='text-base font-medium text-slate-600 leading-6 cursor-pointer' htmlFor="age_preference_three_month"> Three Month</label>
        </div>

        <div className='w-full'>
          <input className="cursor-pointer" type="radio" name="age_preference" value="one_year" id="age_preference_one_year"/>
          <label className='text-base font-medium text-slate-600 leading-6 cursor-pointer' htmlFor="age_preference_one_year"> One Year</label>
        </div>
      </div>
    </div>
  )
}
