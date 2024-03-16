import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiHandle } from "../../config/apiHandle/apiHandle.js"
import { type_constants } from "../contants"


export const check_user_auth_async = createAsyncThunk(type_constants.CHECK_USER_AUTH, async (post_data, authToken) => {

    try {
        const response = await apiHandle.get('/check-auth', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
        // console.log(auth_token);
        const res_data = await response.data
        return res_data
    } catch (error) {
        console.log(error)
        if (error?.response?.data) {
            throw Error(error.response.data.message)
        }
        else {
            throw Error(error.message)
        }
    }
})


export const register_user_post_async = createAsyncThunk(type_constants.POST_USER_REGISTRATION, async (post_data) => {
    try {
        const response = await apiHandle.post('/create-user', post_data)
        const res_data = await response.data

        return res_data
    } catch (error) {
        console.log('error', { error });
        if (error?.response?.data) {
            throw Error(error.response.data.message)
        }
        else {
            throw Error(error.message)
        }

    }

})

export const login_user_post_async = createAsyncThunk(type_constants.POST_USER_LOGIN, async (post_data) => {
    try {
        const response = await apiHandle.post('/login', post_data)
        const res_data = await response.data
        return res_data

    } catch (error) {
        console.log(error)
        if (error?.response?.data) {
            throw Error(error.response.data.message)
        }
        else {
            throw Error(error.message)
        }
    }
})
