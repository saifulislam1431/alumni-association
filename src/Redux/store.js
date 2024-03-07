import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/baseApi";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducerPath,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)

})