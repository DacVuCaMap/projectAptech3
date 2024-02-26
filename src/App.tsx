import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Categories from "./pages/categories/Categories";
import Test from "./pages/test/test";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
function App() {

  const Layout =()=>{
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/users",
        element:<Users />
      },
      {
        path:"/categories",
        element:<Categories />
      },
      {
        path:"/users",
        element:<Users />
      },
      {
        path:"/test",
        element:<Test />
      }
    ]
   },
   {
    path:"/login",
    element:<Login />
   }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
