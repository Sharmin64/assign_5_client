import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Service from "../pages/service/Service";
import Booking from "../pages/booking/Booking";
import LatestReviewList from "../pages/latestReview/LatestReviewList";
import ServiceDetails from "../pages/service/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/latest-review-list",
        element: <LatestReviewList />,
      },
    ],
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
    path: "/service",
    element: <Service />,
  },
  {
    path: "/service-details",
    element: <ServiceDetails />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
]);
