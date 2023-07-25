import { configureStore } from "@reduxjs/toolkit";
import  NoteSlice  from './Note';
import storage from "redux-persist/lib/storage"; 
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
  };
const persistedReducer = persistReducer(persistConfig, NoteSlice.reducer);

const Store = configureStore({
 reducer: {notes: persistedReducer}
})
export const persistor = persistStore(Store);
export default Store;