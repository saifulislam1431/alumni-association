import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllEvents = () => {
    const { data: allEvents = [], refetch } = useQuery({
        queryKey: ["all-events"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-events")
            return response.data
        }
    })
    return {
        allEvents,
        refetch
    }
};

export default useAllEvents;