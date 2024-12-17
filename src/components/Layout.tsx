import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = (): React.ReactElement => {
    return (
        <div className="min-h-screen w-full flex flex-col bg-custom relative">
            <Header className="" />
            <Outlet />
        </div>
    );
};

export default Layout;
