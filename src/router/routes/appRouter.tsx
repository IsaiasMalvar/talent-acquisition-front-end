import { createBrowserRouter, RouteObject } from "react-router"
import App from "../../App"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
    },
]

const appRouter = createBrowserRouter(routes)

export default appRouter
