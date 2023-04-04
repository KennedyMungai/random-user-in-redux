import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/users";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore(
    {
        reducer: {
            [usersApi.reducerPath]: usersApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
    }
)