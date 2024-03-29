import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useJobs = () => {
    // const [axiosSecure] = useAxiosSecure();
    const { data: allJobs = [], refetch } = useQuery({
        queryKey: ["all-job-post"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-job-post")
            return response.data
        }
    })
    return {
        allJobs,
        refetch
    }
};

export default useJobs;