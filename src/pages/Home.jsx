import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


export default function Home() {
    const categories = useLoaderData();
    // console.log(categories)
    
  return (
    
    <div>
        <div className="pt-4">
           <Heading title={'Welcome to my coffee shop'}></Heading>
        </div>
        <Banner></Banner>
        {/* reuseable component */}
        <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}></Heading>


        <Categories categories={categories}></Categories>

        <Outlet/>
        
    </div>
  )
}
 