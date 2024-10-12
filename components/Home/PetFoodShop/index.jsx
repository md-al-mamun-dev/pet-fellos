import Image from "next/image"
import styles from './index.module.css'

export default function PetFoodShop() {
  return (
    <section className="w-full z-0 h-[447] bg-[#bcddee] relative ">
        <div className="absolute right-0 top-0 w-1/2 h-full" >
            <Image 
                alt="background"
                src="/images/2148982371 1.png" 
                className={`${styles.bg_image}`} fill/>
        </div>
        <div className="container-section py-14 z-20 h-full" >
            <h2 className=" text-6xl font-bold text-slate-600 font-pt-serif w-[507px] z-20 " >Have a PET Food Shop?</h2>
            <p className="text-lg font-normal mt-10 font-poppins w-[507px]" >
                On Pet Fellos, you can create a social account for your pet and share her daily activities.
            </p>
            <div className="mt-10">
                <button className="btn-primary">Create Pet Store</button>
                <button className="ml-8 btn-secondary">View Demo</button>

            </div>
        </div>
        </section>
  )
}
