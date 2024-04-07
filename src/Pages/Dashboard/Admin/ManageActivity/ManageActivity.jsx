import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import DashHead from '../../../../Components/DashHead/DashHead';
import { HiXMark } from 'react-icons/hi2';
import moment from 'moment';
import { IoMdTrash } from 'react-icons/io';
import Swal from 'sweetalert2';

const ManageActivity = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allEvents = [], refetch } = useQuery({
        queryKey: ["manage-events"],
        queryFn: async () => {
            const response = await axiosSecure.get("/get-all-events")
            return response.data
        }
    })

    const handleBlog = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/delete-single-event/${id}`)
                if (response.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The Blog has been deleted.",
                        icon: "success"
                    });
                    refetch();
                    let modalCheckbox = document.getElementById(id);
                    modalCheckbox.checked = false;
                }

            }
        });

    }
    return (
        <section>
            <DashHead title="Manage Activities" />

            <div className="overflow-x-auto my-14">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEvents?.map((blog, idx) => <tr key={blog?._id}>
                                <th>
                                    <label>
                                        {idx + 1}
                                    </label>
                                </th>
                                <td>
                                    {blog?._id}
                                </td>
                                <td>
                                    {blog?.name}
                                </td>
                                <td>{blog?.event_title}</td>
                                <th>
                                    <label htmlFor={blog?._id} className="btn btn-ghost btn-xs">Details</label>
                                    <input type="checkbox" id={blog?._id} className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box relative">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor={blog?._id}
                                                    className="absolute top-3 right-3 cursor-pointer hover:text-error"
                                                >
                                                    <HiXMark className="w-7 h-7" />
                                                </label>
                                            </div>
                                            <h3 className="font-bold text-lg">{blog?.event_title}</h3>
                                            <div className='my-4'>
                                                <img src={blog?.photo} alt="thumbnails" className='w-72' />
                                                <p className='pt-2'>{moment(blog?.date).format("LLL")}</p>
                                                <p className="py-4">{blog?.description}</p>

                                                <button className='mt-4 px-2 py-2 rounded-full border bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600 transition-all duration-300' onClick={() => handleBlog(blog?._id)}><IoMdTrash className='h-6 w-6' /></button>
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

export default ManageActivity;