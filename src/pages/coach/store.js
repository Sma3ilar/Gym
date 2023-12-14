// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getCoachesData = createAsyncThunk('CoachStore/getCoachesData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {})

  return {
    data: response.data
  }
})

////////////////////////////////////////////////REMOVE Coach/////////////////////////
export const RemoveCoach = createAsyncThunk('CoachStore/RemoveCoach', async id => {
  await axios.delete(`https://dan.ezar.app/almasri/sales-api/delete-note-by-sales/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return response.data
})

const appCoachSlice = createSlice({
  name: 'CoachStore',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCoachesData.fulfilled, (state, action) => {
        state.data = action.payload.data
      })

      .addCase(RemoveCoach.fulfilled, state => {
        state.status = 'succeeded'
      })
  }
})

export default appCoachSlice.reducer
