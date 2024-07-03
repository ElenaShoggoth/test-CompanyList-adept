import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../features/company/companySlice';

export const store = configureStore({
  reducer: {
    companies: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;