import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useCommittee = () => {
    const { data: allCommittee = [], refetch } = useQuery({
        queryKey: ["all-committee"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-committee")
            return response.data
        }
    })
    return {
        allCommittee,
        refetch
    }
};

export default useCommittee;