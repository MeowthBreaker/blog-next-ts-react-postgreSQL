import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterResponse } from '@/pages/api/register';

export const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getRegister: builder.mutation<RegisterResponse, any>({
            query: (data) => ({
                url: 'register',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetRegisterMutation } = registerApi;
