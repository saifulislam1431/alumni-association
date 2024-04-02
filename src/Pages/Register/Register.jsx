import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import img from "../../assets/banner/signUp.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import imgLogo from "../../assets/banner/imglogo.png"
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';


const token = import.meta.env.VITE_IMAGE_TOKEN;

const Register = () => {
    const { updateUser, signUp, userVerify } = useAuth();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const [error, setError] = useState("");
    const [uses, setUses] = useState("alumni");
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const { register, formState: { errors }, handleSubmit } = useForm();
    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`;

    const onSubmit = (data) => {
        console.log("Click");
        const image = data?.photo;
        // console.log(image[0]);
        const formData = new FormData();
        formData?.append("image", image[0])

        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if (password.length < 6) {
            return setError("Password must be six characters in length")
        }
        if (password !== confirmPassword) {
            return setError("Password doesn't match")
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            return setError("At least one upper case include in your password")
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return setError("At least one special character include in your password")
        }



        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(ResData => {
                console.log(ResData)
                if (ResData) {
                    const newUser = {
                        email: data?.email,
                        name: data?.name,
                        phone: data?.phone,
                        photo: ResData?.data?.url || "https://i.ibb.co/yyYWbyJ/user.png",
                        role: uses,
                        batch: data?.batch,
                        department: data?.department,
                        company: data?.company,
                        position: data?.position,
                        academicYear: data?.academicYear
                    }
                    signUp(data?.email, data?.password)
                        .then((res) => {
                            const loggedUser = res?.user;

                            updateUser(loggedUser, data?.name)
                                .then(async () => {
                                    userVerify()
                                        .then(async () => {
                                            // Swal.fire({
                                            //     title: 'Success!',
                                            //     text: 'Sign up successful and check your email to verify!',
                                            //     icon: 'success',
                                            //     confirmButtonText: 'Ok'
                                            // })
                                            const res = await axios.post('http://localhost:5000/users', newUser);
                                            // console.log(res.data)
                                            if (res?.data?.insertedId) {
                                                navigate(from, { replace: true })
                                                Swal.fire({
                                                    title: 'Success!',
                                                    text: 'Sign up successful and check your email to verify!',
                                                    icon: 'success',
                                                    confirmButtonText: 'Ok'
                                                })
                                            }
                                        })
                                })


                        })
                        .catch(error => {
                            Swal.fire({
                                title: 'Error!',
                                text: error.message,
                                icon: 'error',
                                confirmButtonText: 'Cool'
                            })

                        })

                }

            })

        // console.log(data);


    }


    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }


    return (
        <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2 justify-center items-center'>

            {/* left part */}
            <div className='p-8 w-full lg:w-1/2 h-full border-r-2 bg-white relative'>
                <Link to="/" className='inline-flex items-center gap-2   text-xl font-bold absolute top-0'><HiArrowSmallLeft className='h-6 w-6' />Back</Link>

                <img src={img} alt="" className='w-3/4 mx-auto rounded-lg mt-4' />
                <p className='mt-7 text-center font-semibold'> Already Have An Account ? </p>

                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/login">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary  hover:text-white  hover:bg-primary  transition-all duration-300'>Sign In</button>
                    </Link>
                </div>

            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Create An Account
                </h1>
                <p className='text-center font-semibold'> Become a proud member of Alumni Association</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>

                    <div className='flex justify-center'>
                        <input {...register("photo", { required: true })} type="file" id='file' className='hidden' />
                        <label for="file" className=' border rounded-full'>
                            <img className='w-20 rounded-full hover:border-blue-500 border-4 transform duration-500' src={imgLogo} alt="" />
                        </label>
                    </div>

                    <div className='flex items-center justify-center gap-10 my-5 brandFont text-lg'>
                        <p onClick={() => setUses("alumni")} className={`cursor-pointer ${uses === "alumni" ? "border-b-2 border-primary text-primary font-extrabold" : ""}`}>As Alumni</p>
                        <p onClick={() => setUses("student")} className={`cursor-pointer ${uses === "student" ? "border-b-2 border-primary text-primary font-extrabold" : ""}`}>As Current Student</p>
                    </div>

                    <input type='text' placeholder='Enter Your Name'
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                        className='inputField' />
                    {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}



                    <input type='email' placeholder='Enter Your Email'
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        className='inputField' />
                    {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}

                    <input type='tel' placeholder='Enter Your Number'
                        {...register("phone", { required: true })}
                        aria-invalid={errors.phone ? "true" : "false"}
                        className='inputField' />
                    {errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone is required</p>}

                    <input type='text' placeholder='Enter Your Batch (e.g CSE 01)'
                        {...register("batch", { required: true })}
                        aria-invalid={errors.batch ? "true" : "false"}
                        className='inputField' />
                    {errors.batch?.type === 'required' && <p role="alert" className='text-error font-medium'>Batch is required</p>}

                    <input type='text' placeholder='Enter Your Department'
                        {...register("department", { required: true })}
                        aria-invalid={errors.department ? "true" : "false"}
                        className='inputField' />
                    {errors.department?.type === 'required' && <p role="alert" className='text-error font-medium'>Department is required</p>}

                    {
                        uses === "alumni" && <>

                            <input type='text' placeholder='Enter Your Current Sector'
                                {...register("company", { required: true })}
                                aria-invalid={errors.company ? "true" : "false"}
                                className='inputField' />
                            {errors.company?.type === 'required' && <p role="alert" className='text-error font-medium'>Company is required</p>}

                            <input type='text' placeholder='Enter Your Current Position'
                                {...register("position", { required: true })}
                                aria-invalid={errors.position ? "true" : "false"}
                                className='inputField' />
                            {errors.position?.type === 'required' && <p role="alert" className='text-error font-medium'>Position is required</p>}

                            <input type='text' placeholder='Enter Your Academic Year'
                                {...register("academicYear", { required: true })}
                                aria-invalid={errors.academicYear ? "true" : "false"}
                                className='inputField' />
                            {errors.academicYear?.type === 'required' && <p role="alert" className='text-error font-medium'>Academic Year is required</p>}

                        </>
                    }

                    <div className='inline-flex items-center w-full relative'>
                        <input type={type} placeholder='Enter Your Password'
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                            className='inputField' />
                        <div className='absolute right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-red-600 ' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-red-600 ' onClick={handleShow} />
                            }
                        </div>
                    </div>
                    {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

                    <div className='inline-flex items-center'>
                        <input type="password" placeholder='Confirm Password'
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            aria-invalid={errors.confirmPassword ? "true" : "false"}
                            className='inputField' />
                    </div>
                    {errors.confirmPassword && <p role="alert" className='text-error font-medium'>{errors.confirmPassword?.message}</p>}


                    {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}







                    <p className='my-3 font-semibold text-red-600'>{error}</p>

                    {/* <button type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-700  text-white inline-block">
                    <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-red-600  group-hover:h-full ">
                    </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                        Sign Up  </span></button> */}

                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                </form>



            </div>

        </section>
    );
};

export default Register;