import Hero from '@/components/Home/Hero'
import ReadyToAdopt from '@/components/Home/ReadyToAdopt'
import HowAdopionWorks from '@/components/Home/HowAdoptionWorks'
import PetFoodShop from '@/components/Home/PetFoodShop'
import PetParenting from '@/components/Home/PetParenting'
import PetSocial from '@/components/Home/PetSocial'

export default function Home() {
  return (
    <>
        <Hero/>
        <ReadyToAdopt/>
        <HowAdopionWorks/>
        <PetFoodShop/>
        <PetParenting/>
        <PetSocial/>
    </>
  );
}
