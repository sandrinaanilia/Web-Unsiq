import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth.js";

const Store = configureStore({
    reducer:auth
})

export default Store