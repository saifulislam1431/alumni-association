import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAppliedJobs = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: appliedJobs = [], refetch } = useQuery({
        queryKey: ["appliedJobs", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/applied-jobs?email=${user?.email}`)
            return res.data;
        }
    })
    return {
        appliedJobs, refetch
    }
};

export default useAppliedJobs;