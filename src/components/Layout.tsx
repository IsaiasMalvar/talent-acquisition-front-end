import React from "react"
import Header from "./Header"
import { Outlet } from "react-router"

const Layout = (): React.ReactElement => {
    return (
        <div className="h-screen w-screen flex flex-col bg-custom relative overflow-hidden">
            <Header className="" />
            <Outlet />
        </div>
    )
}

export default Layout
