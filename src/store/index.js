import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./taskSlice";


const store = configureStore({
    reducer: { todo: todoSlice.reducer }
})


export default store;