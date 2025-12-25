import { createBrowserRouter } from "react-router";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "../admin/AdminDashboard";
import DashboardOverview from "../admin/DashboardOverview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
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