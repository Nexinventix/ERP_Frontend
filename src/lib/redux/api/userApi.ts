import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { create } from 'domain';

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    prepareHeaders: (headers) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        if (apiKey) {
          headers.set('x-api-key', apiKey);
        }
        return headers;
      },
});

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (userData) => ({
                url: `/create-user`,
                method: 'POST',
                body:userData,
            }), 
            invalidatesTags: ['User'],
        }),
        getAllUser: builder.query({
            query: () => `/users`,
            providesTags: ['User'],
        }),
    }),
});

export const {
    useCreateUserMutation,
    useGetAllUserQuery,
} = userApi;