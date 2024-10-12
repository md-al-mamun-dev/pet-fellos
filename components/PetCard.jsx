import Image from 'next/image'
import location_pin_icon from '@/public/icons/map-pin.svg'
import heart_primary_icon from '@/public/icons/heart-primary.svg'

export default function PetCard() {
  return (
    <div className='w-[320px] h-[403px] bg-blue-50 rounded overflow-hidden'>
        <div className='h-[195px] w-[320px] relative'>
            <Image 
                fill
                className='object-cover' src="/images/aa040cc08ca330656651adce3a85cf90.jpeg" />
        </div>
        <div className='mt-4 px-4'>
            <h4 className='pet-card-title'>Fury, Stray Cat</h4>
            <p className='pet-card-txt mt-2'>6 Months . Tom . Vaccinated</p>
            <div className='flex items-end justify-between mt-2 '>
                <p className='pet-card-txt'>Uttara-Dhaka . 5km away</p>
                <Image className='' src={location_pin_icon} />
            </div>
            
        </div>
        <div className='flex items-center  gap-x-8 px-4 mt-6'>
            <button className='pet-card-favourit-btn'>
                <Image height={20} width={20} src={heart_primary_icon}/>
            </button>

            <button className='pet-card-btn'>
                View
            </button>
        </div>
        
    </div>
  )
}
