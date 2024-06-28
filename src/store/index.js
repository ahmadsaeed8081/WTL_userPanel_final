import { configureStore } from "@reduxjs/toolkit";

import authService from "./services/authService";
import bannerService from "./services/bannerService";
import featuredService from "./services/featuredService";

import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";

const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [bannerService.reducerPath]: bannerService.reducer,
    [featuredService.reducerPath]: featuredService.reducer,

    authReducer: authReducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      bannerService.middleware,
      featuredService.middleware,
    ]),
});

export default Store;
