import LocationPreference from './LocationPreference'
import GenderPreference from './GenderPreference'
import AgePreference from './AgePreference'
import ColorPreference from './ColorPreference'
import VaccinationStatus from './VaccinationStatus'
import SterilizationStatus from './SterilizationStatus'
import PottyTrain from './PottyTrain'
import BreadPreference from './BreadPreference'

export default function Sidebar() {
  return (
    <div className='min-w-[336px] py-6 px-4 bg-blue-50 rounded '>
      <LocationPreference/>
      <GenderPreference/>
      <AgePreference/>
      <ColorPreference/>
      <VaccinationStatus/>
      <SterilizationStatus/>
      <PottyTrain/>
      <BreadPreference/>
    </div>
  )
}
