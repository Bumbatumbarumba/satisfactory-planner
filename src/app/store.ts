import { configureStore } from '@reduxjs/toolkit'
import colourSwitchReducer from '../features/app/appSlice'

export const store = configureStore({
  reducer: {
    colourSwitch: colourSwitchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch