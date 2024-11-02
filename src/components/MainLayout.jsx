import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navber from "./Navber"

export default function MainLayout() {
  return (
    <div>
        <Navber></Navber>
        <div className="min-h-[calc(100vh-288px)]"><Outlet></Outlet></div>
        <Footer></Footer>
    </div>
  )
}
