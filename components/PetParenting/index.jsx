import Item from './Item'

export default function PetParenting() {
  return (
    <div className="mt-28 mb-36">
      <h2 className="text-slate-600 text-6xl font-semibold w-max mx-auto">Pet Parenting</h2>
      <div className="mt-8 text-slate-600 flex justify-center gap-x-8 px-14 mt-16">
          <Item/>
          <Item/>
          <Item/>
      </div>
    </div>
  )
}
