import CardItem from './CardItem'
import FilterMenu from './FilterMenu'
import ScrollOperation from './ScrollOperation'

export default function ReadyToAdopt() {
  return (
    <div className="z-30 mt-28 relative">
        <h2 className="section-title-1">Ready To Adopt</h2>
        <FilterMenu/>
        {/* hide-scrollbar */}

        <div className='relative'>
          <div className="mt-8 text-slate-600 flex gap-x-8 px-14 w-full overflow-x-scroll hide-scrollbar" id='ready_to_adopt'>
              <CardItem/>
              <CardItem/>
              <CardItem/>


              {/* <CardItem/> */}
              {/* <CardItem/> */}
          </div>
          <ScrollOperation containerId={'ready_to_adopt'}/>
        </div>
        
    </div>
  )
}
