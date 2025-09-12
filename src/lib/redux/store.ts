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
import { userApi } from './api/userApi';
import {fleetApi} from "./api/fleetApi"
import {driverApi} from "./api/driverApi"
import { clientApi } from './api/clientApi';
import { infoGraphicsApi } from './api/infoGraphicsApi';
import { tripApi } from './api/tripsAPI';
import { maintenanceApi } from './api/maintenanceApi';


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
    [userApi.reducerPath]: userApi.reducer,
    [fleetApi.reducerPath]: fleetApi.reducer,
    [driverApi.reducerPath]: driverApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [infoGraphicsApi.reducerPath]: infoGraphicsApi.reducer,
    [tripApi.reducerPath]: tripApi.reducer,
    [maintenanceApi.reducerPath]: maintenanceApi.reducer,
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
        }).concat(userApi.middleware,
          fleetApi.middleware,
          driverApi.middleware,
          clientApi.middleware,
          infoGraphicsApi.middleware,
          tripApi.middleware,
          maintenanceApi.middleware
        ),
    });
  
    setupListeners(store.dispatch);
  
    return store;
  };
  
  export const store = makeStore();
  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
