import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./redux/reducers/homeSlice/homeSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export const store = configureStore({
    reducer: {
      userData: formReducer,
    },
});
