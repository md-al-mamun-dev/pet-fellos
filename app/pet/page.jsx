import Image from 'next/image'
import arrow_left  from '@/public/icons/arrow-left.svg'
import arrow_right  from '@/public/icons/arrow-right.svg'
import ProgressCircle from './ProgressCircle'
import paw_print from '@/public/icons/paw-print.svg'
import sample_image from '@/public/images/c53dfad92e5aa4af1359abb90e9f61b9.jpeg'


export default function page() {
  return (
    <div className=''>
        <div className='container-section'>
            <div className=' flex items-center gap-x-10 '>
                <button><Image src={arrow_left} /></button>                
                <h4 className='section-title-2'>Dodo</h4>
            </div>
            <div className='flex gap-x-8 mt-14 mb-20'>
                <div className='z-0 w-min relative'>
                    <div className="w-[803px] h-[456px] overflow-hidden rounded-lg relative">
                        <Image fill src={'/images/c53dfad92e5aa4af1359abb90e9f61b9.jpeg'} className='object-cover'/>
                    </div>
                    <div className='w-[48px] z-10 h-[184px] absolute right-0 bottom-0 group'>
                        <div className="-z-10 w-[258px] h-[146px] overflow-hidden rounded-lg opacity-0 invisible transition-opacity group-hover:opacity-80 group-hover:visible duration-1000 ease-in-out absolute right-0 bottom-0">
                            <Image fill src={'/images/aa040cc08ca330656651adce3a85cf90.jpeg'} className='object-cover'/>
                        </div>
                        <button className='z-20 h-full w-full bg-primary rounded-lg'>
                            <Image className='mx-auto' height={24} width={24} src={arrow_right} />
                            <ProgressCircle total={7} active={3}/>
                        </button>
                    </div>                    
                </div>
                <div className='w-full rounded-lg bg-blue-50  py-8 px-12 '>
                    <div className='space-y-5'>
                        <div className='w-full space-y-1 underline-slate-400 relative py-2'>
                            <h5 className='section-title-3'>Dodo</h5>
                            <p className='text-slate-500 font-normal text-base leading-6 '>German Shepard</p>
                        </div>
                        <ul className='text-base font-medium leading-6 text-slate-600 grid grid-cols-[repeat(2,minmax(30%,max-content))] justify-between gap-y-3 '>
                            <li>Gender: <span>Male</span></li>
                            <li>Age: <span>1.4 years</span></li>
                            <li>Vaccinated: <span>Yes</span></li>
                            <li className=''>Sterilization: <span>Yes</span></li>
                            <li className='col-span-2'>Location: <span>Sector 13, Uttara-Dhaka </span></li>
                            <li className='col-span-2'>Food Habit: <span> Rice, meat, As usual</span></li>
                        </ul>
                        <p className='font-normal text-base leading-6'>
                            Dodo is a peace-loving doggie! He is pleasant guy to be around and is happy to humor anyone who wants to pet him. 
                        </p>
                    </div>
                    
                    <button className='btn-primary w-full mt-8'>Request to Adopt</button>
                </div>
            </div>

            <div className=''>
                <h3 className='section-title-4 text-center'>Dodo’s History</h3>
                <div className='flex gap-x-10 items-center justify-center my-11'>
                    <div className='w-[216px] h-[138px] bg-blue-50 rounded-lg py-4 px-5 space-y-4'>
                        <Image className='w-8 h-8 mx-auto ' src={paw_print}/>
                        <h5 className='pet-history-card-title'>Good for Apartments</h5>
                    </div>
                    <div className='w-[216px] h-[138px] bg-blue-50 rounded-lg py-4 px-5 space-y-4'>
                        <Image className='w-8 h-8 mx-auto ' src={paw_print}/>
                        <h5 className='pet-history-card-title'>Friendly with other pets</h5>
                    </div>

                    <div className='w-[216px] h-[138px] bg-blue-50 rounded-lg py-4 px-5 space-y-4'>
                        <Image className='w-8 h-8 mx-auto ' src={paw_print}/>
                        <h5 className='pet-history-card-title'>Friendly with Kids</h5>
                    </div> 

                    <div className='w-[216px] h-[138px] bg-blue-50 rounded-lg py-4 px-5 space-y-4'>
                        <Image className='w-8 h-8 mx-auto ' src={paw_print}/>
                        <h5 className='pet-history-card-title line-clamp-3'>Low Energetic</h5>
                    </div>  

                    <div className='w-[216px] h-[138px] bg-blue-50 rounded-lg py-4 px-5 space-y-4'>
                        <Image className='w-8 h-8 mx-auto ' src={paw_print}/>
                        <h5 className='pet-history-card-title'>Easy to Train</h5>
                    </div>              
                </div>
                <div className='text-base font-normal leading-6 text-slate-600 space-y-8'>
                    <p>Dodo was rescued when he was just a two-month-old baby. A speeding vehicle had injured his forelimb, leaving him in tremendous pain. But we noticed that even in this situation of distress, his eyes spoke of mischief and he tried to find an opportunity to have fun.</p>
                    <p>Fast forward today, this little cutie has grown up to be a handsome hunk! He is one of the most loved kids of Sarvoham who is friendly and nice to every new person he meets.</p>
                    <p>Dodo is good with other dogs and is capable of brightening up your life, only if you give him a chance!</p>
                </div>
            </div>
        </div>
        <div className='w-full bg-blue-50 min-h-[294px] my-20'>
            <div className='container-section py-16  space-y-8'>
                <h5 className='text-slate-600 text-2xl leading-7.5 font-semibold '>Get in touch with the pet Owner</h5>

                <div className='flex items-center gap-6'>
                    <div className='relative h-26 w-26 rounded-full border border-primary overflow-hidden'>
                        <Image className='object-cover' fill src='/images/c53dfad92e5aa4af1359abb90e9f61b9.jpeg'/>
                    </div>

                    <div className='min-w-96'>
                        <h3 className='text-primary text-2xl-plus font-semibold leading-10'>Azad Srabon</h3>
                        <p className='text-slate-500 font-normal text-base leading-6 '>Sector 12, Uttara, Dhaka</p>
                    </div>
                    <button className='btn-primary px-14 py-4 w-[225px]'>Sent Message</button>
                </div>

            </div>
        </div>
    </div>
  )
}
