import Image from "next/image"
import BackgroundImage from "@/public/images/c53dfad92e5aa4af1359abb90e9f61b9.jpeg"

export default function PetSocial() {
  return (
    <div className="h-[447px] bg-[#D3D5C8] z-0 w-full mb-20 relative overflow-hidden">
        <div className=" w-full absolute h-full">
            <Image alt="pet photo"
                style={{maskImage:'linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 50%)', zIndex: '-1'}}
                src={BackgroundImage} 
                className="object-cover absolute -top-32 right-0"/>
        </div>

        <div className="bg-transparent container-section py-15">
            <div className="max-w-[758px] ">
                <h2 className=" text-6xl font-bold text-slate-600 font-pt-serif w-[655] z-20" >Want to create social account for <span className="text-primary">your PET</span> ?</h2>
                <p className="text-lg font-normal mt-10 font-poppins w-[655]" >
                    On Pet Fellos, you can create a social account for your pet and share her daily activities.
                </p>
                <div className="mt-10">
                    <button className="btn-primary">Create Pet Account</button>
                    <button className="ml-8 btn-secondary">View Demo</button>
                </div>
            </div>
        </div>        
    </div>
  )
}
