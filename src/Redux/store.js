import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newReducers } from './asyncRedux/contactReducers'; 
import { filterReducer } from './filtersSlice';
import { authReducer } from './Authorization/authReducer'; 
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const rootReducer = combineReducers({
    contacts:  newReducers ,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);