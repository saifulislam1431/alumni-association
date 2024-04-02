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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageBlog from "../Pages/Dashboard/Admin/ManageBlog/ManageBlog";
import AdminRoute from "./AdminRoute";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageActivity from "../Pages/Dashboard/Admin/ManageActivity/ManageActivity";
import ManageCommittee from "../Pages/Dashboard/Admin/ManageCommittee/ManageCommittee";
import AlumniRoute from "./AlumniRoute";
import EditProfile from "../Pages/Dashboard/Alumni/EditProfile/EditProfile";
import EventsAndStories from "../Pages/Dashboard/Alumni/EventsAndStories/EventsAndStories";
import HiringOpportunities from "../Pages/Dashboard/Alumni/HiringOpportunities/HiringOpportunities";
import ShareBlog from "../Pages/Dashboard/Alumni/ShareBlog/ShareBlog";
import StudentProfile from "../Pages/Dashboard/Student/StudentProfile/StudentProfile";
import ApplyIntern from "../Pages/Dashboard/Student/ApplyIntern/ApplyIntern";
import JobDetails from "../Pages/Dashboard/Student/JobDetails/JobDetails";
import CreateAsAlumni from "../Pages/Dashboard/Student/CreateAsAlumni/CreateAsAlumni";

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
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
                children: [
                    {
                        path: "manage-blog",
                        element: <PrivateRoute><AdminRoute><ManageBlog /></AdminRoute></PrivateRoute>
                    },
                    {
                        path: "manage-users",
                        element: <PrivateRoute><AdminRoute><ManageUser /></AdminRoute></PrivateRoute>
                    },
                    {
                        path: "manage-activity",
                        element: <PrivateRoute><AdminRoute><ManageActivity /></AdminRoute></PrivateRoute>
                    },
                    {
                        path: "manage-committee",
                        element: <PrivateRoute><AdminRoute><ManageCommittee /></AdminRoute></PrivateRoute>
                    },
                    {
                        path: "alumni-profile",
                        element: <PrivateRoute><AlumniRoute><EditProfile /></AlumniRoute></PrivateRoute>
                    },
                    {
                        path: "manage-events-stories",
                        element: <PrivateRoute><AlumniRoute><EventsAndStories /></AlumniRoute></PrivateRoute>
                    },
                    {
                        path: "hiring-and-opportunity",
                        element: <PrivateRoute><AlumniRoute><HiringOpportunities /></AlumniRoute></PrivateRoute>
                    },
                    {
                        path: "share-blogs",
                        element: <PrivateRoute><AlumniRoute><ShareBlog /></AlumniRoute></PrivateRoute>
                    },
                    {
                        path: "my-profile",
                        element: <PrivateRoute><StudentProfile /></PrivateRoute>
                    },
                    {
                        path: "apply-intern",
                        element: <PrivateRoute><ApplyIntern /></PrivateRoute>
                    },
                    {
                        path: "apply-job-post/:id",
                        element: <PrivateRoute><JobDetails /></PrivateRoute>
                    },
                    {
                        path: "create-alumni-profile",
                        element: <PrivateRoute><CreateAsAlumni /></PrivateRoute>
                    },
                ]
            }
        ]
    }

]);