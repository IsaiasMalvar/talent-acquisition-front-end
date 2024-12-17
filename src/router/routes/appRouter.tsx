import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import CreateRequestPage from "../../pages/CreateRequestPage";
import ViewAllRequests from "../../pages/ViewAllRequests";

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
            {
                path: "/view-all-requests",
                element: <ViewAllRequests />,
            },
        ],
    },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
