import { Outlet } from "react-router-dom"
import { DashboardNavbar } from "./components/DashboardNavbar"
import { DashboardSide } from "./components/DashboardSide"




export const Dashboard = () => {


    return ( 
        <>
        <DashboardSide/>
        <DashboardNavbar/>
        <Outlet/>
        </>
    
    )
}