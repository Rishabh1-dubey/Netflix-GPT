import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
// userSlice.reducer;  isko ko useReducer ki trh import kiya gya haiii
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config : configReducer,

    //above jo bhai naam likhe hai wo sllice se aya hai reducer hai ye sba nd ikey liye humko reducer ka use krna haii
    //bhai tune idhr movie likha tha iske liye tera mainconatainer render nhi ho rha tha  idhr movies rheaga tbhi redux store re render ho tera movie
  },
});
export default appStore;
