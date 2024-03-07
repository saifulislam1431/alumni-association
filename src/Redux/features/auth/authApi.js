import { baseApi } from "../../apis/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userInfo) => ({
                url: "register",
                method: "POST",
                body: userInfo
            })
        }),
        loginUser: builder.mutation({
            query: (userInfo) => ({
                url: "login",
                method: "POST",
                body: userInfo
            })
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;