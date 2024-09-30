import Image from "next/image"
export default function HowAdoptionWorks() {
  return (
    <div className="mt-28 mb-36">
        <h2 className="text-slate-600 text-6xl font-semibold w-max mx-auto">How Adoption Works </h2>
        <div className=" max-w-screen-2xl px-14 mx-auto flex justify-center gap-x-14 mt-12">
            <div className="py-6 px-8 max-w-72 rounded-lg shadow-xl ">
                <div className="w-max p-4 rounded-full bg-blue-100 mx-auto">
                    <Image height="24" width="24" src="/icons/icon_search.svg" alt="search icon" />
                </div>
                <h3 className="text-primary font-medium text-2xl mt-4 text-center">Find Your Pet </h3>
                <p className="text-base font-normal text-slate-500 mt-2 text-center">Lorem ipsum dolor sit amet consectetur. Sollicitudin viverra tempor at amet non imperdiet in.</p>
            </div>

            <div className="py-6 px-8 max-w-72 rounded-lg shadow-xl">
                <div className="w-max p-4 rounded-full bg-blue-100 mx-auto">
                    <Image height="24" width="24" src="/icons/heart-handshake.svg" alt="search icon" />
                </div>
                <h3 className="text-primary font-medium text-2xl mt-4 text-center">Meet Your Pet</h3>
                <p className="text-base font-normal text-slate-500 mt-2 text-center">Lorem ipsum dolor sit amet consectetur. Sollicitudin viverra tempor at amet non imperdiet in.</p>
            </div>

            <div className="py-6 px-8 max-w-72 rounded-lg shadow-xl">
                <div className="w-max p-4 rounded-full bg-blue-100 mx-auto">
                    <Image height="24" width="24" src="/icons/house.svg" alt="search icon" />
                </div>
                <h3 className="text-primary font-medium text-2xl mt-4 text-center">Adopt Your Pet </h3>
                <p className="text-base font-normal text-slate-500 mt-2 text-center">Lorem ipsum dolor sit amet consectetur. Sollicitudin viverra tempor at amet non imperdiet in.</p>
            </div>
        </div>
    </div>
  )
}
