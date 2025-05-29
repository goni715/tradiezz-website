"use client";

import { store } from "@/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

type TProps = {
    children: React.ReactNode
}

const GlobalProvider = ({children}: TProps) => {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  )
}

export default GlobalProvider