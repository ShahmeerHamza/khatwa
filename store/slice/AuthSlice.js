import { createSlice } from '@reduxjs/toolkit'
import { asyncStatus } from '../../utils/async_status'
import { check_user_auth_async} from '../services/authService'

const initialState = {
    //Statuses 
    check_initial_auth_status: asyncStatus.IDLE,
    login_register_status: asyncStatus.IDLE,

    // user auth, data and tokens
    userAuth: true,
    user_data: null,
    authToken: '',
    user_type: 'admin',

    // Errors 
    login_error: null,
    register_error: null,
    check__initial_auth_error: null,



}

const userAuthSlice = createSlice({

    name: 'user_auth',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(check_user_auth_async.pending, (state, { payload }) => {
            state.check_initial_auth_status = asyncStatus.LOADING
        })

        builder.addCase(check_user_auth_async.fulfilled, (state, { payload }) => {
            state.check_initial_auth_status = asyncStatus.SUCCEEDED
            state.userAuth = payload.success
            state.data = payload.data
        })
        builder.addCase(check_user_auth_async.rejected, (state, actions) => {
            state.check_initial_auth_status = asyncStatus.ERROR
            state.userAuth = false

        })

    }
})

// export const { } = userAuthSlice.actions

export default userAuthSlice.reducer


