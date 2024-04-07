import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import DashHead from '../../../../Components/DashHead/DashHead';
import { IoMdTrash } from 'react-icons/io';
import { HiMiniXMark } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';

const ManageUser = () => {
    const [error, seError] = useState("");
    const [committeeRule, seCommitteeRule] = useState("")
    const [axiosSecure] = useAxiosSecure();
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["manage-users"],
        queryFn: async () => {
            const response = await axiosSecure.get("/get-all-user")
            return response.data
        }
    })
    // console.log(allUsers);

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert the user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/user-delete/${id}`)
                if (response.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The user has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
    }

    const handleAdmin = async (id) => {
        const user = allUsers?.find(user => user?._id === id)
        Swal.fire({
            title: "Are you sure?",
            text: "The user will be admin of this site!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.patch(`/users/admin/${id}`)
                if (response.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user?.name} is an admin now!`,
                        icon: "success"
                    });
                    refetch();
                }

            }
        });

    }

    const handleCommitteeRule = async (id) => {
        const user = allUsers?.find(user => user?._id === id)
        Swal.fire({
            title: "Are you sure?",
            text: `The user will be ${committeeRule} of the committee!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.patch(`/users/update-committee/${id}`, { committeeRule: committeeRule })
                if (response.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user?.name} is a ${committeeRule} of committee now!`,
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
    }

    const handleRemoveAdmin = async (id) => {
        const user = allUsers?.find(user => user?._id === id)
        Swal.fire({
            title: "Are you sure?",
            text: "The user will be remove admin access of this site!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.patch(`/users/remove/admin/${id}`)
                if (response.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user?.name} is an user now!`,
                        icon: "success"
                    });
                    refetch();
                }

            }
        });

    }
    return (
        <section>
            <DashHead title="Manage Users" />

            <div className="overflow-x-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map(user => <tr key={user?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photo} alt="User" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                            <span className="badge badge-ghost badge-sm">{user?.role}</span>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                    <br />
                                    <div className="text-sm opacity-50">{user?.phone}</div>
                                </td>
                                <th className='flex items-center gap-3'>
                                    <button className='px-2 py-2 rounded-full border bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer' onClick={() => handleDelete(user?._id)}><IoMdTrash className='h-6 w-6' /></button>

                                    <button disabled={user?.role === "admin" ? true : false} className='px-2 py-2 rounded border bg-green-600 text-white border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed' onClick={() => handleAdmin(user?._id)}>Admin</button>

                                    <button className='px-2 py-2 rounded-full border bg-primary text-white border-primary hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed' onClick={() => handleRemoveAdmin(user?._id)} disabled={user?.role === "admin" ? false : true}>Remove Admin</button>

                                    <label htmlFor={user?._id} className='px-2 py-2 rounded-full border bg-primary text-white border-primary hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed'>Appoint as committee</label>
                                    <input type="checkbox" id={user?._id} className="modal-toggle" />
                                    <div className="modal my-10" role="dialog">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-primary">Make a committee member</h3>
                                            <div className='flex flex-col space-y-4 w-full my-7'>

                                                <label className='font-bold brandFont'>Name</label>
                                                <input type='text' defaultValue={user?.name ? user?.name : ""} required placeholder='Enter Your Name'
                                                    className='inputField disabled:opacity-70' disabled={true} />

                                                <label className='font-bold brandFont'>Email</label>
                                                <input type='email' defaultValue={user?.email ? user?.email : ""} required placeholder='Enter Your Email'
                                                    className='inputField disabled:opacity-70' disabled={true} />

                                                <label className='font-bold brandFont'>Phone</label>
                                                <input type='tel' defaultValue={user?.phone ? user?.phone : ""} required placeholder='Enter Your Phone'
                                                    className='inputField disabled:opacity-70' disabled={true} />

                                                <label className='font-bold brandFont'>Current Company Name</label>
                                                <input type='text' defaultValue={user?.company ? user?.company : ""} required placeholder='Expert In'
                                                    className='inputField disabled:opacity-70' disabled={true} />


                                                <label className='font-bold brandFont'>Position</label>
                                                <input type='text' defaultValue={user?.position ? user?.position : ""} required placeholder='Rating'
                                                    className='inputField disabled:opacity-70' disabled={true} />

                                                <label className='font-bold brandFont'>Academic Year</label>
                                                <input type='text' defaultValue={user?.academicYear ? user?.academicYear : ""} required placeholder='Total Case'
                                                    className='inputField disabled:opacity-70' disabled={true} />


                                                <label className='font-bold brandFont'>Committee Position<sup className='text-error'>*</sup></label>
                                                <input type='text' defaultValue={user?.committeeRule ? user?.committeeRule : ""} required placeholder='Committee Rule'
                                                    className='inputField' onChange={(e) => seCommitteeRule(e.target.value)} />
                                                {error && <p role="alert" className='text-error font-medium'>Committee Rule In is required</p>}

                                                <label className='font-bold brandFont'>About User</label>
                                                <textarea rows="5" cols="10" required defaultValue={user?.about ? user?.about : ""} placeholder="Description"
                                                    className='inputField disabled:opacity-70' disabled={true} />

                                                <div className='text-center'>
                                                    <button onClick={() => handleCommitteeRule(user?._id)} className='myBtn text-center'>Save Changes</button>
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <label htmlFor={user?._id} className="absolute top-3 right-3 cursor-pointer hover:text-error"><HiMiniXMark className='w-6 h-6' /></label>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageUser;