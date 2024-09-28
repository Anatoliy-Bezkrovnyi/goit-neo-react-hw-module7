import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactAsyncSlice";
import { filtersReducer } from "./filtersSlice";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,  
});

// export const persistor = persistStore(store);