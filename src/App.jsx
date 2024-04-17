import InfoPage from "./Pages/InfoPage";
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import SigninPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import GoalPage from "./Pages/GoalPage";
import HomePage from "./Pages/HomePage";
import SchedulePage from "./Pages/SchedulePage";


const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <InfoPage /> ,
    },{
      path: "/login",
      element: <SigninPage /> ,
    },{
      path: "/register",
      element: <RegisterPage /> ,
    }
    ,{
      path: "/goal",
      element: <GoalPage /> ,
    }
    ,{
      path: "/home",
      element: <HomePage /> ,
    }
    ,{
      path: "/schedule",
      element: <SchedulePage /> ,
    }
  ]);
  return (
    <div className="h-screen w-screen p-4 sm:max-w-[640px] sm:m-auto sm:border-8 border-gray-300 sm:p-4 rounded-2xl">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
