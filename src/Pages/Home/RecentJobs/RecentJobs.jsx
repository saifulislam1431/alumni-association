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
                    allJobs?.slice(0, 8)?.map((job) => <div key={job?._id} className="col-span-10 md:col-span-6 lg:col-span-3 w-full border p-3 rounded border-primary flex flex-col gap-3">
                        <h1 className="brandFont text-center font-semibold">{job?.companyName}</h1>
                        <p className="font-bold brandFont text-primary">{job?.jobTitle}</p>

                        <div>
                            <p>{job?.jobDescription?.slice(0, 110)}... <Link to={`/job-details/${job?._id}`} className="font-semibold text-primary"> Read More</Link></p>
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