import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAlumni = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAlumni, isLoading: isAlumniLoading } = useQuery({
        queryKey: ["isAlumni", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/alumni/${user?.email}`)
            return res.data.alumni;

        }
    })
    return {
        isAlumni, isAlumniLoading
    }
};

export default useAlumni;