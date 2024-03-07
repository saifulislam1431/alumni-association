import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Blog from "../Pages/Blog/Blog";
import Committee from "../Pages/Committee/Committee";
import Alumnies from "../Pages/Alumnies/Alumnies";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Careers from "../Pages/Careers/Careers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/event",
                element: <Events />
            },
            {
                path: "/gallery",
                element: <GalleryPage />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/committee",
                element: <Committee />
            },
            {
                path: "/directory",
                element: <Alumnies />
            },
            {
                path: "/career",
                element: <Careers />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);