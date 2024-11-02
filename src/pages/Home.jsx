import Banner from "../components/Banner";
import Heading from "../components/Heading";


export default function Home() {
  return (
    
    <div>
        <Heading title={'Welcome to my coffee shop'} ></Heading>
        <Banner></Banner>
        {/* reuseable component */}
        <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific cofees that fit in your taste'}></Heading>
    </div>
  )
}
