import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse } from '../pages/api/login/index';

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getLogin: builder.mutation<AuthResponse, any>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data,
                credentials: 'include',
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLoginMutation } = loginApi;
