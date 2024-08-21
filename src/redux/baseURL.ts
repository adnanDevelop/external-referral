import { RootState } from './store';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { updateCreds, logout } from './features/authSlice';

// base url to request backend
export const baseUrl = 'http://54.220.108.114:8001/v1';

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseFetch = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)?.auth?.token;
      if (token) headers.set('Authorization', 'Bearer ' + token);
      return headers;
    },
  });

  const result = await baseFetch(args, api, extraOptions);

  if (result.meta?.response?.headers) {
    const newToken = result.meta.response.headers.get('X_auth_token');
    if (newToken) {
      api.dispatch(updateCreds(newToken));
    }
  }

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
    window.location.href = '/signin';
  }

  return result;
};

export default baseQuery;

// const baseQuery = fetchBaseQuery({
//   baseUrl,
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState)?.auth?.token;
//     if (token) headers.set('Authorization', 'Bearer ' + token);
//     return headers;
//   },
// });
