import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useProfile from '../../../../Hooks/useProfile';
import DashHead from '../../../../Components/DashHead/DashHead';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateAsAlumni = () => {
    const { register, formState: { errors }, handleSubmit, reset, formState, watch } = useForm();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const { userInfo, refetch } = useProfile();

    const onSubmit = async (data) => {
        const response = await axiosSecure.patch(`/create-new-alumni/${userInfo?._id}`, data)

        if (response?.data?.modifiedCount) {
            Swal.fire({
                title: 'Success!',
                text: 'Profile Created!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            navigate("/")
            refetch();
            reset();
        }

    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])

    return (
        <section>
            <DashHead title="Create Alumni Profile" />

            <div className='w-full my-12'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Create New Alumni</h2>

                    {/* Alumni Name */}
                    <div className="mb-4 w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Student Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={userInfo?.name}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("name", { required: true })}
                        />
                    </div>

                    {/* Alumni Email */}
                    <div className="mb-4 w-full">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Student Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            defaultValue={userInfo?.email}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("email", { required: true })}
                        />
                    </div>

                    {/* Alumni Email */}
                    <div className="mb-4 w-full">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Student Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            defaultValue={userInfo?.phone ? userInfo?.phone : ""}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("phone", { required: true })}
                        />
                    </div>

                    {/* Alumni Image URL */}
                    <div className="mb-4 w-full">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            defaultValue={userInfo?.photo}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("photo", { required: true })}
                        />
                    </div>

                    {/* position */}
                    <div className="mb-4 w-full">
                        <label htmlFor="expert_in" className="block text-sm font-medium text-gray-600">
                            Current Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("position", { required: true })}
                        />
                    </div>

                    {/* Company */}
                    <div className="mb-4 w-full">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-600">
                            Current Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("company", { required: true })}
                        />
                    </div>

                    {/* Company */}
                    <div className="mb-4 w-full">
                        <label htmlFor="academicYear" className="block text-sm font-medium text-gray-600">
                            Academic Year
                        </label>
                        <input
                            type="text"
                            id="academicYear"
                            name="academicYear"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            {...register("academicYear", { required: true })}
                        />
                    </div>


                    {/* About */}
                    <div className="mb-4 w-full">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-600">
                            About Your Self
                        </label>
                        <textarea
                            id="about"
                            name="about"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md lg:w-96 "
                            rows="4"
                            {...register("about", { required: true })}
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md lg:w-96  hover:bg-blue-600"
                    >
                        Switch
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateAsAlumni;