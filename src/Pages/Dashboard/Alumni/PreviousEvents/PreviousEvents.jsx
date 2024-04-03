import React from 'react';
import { Link } from 'react-router-dom';
import DashHead from '../../../../Components/DashHead/DashHead';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const PreviousEvents = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: allEvents = [], refetch } = useQuery({
        queryKey: ["allAlumniEvents", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/alumni-events/${user?.email}`)
            return res.data;
        }
    })

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this event!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/alumni-events-delete/${id}`)
                if (response.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "The event has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
    }
    return (
        <section>
            <DashHead title="Previous Events" />

            <div className='my-12 text-center'>
                <Link to="/dashboard/create-events" className='myBtn'>Create Events</Link>
            </div>
            <div>
                <h1 className='font-bold text-center brandFont text-3xl text-primary'>Previous Events</h1>
                <div className='my-10 px-3 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-3'>
                    {
                        allEvents?.length > 0 ? allEvents?.map((event) => <div className="card w-96 bg-base-100 shadow-xl" key={event?._is}>
                            <figure><img src={event?.photo} alt="photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {event?.event_title}
                                </h2>
                                <p>{event?.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Date: </span> {event?.date}</div>
                                    <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Posted By: </span> {event?.name}</div>
                                </div>
                                <div className='my-2'>
                                    <button className='font-semibold text-white bg-red-600 px-5 py-2 rounded-md' onClick={() => handleDelete(event?._id)}>Delete</button>
                                </div>
                            </div>
                        </div>) : <p className='font-bold brandFont text-red-500 text-3xl text-center flex items-center justify-center w-full'>No Event Created!</p>
                    }
                </div>
            </div>

        </section>
    );
};

export default PreviousEvents;