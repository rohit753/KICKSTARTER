import { configureStore } from "@reduxjs/toolkit";
import Loginreducer from "./Loginredux";

export default configureStore({
  reducer: {
    login: Loginreducer,
  },
});