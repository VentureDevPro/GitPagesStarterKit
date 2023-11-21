import { configureStore } from '@reduxjs/toolkit'
import { createMiddleware } from 'async-selector-kit'
import { useDispatch } from 'react-redux'
import { reducers } from './reducers'
// import counterReducer from '../features/counter/counterSlice'

const middlewares = [createMiddleware()]

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
