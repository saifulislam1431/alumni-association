import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAlumniProfile = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: alumniInfo = {}, refetch } = useQuery({
        queryKey: ["alumniInfo", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/alumni-info?email=${user?.email}`)
            return res.data;
        }
    })

    return {
        alumniInfo, refetch
    }
};

export default useAlumniProfile;