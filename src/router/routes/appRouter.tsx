import { createBrowserRouter, Navigate, RouteObject } from "react-router"
import App from "../../App"
import HomePage from "../../pages/HomePage"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/tes",
                element: <div>heythere</div>,
            },
        ],
    },
]

const appRouter = createBrowserRouter(routes)

export default appRouter
