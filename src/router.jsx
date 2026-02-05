import { createHashRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;