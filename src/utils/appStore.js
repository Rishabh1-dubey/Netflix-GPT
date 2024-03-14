import {configureStore} from "@reduxjs/toolkit";
import userReducer  from "./userSlice";


// userSlice.reducer;  isko ko useReducer ki trh import kiya gya haiii
const appStore = configureStore({
    reducer:{
        user: userReducer,
    },
});
export default appStore;