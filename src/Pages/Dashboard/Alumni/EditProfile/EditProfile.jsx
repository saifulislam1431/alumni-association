import React, { useState } from 'react';
import { HiMiniXMark, HiOutlineArrowUpTray, HiXMark } from 'react-icons/hi2';
import { IoMdCloudUpload } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAlumniProfile from '../../../../Hooks/useAlumniProfile';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import DashHead from '../../../../Components/DashHead/DashHead';
const token = import.meta.env.VITE_IMAGE_TOKEN;

const EditProfile = () => {

    const { alumniInfo, refetch } = useAlumniProfile();
    console.log(alumniInfo);
    const [axiosSecure] = useAxiosSecure();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [academicYear, setAcademicYear] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");

    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const { register, formState: { errors }, handleSubmit, reset, formState, watch } = useForm();

    const onSubmit = async (data) => {
        const image = data?.image;
        const formData = new FormData();
        formData.append("image", image[0]);
        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async (ResData) => {

                if (ResData) {
                    const newData = {
                        image: ResData?.data?.display_url
                    }

                    const response = await axiosSecure.patch(`/update-alumni-profile-picture/${alumniInfo?._id}`, newData)
                    if (response?.data?.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Profile Picture updated!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        refetch();
                        let modalCheckbox = document.getElementById("image-upload");
                        modalCheckbox.checked = false;
                    }


                }
            })

    }

    const handleEditProfile = async (id) => {
        const newData = {
            name: name === "" || null ? alumniInfo?.name : name,
            email: email === "" || null ? alumniInfo?.email : email,
            phone: phone === "" || null ? alumniInfo?.phone : phone,
            position: position === "" || null ? alumniInfo?.position : position,
            company: company === "" || null ? alumniInfo?.company : company,
            academicYear: academicYear === "" || null ? alumniInfo?.academicYear : academicYear,
            about: about === "" || null ? alumniInfo?.about : about,

        }
        // console.log(newData);
        const response = await axiosSecure.patch(`/edit-alumni-profile/${id}`, newData)
        console.log(response);
        if (response?.data?.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Profile updated!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            refetch();
            setAbout("");
            setEmail("");
            setName("");
            setCompany("");
            setAcademicYear("");
            setPosition("");
            setPhone("")
            let modalCheckbox = document.getElementById(id);
            modalCheckbox.checked = false;
        }

    }

    return (
        <section>
            <DashHead title="My Profile" />



            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative'>
                        <img src={alumniInfo?.photo} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="max-w-sm rounded-lg shadow-2xl absolute top-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white hover:opacity-50 transition-all duration-500">
                            <label htmlFor="image-upload" className="bg-primary px-2 py-2 rounded-full cursor-pointer "><HiOutlineArrowUpTray className='w-8 h-8' /></label>

                        </div>
                        <input type="checkbox" id="image-upload" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box relative">
                                <div className="mb-3">
                                    <label
                                        htmlFor="image-upload"
                                        className="absolute top-3 right-3 cursor-pointer hover:text-error"
                                    >
                                        <HiXMark className="w-7 h-7" />
                                    </label>
                                </div>
                                <h3 className="font-bold text-lg mb-4">Change your picture!</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full'>
                                    <div className="upload-files-container bg-secondary bg-opacity-20 p-8 rounded-lg flex items-center justify-center flex-col space-y-5  w-[350px] lg:w-full">
                                        <div className="border-2 border-dashed border-primary rounded-lg p-8 w-full text-center flex flex-col items-center">
                                            <label className="text-xl w-full text-center flex flex-col items-center cursor-pointer">
                                                <IoMdCloudUpload className="w-10 h-10 text-success" />
                                                <span className="text-primary brandFont">
                                                    <input
                                                        type="file"
                                                        {...register("image", { required: true })}
                                                        aria-invalid={errors.image ? "true" : "false"}
                                                        className="default-file-input opacity-0"
                                                        multiple
                                                    />
                                                    <span className="browse-files-text">browse file</span>
                                                    <span> from device</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    {errors.image?.type === 'required' && <p role="alert" className='text-error font-medium'>Photo is required</p>}

                                    <button type='submit' className='px-4 py-1 border mt-3 rounded text-sm font-semibold border-primary text-primary cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed'>Upload</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold brandFont text-primary">{alumniInfo?.name}</h1>
                        <p className="pt-6 pb-2 font-bold">Email: {alumniInfo?.email}</p>
                        <div className='overflow-auto'>
                            <label htmlFor={alumniInfo?._id} className="btn btn-primary">Edit</label>
                            <input type="checkbox" id={alumniInfo?._id} className="modal-toggle" />
                            <div className="modal my-10" role="dialog">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-primary">Edit Info</h3>
                                    <div className='flex flex-col space-y-4 w-full my-7'>

                                        <label className='font-bold brandFont'>Name<sup className='text-error'>*</sup></label>
                                        <input type='text' defaultValue={alumniInfo?.name ? alumniInfo?.name : ""} required placeholder='Enter Your Name'
                                            className='inputField' onChange={(e) => setName(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}

                                        <label className='font-bold brandFont'>Email<sup className='text-error'>*</sup></label>
                                        <input type='email' defaultValue={alumniInfo?.email ? alumniInfo?.email : ""} required placeholder='Enter Your Email'
                                            className='inputField' onChange={(e) => setEmail(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}

                                        <label className='font-bold brandFont'>Phone<sup className='text-error'>*</sup></label>
                                        <input type='tel' defaultValue={alumniInfo?.phone ? alumniInfo?.phone : ""} required placeholder='Enter Your Phone'
                                            className='inputField' onChange={(e) => setPhone(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone is required</p>}

                                        <label className='font-bold brandFont'>Current Company Name<sup className='text-error'>*</sup></label>
                                        <input type='text' defaultValue={alumniInfo?.company ? alumniInfo?.company : ""} required placeholder='Expert In'
                                            className='inputField' onChange={(e) => setCompany(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Company name In is required</p>}

                                        <label className='font-bold brandFont'>Position<sup className='text-error'>*</sup></label>
                                        <input type='text' defaultValue={alumniInfo?.position ? alumniInfo?.position : ""} required placeholder='Rating'
                                            className='inputField' onChange={(e) => setPosition(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Position is required</p>}

                                        <label className='font-bold brandFont'>Academic Year<sup className='text-error'>*</sup></label>
                                        <input type='text' defaultValue={alumniInfo?.academicYear ? alumniInfo?.academicYear : ""} required placeholder='Total Case'
                                            className='inputField' onChange={(e) => setAcademicYear(e.target.value)} />
                                        {errors?.rating?.type === 'required' && <p role="alert" className='text-error font-medium'>Academic Year is required</p>}

                                        <label className='font-bold brandFont'>About Yourself<sup className='text-error'>*</sup></label>
                                        <textarea rows="5" cols="10" required defaultValue={alumniInfo?.about ? alumniInfo?.about : ""} placeholder="Description"
                                            className='inputField' onChange={(e) => setAbout(e.target.value)} />
                                        {errors.comment?.type === 'required' && <p role="alert" className='text-error font-medium'>About is required</p>}

                                        <div className='text-center'>
                                            <button onClick={() => handleEditProfile(alumniInfo?._id)} className='myBtn text-center'>Submit</button>
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <label htmlFor={alumniInfo?._id} className="absolute top-3 right-3 cursor-pointer hover:text-error"><HiMiniXMark className='w-6 h-6' /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditProfile;