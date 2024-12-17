import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import CreateRequestPage from "../../pages/CreateRequestPage";

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
                path: "/create-new-request",
                element: <CreateRequestPage />,
            },
        ],
    },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
