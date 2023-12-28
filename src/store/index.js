import {configureStore} from "@reduxjs/toolkit";
//auth yolundan emin olmak lazim
import auth from './auth/index.js'

const store = configureStore({
    reducer: {
        auth
    }
})

export default store