import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HiBars3BottomLeft, HiCreditCard, HiHome, HiMiniAdjustmentsHorizontal, HiMiniListBullet, HiMiniPencilSquare, HiMiniPlus, HiMiniUserGroup, HiOutlineCheckBadge, HiOutlinePencilSquare, HiOutlinePlus, HiOutlineRss, HiOutlineStar, HiOutlineUserCircle, HiOutlineUserGroup, HiOutlineUserPlus, HiPencilSquare, HiShoppingBag } from 'react-icons/hi2';

import { IoIosHeadset, IoMdCheckmarkCircleOutline } from "react-icons/io";

import useAdmin from "../../Hooks/useAdmin";
import useAlumni from "../../Hooks/useAlumni";

const Dashboard = () => {
    const { isAdmin } = useAdmin();
    const { isAlumni } = useAlumni();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-2 top-2"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
                    <Link to="/" className='flex flex-col items-center'>
                        <h1 className="brandFont font-bold text-5xl text-primary">AA</h1>
                        <p className='font-bold brandFont -mt-2'>Alumni Association</p>
                    </Link>
                    {/* Sidebar content here */}



                    {
                        isAdmin ?
                            <>
                                <NavLink to="/dashboard/manage-committee" className={({ isActive }) => (isActive ? "dash-active mt-5" : "dash-default mt-5")}><HiMiniAdjustmentsHorizontal className='inline-flex items-center h-6 w-6' /> Manage Committee</NavLink>


                                <NavLink to="/dashboard/manage-users" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiMiniUserGroup className='inline-flex items-center h-6 w-6' /> Manage Users</NavLink>

                                <NavLink to="/dashboard/manage-activity" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><IoIosHeadset className='inline-flex items-center h-6 w-6' /> Manage Activity</NavLink>

                                <NavLink to="/dashboard/manage-blog" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiOutlinePencilSquare className='inline-flex items-center h-6 w-6' /> Manage Blog</NavLink>
                            </> : isAlumni ? <>

                                <NavLink to="/dashboard/alumni-profile" className={({ isActive }) => (isActive ? "dash-active mt-5" : "dash-default mt-5")}><HiOutlineUserCircle className='inline-flex items-center h-6 w-6' /> My Profile</NavLink>

                                <NavLink to="/dashboard/manage-events-stories" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiCreditCard className='inline-flex items-center h-6 w-6' /> Events And Stories</NavLink>

                                <NavLink to="/dashboard/hiring-and-opportunity" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiOutlineUserPlus className='inline-flex items-center h-6 w-6' /> Hiring Opportunity</NavLink>

                                <NavLink to="/dashboard/share-blogs" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiMiniPencilSquare className='inline-flex items-center h-6 w-6' /> Share-blogs</NavLink>
                            </>

                                :
                                <>

                                    <NavLink to="/dashboard/my-profile" className={({ isActive }) => (isActive ? "dash-active mt-5" : "dash-default mt-5")}><HiOutlineUserCircle className='inline-flex items-center h-6 w-6' /> My Profile</NavLink>

                                    <NavLink to="/dashboard/apply-intern" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><IoMdCheckmarkCircleOutline className='inline-flex items-center h-6 w-6' /> Job Applied</NavLink>
                                </>
                    }

                    <li className='my-8 divide-x-4'>

                    </li>

                    <NavLink to="/" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiHome className='inline-flex items-center gap-2 h-5 w-5' /> Home</NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;