import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Booking from "../pages/booking/Booking";
import LatestReviewList from "../pages/latestReview/LatestReviewList";
import Service from "../pages/service/Service";
import ServiceDetails from "../pages/service/ServiceDetails";
import Error from "../pages/error/Error";
import Dashboard from "../components/layout/DashboardLayout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/latest-review-list",
        element: <LatestReviewList />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/serviceDetails",
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);
