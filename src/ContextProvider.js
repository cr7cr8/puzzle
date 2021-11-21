import React, { createContext } from "react"

import { Button, makeStyles, withStyles, withTheme, CssBaseline } from "@mui/material"

export const Context = createContext()



export default function ContextProvider(props) {






  return (


    <Context.Provider
      value={{
        a: "aaa"

      }}
    >
      <CssBaseline />
      {props.children}
    </Context.Provider>








  )



}