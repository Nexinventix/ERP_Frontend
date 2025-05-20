'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import authReducer from './slices/authSlice';

const createNoopStorage = () => ({
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  });
  
  const storage = typeof window !== 'undefined' 
    ? createWebStorage('local')
    : createNoopStorage();
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],
  };
  
  const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const makeStore = () => {
    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  
    setupListeners(store.dispatch);
  
    return store;
  };
  
  export const store = makeStore();
  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
