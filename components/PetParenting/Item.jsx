import Image from "next/image"

export default function Item() {
  return (
    <div className="w-max">
        <div>
            <Image alt="pet image" className="rounded-lg object-cover" width={445} height={270}  src="/images/aa040cc08ca330656651adce3a85cf90.jpeg" />
        </div>
        <div className="mt-4">
            <h4 className="text-slate-600 font-medium text-xl">The Needs of indoor cats</h4>
            <p className="text-slate-400 font-normal text-sm mt-2 uppercase">IN LIFESTYLE | ARTICLE</p>
        </div>
    </div>
  )
}
