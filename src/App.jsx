import { RouterProvider } from "react-router-dom";
import Header from "./components/Sections/HeaderMenu/Header";
import Router from "./Router";
import { UserContext } from "./context/Context";
import { useContext } from "react";
import Login from "./components/Sections/Login";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className=" min-h-screen bg-gray-200">
      <Header />
      <RouterProvider router={Router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
}

export default App;
