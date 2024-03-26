import { createBrowserRouter } from "react-router-dom";
import CompanyProfile from "./components/Sections/CompanyProfile";
import CreateSurveySection from "./components/Sections/CreateSurvey";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>HOME</div>,
  },
  {
    path: "createSurvey",
    element: <CreateSurveySection />,
  },
  {
    path: "profile",
    element: <CompanyProfile />,
  },
  {
    path: "*",
    element: <div>NOT FOUND</div>,
  },
]);

export default Router;
