import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import CreateRequestPage from "../../pages/CreateRequestPage";
import ViewAllRequestsPage from "../../pages/ViewAllRequestsPage";
import RequestDetailPage from "../../pages/RequestDetailPage";
import TalentFulfillmentsPage from "../../pages/TalentFulfillmentsPage";

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
                element: <ViewAllRequestsPage />,
            },
            {
                path: "/talent-request/:talentRequestId",
                element: <RequestDetailPage />,
            },
            {
                path: "/talent-fulfillments",
                element: <TalentFulfillmentsPage />,
            },
        ],
    },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
