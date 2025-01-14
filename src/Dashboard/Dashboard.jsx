import { Outlet } from "react-router-dom"
import { DashboardSide } from "./DashboardSide"


export const Dashboard = () => {


    return ( 
        <>
        <DashboardSide/>
        <Outlet/>
        </>
    
    )
}