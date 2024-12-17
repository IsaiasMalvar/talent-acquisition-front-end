import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router";
import appRouter from "./router/routes/appRouter.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={appRouter} />
            <ToastContainer />
        </Provider>
    </StrictMode>
);
