import { Outlet } from "react-router-dom"
import { DashboardMenu } from "./components/DashboardMenu"




export const Dashboard = () => {


    return ( 
        <>
        <DashboardMenu/>
        <Outlet/>
        </>
    )
}