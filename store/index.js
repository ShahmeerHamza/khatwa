import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { type_constants } from './contants.js';
import userAuthSlice from './slice/AuthSlice.js';



let reducers = combineReducers({
    auth: userAuthSlice,
})


const rootReducer = (state, action) => {
    if (action.type === type_constants.LOGOUT_USER) {
        state = undefined
    }
    return reducers(state, action)
}

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: false
        })

    }
)


