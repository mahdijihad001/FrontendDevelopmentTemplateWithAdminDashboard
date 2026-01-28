import { createBrowserRouter } from "react-router";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "../admin/AdminDashboard";
import DashboardOverview from "../admin/DashboardOverview";
import App from "../App";
import ProductHome from "../page/product/ProductHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <ProductHome /> }, // default main content
            // add more public routes here if needed
        ],
    },
    // Admin Route
    {
        path: "/admin",
        element: <AdminRoute />,
        children: [
            {
                path: "",
                element: <AdminDashboard />,
                children: [
                    { path: "", element: <DashboardOverview /> },  // Add this!
                    { path: "my-jobs", element: <h1>My Jobs</h1> },
                    { path: "message", element: <h1>Message</h1> },
                    { path: "setting", element: <h1>Setting</h1> }
                ]
            }
        ]
    }
]);

export default router