import React, { useEffect } from 'react';
import useAlumniProfile from '../../../../Hooks/useAlumniProfile';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import imgLogo from "../../../../assets/banner/imglogo.png"
import DashHead from '../../../../Components/DashHead/DashHead';

const token = import.meta.env.VITE_IMAGE_TOKEN;

const CreateEvents = () => {
    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`;
    const { alumniInfo, refetch } = useAlumniProfile();
    const [axiosSecure] = useAxiosSecure();
    const { register, formState: { errors }, handleSubmit, reset, formState, watch } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const image = data?.photo;
        // console.log(image[0]);
        const formData = new FormData();
        formData?.append("image", image[0]);

        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async (ResData) => {
                console.log(ResData)
                if (ResData) {
                    const newUser = {
                        email: data?.author_email,
                        name: data?.author,
                        photo: ResData?.data?.url || "https://i.ibb.co/f0sXRWP/have-an-upcoming-event-1.jpg",
                        event_title: data?.event_title,
                        date: data?.date,
                        description: data?.description

                    }

                    const response = await axiosSecure.post("/create-event", newUser)
                    if (response?.data?.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Event Created!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        reset();
                    }

                }

            })
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])

    return (
        <section>
            <DashHead title="Create An Event" />


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto my-20'>

                <div className='flex flex-col items-center justify-center'>
                    <input {...register("photo", { required: true })} type="file" id='file' className='hidden' />
                    <label for="file" className=' border rounded-full'>
                        <img className='w-20 rounded-full hover:border-blue-500 border-4 transform duration-500' src={imgLogo} alt="" />
                    </label>
                    <span className='font-bold brandFont mt-2'>Event Image<sup className='text-error'>*</sup></span>
                </div>
                <label className='font-bold brandFont'>Author Name<sup className='text-error'>*</sup></label>
                <input
                    type='text'
                    placeholder='Your Name'
                    defaultValue={alumniInfo?.name ? alumniInfo?.name : ""}
                    {...register('author', { required: true })}
                    aria-invalid={errors.author ? 'true' : 'false'}
                    className='inputField w-96 lg:w-[500px]'
                />
                {errors.author?.type === 'required' && (
                    <p role="alert" className='text-error font-medium'>Author name is required</p>
                )}


                <label className='font-bold brandFont'>Author Email<sup className='text-error'>*</sup></label>
                <input
                    type='text'
                    placeholder='Your Name'
                    defaultValue={alumniInfo?.email ? alumniInfo?.email : ""}
                    {...register('author_email', { required: true })}
                    aria-invalid={errors.author_email ? 'true' : 'false'}
                    className='inputField w-96 lg:w-[500px]'
                />
                {errors.author_email?.type === 'required' && (
                    <p role="alert" className='text-error font-medium'>Author email is required</p>
                )}


                <label className='font-bold brandFont'>Event Title<sup className='text-error'>*</sup></label>
                <input
                    type='text'
                    placeholder='Your event title'
                    {...register('event_title', { required: true })}
                    aria-invalid={errors.event_title ? 'true' : 'false'}
                    className='inputField w-96 lg:w-[500px]'
                />
                {errors.event_title?.type === 'required' && (
                    <p role="alert" className='text-error font-medium'>Event title is required</p>
                )}

                <label className='font-bold brandFont'>Date</label>
                <input
                    type='date'
                    {...register('date')}
                    className='inputField w-96 lg:w-[500px]'
                />

                <label className='font-bold brandFont'>Description</label>
                <textarea
                    rows="5"
                    placeholder='Enter Description'
                    {...register('description', { required: true })}
                    className='inputField w-96 lg:w-[500px]'
                />
                {errors.description?.type === 'required' && (
                    <p role="alert" className='text-error font-medium'>Description is required</p>
                )}


                <input type="submit" value="Sign Up" className="btn btn-primary w-96 lg:w-[500px]" />
            </form>
        </section>
    );
};

export default CreateEvents;