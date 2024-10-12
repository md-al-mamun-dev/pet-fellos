
export default function VaccinationStatus() {
  return (
    <div className="mt-8">
      <h4 className='search-filter-title'>Vaccination Status</h4>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="vaccination_status"
            value="note_sure"
            id="vaccination_note_sure"
            // checked={selectedGender === 'any'}
            // onChange={() => setSelectedGender('any')}
            // className="form-radio text-primary"
          />
          <label htmlFor="vaccination_note_sure" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max' >Not sure</label>
        </div>

        {/* Option: Male */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="vaccination_status"
            value="yes"
            id="vaccination_yes"
            // checked={selectedGender === 'male'}
            // onChange={() => setSelectedGender('male')}
            className="form-radio text-primary"
          />
          <label htmlFor="vaccination_yes" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'>Yes</label>
        </div>

        {/* Option: Female */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="vaccination_status"
            value="no"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}
            id="vaccination_no"
          />
          <label htmlFor="vaccination_no" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'>No</label>
        </div>
      </div>
    </div>
  )
}
