import React from 'react';
import useAppliedJobs from '../../../../Hooks/useAppliedJobs';
import DashHead from '../../../../Components/DashHead/DashHead';

const ApplyIntern = () => {
    const {
        appliedJobs, refetch
    } = useAppliedJobs();

    console.log(appliedJobs);
    return (
        <section>
            <DashHead title="Applied Jobs" />


            <div className="overflow-x-auto my-12">
                <h1 className='font-bold text-center brandFont text-3xl text-primary my-5'>See Application</h1>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Position</th>
                            <th>Job Type</th>
                            <th>Working Hours</th>
                            <th>Applicants Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedJobs?.map((application, indx) => <tr key={application?._id}>
                                <th>{indx + 1}</th>
                                <td>{application?.position}</td>
                                <td>{application?.job_type}</td>
                                <td>{application?.working_hours}</td>
                                <td>
                                    <button className="myBtn" onClick={() => document.getElementById(application?._id).showModal()}>See</button>
                                    <dialog id={application?._id} className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Application for {application?.position}</h3>
                                            <div className='my-8 font-semibold space-y-3'>
                                                <p>Company: {application?.company_name}</p>
                                                <p>working_hours: {application?.working_hours}</p>
                                                <p>Posted By: {application?.author}</p>
                                                <p>Email: {application?.applicant_email}</p>
                                                <p>Contact Number: {application?.applicant_number}</p>
                                                <p>Resume: <a href={application?.applicant_resume} target='_blank' className="text-blue-500 hover:underline text-sm">See Resume</a></p>
                                                <p className='mt-3'>Cover Letter: </p>
                                                <p className='my-3 border p-2 rounded'>{application?.applicant_cover_letter}</p>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ApplyIntern;