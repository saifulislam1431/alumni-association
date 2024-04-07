import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HiChevronRight } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import useAlumni from "../../../Hooks/useAlumni";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAdmin } = useAdmin();
    const { isAlumni } = useAlumni();
    console.log("admin", isAdmin);
    console.log("alumni", isAlumni);
    const { user, logOut } = useAuth();
    // console.log(user);
    const handleOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'logout successful!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }
    const navItem = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Home</NavLink></li>

        <li><NavLink to="/committee" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Committee <HiChevronRight className='h-5 w-5' /></NavLink></li>

        <li><NavLink to="/directory" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Directory <HiChevronRight className='h-5 w-5' /></NavLink></li>

        <li><NavLink to="/career" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Career <HiChevronRight className='h-5 w-5' /></NavLink></li>

        <li><NavLink to="/event" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Event <HiChevronRight className='h-5 w-5' /></NavLink></li>

        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Blogs <HiChevronRight className='h-5 w-5' /></NavLink></li>


        {
            user && <>
                <li><NavLink to={`${isAlumni ? "/dashboard/alumni-profile" : isAdmin ? "/dashboard/manage-users" : "/dashboard/my-profile"}`} className={({ isActive }) => (isActive ? "navActive" : "navDefault")}>Profile <HiChevronRight className='h-5 w-5' /></NavLink></li>
            </>
        }

        {
            user ? <li><button className='myBtn lg:hidden' onClick={handleOut}>Logout <HiChevronRight className='h-5 w-5' /></button></li> : <li className='lg:hidden'>
                <Link to="/login" className="myBtn">Join Us</Link>
            </li>
        }
    </>

    const logoContainer = <>
        <Link to="/" className='flex flex-col items-center'>
            <h1 className="brandFont font-bold text-5xl text-primary">AA</h1>
            <p className='font-bold brandFont -mt-2'>Alumni Association</p>
        </Link>
    </>
    return (
        <div className="navbar navBg  sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                {
                    logoContainer
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ? <button className='myBtn inline-flex items-center' onClick={handleOut}>Logout <HiChevronRight className='h-5 w-5' /></button> :
                        <Link to="/login" className="myBtn">Join Us</Link>
                }
            </div>

            <div className="navbar-end flex lg:hidden">
                <label className="btn btn-circle swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* hamburger icon */}
                    <svg onClick={() => setIsOpen(!isOpen)} className="swap-off fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */}
                    <svg onClick={() => setIsOpen(!isOpen)} className="swap-on fill-error" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>


                <ul className={`${isOpen ? "absolute top-20 left-0 space-y-5 flex flex-col items-center navBg w-full py-6 transition-all duration-300" : "absolute -top-[500px] left-0 space-y-5 flex flex-col items-center bg-success bg-opacity-40 w-full py-6 transition-all duration-300"}`}>
                    {navItem}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;