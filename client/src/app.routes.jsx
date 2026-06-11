import CustomerPage from "./pages/CustomerPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerPage />
  }
])