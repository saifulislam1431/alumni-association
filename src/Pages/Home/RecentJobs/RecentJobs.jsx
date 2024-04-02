import { Link } from "react-router-dom";
import useJobs from "../../../Hooks/useJobs";

const RecentJobs = () => {
    const { allJobs } = useJobs();
    console.log(allJobs);
    return (
        <section className="my-28 px-5 lg:px-14">
            <div className="text-center">
                <h1 className="text-5xl font-bold brandFont text-primary">Recent Job Opportunity</h1>
            </div>
            <div className="my-20 grid grid-cols-12 gap-10">
                {
                    allJobs?.slice(0, 4)?.map((job) => <div key={job?._id} className="col-span-full lg:col-span-4 card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{job?.position}</h2>
                            <p className='font-semibold text-sm'>By {job?.company_name}</p>
                            <p>{job?.job_type}</p>
                            <p>{job?.working_hours}</p>
                            <div className="card-actions justify-end">
                                <Link className='myBtn' to={`/dashboard/apply-job-post/${job?._id}`}>Apply</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="flex items-center justify-center">
                <Link to="/career" className="myBtnSec">See All Jobs</Link>
            </div>
        </section>
    );
};

export default RecentJobs;