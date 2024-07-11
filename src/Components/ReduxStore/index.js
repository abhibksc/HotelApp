import { configureStore  } from "@reduxjs/toolkit";
import { LoginSignUpSlicee } from "./Slices/auth";
import { toggleSlices } from "./Slices/toggleSlice";




const Store = configureStore({
    reducer: {
        auth: LoginSignUpSlicee,
        toggle : toggleSlices

    }
})

export default Store;


