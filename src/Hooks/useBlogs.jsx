import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBlogs = () => {
    const { data: allBlogs = [], refetch } = useQuery({
        queryKey: ["all-blog-post"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-blog-post")
            return response.data
        }
    })
    return {
        allBlogs,
        refetch
    }
};

export default useBlogs;