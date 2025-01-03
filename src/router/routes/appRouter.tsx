import { createBrowserRouter, Navigate, RouteObject } from "react-router";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import CreateRequestPage from "../../pages/CreateRequestPage";
import ViewAllRequestsPage from "../../pages/ViewAllRequestsPage";
import RequestDetailPage from "../../pages/RequestDetailPage";
import TalentFulfillmentsPage from "../../pages/TalentFulfillmentsPage";
import TalentFulfillmentDetailPage from "../../pages/TalentFulfillmentDetailPage";
import CareerPortalPage from "../../pages/CareerPortalPage";
import JobPostDetailPage from "../../pages/JobPostDetailPage";

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
                path: "/talent-requests",
                element: <ViewAllRequestsPage />,
            },
            {
                path: "/talent-requests/:talentRequestId",
                element: <RequestDetailPage />,
            },
            {
                path: "/talent-fulfillments",
                element: <TalentFulfillmentsPage />,
            },
            {
                path: "/talent-fulfillments/:talentFulfillmentId",
                element: <TalentFulfillmentDetailPage />,
            },
            {
                path: "/career-portal",
                element: <CareerPortalPage />,
            },
            {
                path: "/career-portal/:jobPostId",
                element: <JobPostDetailPage />,
            },
        ],
    },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
