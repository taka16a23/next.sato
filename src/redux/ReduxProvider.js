'use client'

import { Provider } from "react-redux";

import { configureStore } from "@/redux/Store";


export function ReduxProvider({ children }) {
  return (
    <Provider store={configureStore()}>
      {children}
    </Provider>
  )
}
