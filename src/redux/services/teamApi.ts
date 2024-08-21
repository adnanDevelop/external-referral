import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseURL';

const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: baseQuery,
  tagTypes: ['Team'],

  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (payload) => ({
        url: '/teams',
        method: 'POST',
        body: payload.body,
      }),
      invalidatesTags: ['Team'],
    }),
    updateTeam: builder.mutation({
      query: (payload) => ({
        url: `/teams/${payload.id}`,
        method: 'PUT',
        body: payload.body,
      }),
      invalidatesTags: ['Team'],
    }),
    deleteTeam: builder.mutation({
      query: (payload) => ({
        url: `/teams`,
        method: 'DELETE',
        body: payload.body,
      }),
      invalidatesTags: ['Team'],
    }),
    getTeamById: builder.query({
      query: (payload) => ({
        url: `/teams/${payload.id}`,
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),
    getTeams: builder.query({
      query: (payload) => ({
        url: '/teams',
        method: 'GET',
        params: payload.params,
      }),
      providesTags: ['Team'],
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
  useGetTeamByIdQuery,
  useGetTeamsQuery,
  useLazyGetTeamsQuery
} = teamApi;
export default teamApi;
