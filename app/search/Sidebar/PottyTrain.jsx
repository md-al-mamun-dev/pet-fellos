
export default function PottyTrain() {
  return (
    <div className="mt-8">
      <h4 className='search-filter-title'>Potty Train</h4>
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="potty_train"
            value="note_sure"
            id="potty_train_note_sure"
            // checked={selectedGender === 'any'}
            // onChange={() => setSelectedGender('any')}
            // className="form-radio text-primary"
          />
          <label htmlFor="potty_train_note_sure" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'>Not sure</label>
        </div>

        {/* Option: Male */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="potty_train"
            value="yes"
            id="potty_train_yes"
            // checked={selectedGender === 'male'}
            // onChange={() => setSelectedGender('male')}
            className="form-radio text-primary"
          />
          <label htmlFor="potty_train_yes" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'>Yes</label>
        </div>

        {/* Option: Female */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="potty_train"
            value="no"
            // checked={selectedGender === 'female'}
            // onChange={() => setSelectedGender('female')}
            id="potty_train_no"
          />
          <label htmlFor="potty_train_no" className='text-base font-medium text-slate-600 leading-6 cursor-pointer w-max'>No</label>
        </div>
      </div>
    </div>
  )
}
