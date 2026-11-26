import { configureStore } from "@reduxjs/toolkit";
import guideReducers from "./guidesSlice";

const store = configureStore({
    reducer:{
        guides: guideReducers
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;