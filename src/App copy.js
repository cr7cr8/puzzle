import logo from './logo.svg';
import './App.css';


import { useContext, useRef, useEffect, useState } from "react"
import { Context } from "./ContextProvider"

import { Button, makeStyles, withStyles, withTheme, CssBaseline, Box, Grid, Container } from "@mui/material"

import ResponsiveColumns from "./Mansory"

function App() {


  const { a } = useContext(Context)


  const divRef = useRef()
  const imageRef = useRef()

  const [divWidth,setDivWidth] = useState(0)

  const [divHeight,setDivHeight] = useState(0)


  useEffect(function () {

   // alert(window.getComputedStyle(divRef.current).width + " " + window.getComputedStyle(divRef.current).height)

  }, [])

  return (


    <Container disableGutters={true} fixed={false} maxWidth={window.innerWidth >= 3000 ? false : "md"}
      ref={divRef}
      sx={{
        backgroundColor: "pink",
        backgroundImage:"url(https://picsum.photos/232/386)",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
      //  backgroundSize: "60px 120px",
        
        
        height: "100vh",
        

      }} >


      {/* <img ref={imageRef} src="https://picsum.photos/232/386"

        onLoad={function () {
       //   alert(window.getComputedStyle(imageRef.current).width + " " + window.getComputedStyle(imageRef.current).height)


        }}
        style={{ display: "block", objectFit: "contain" }} /> */}


    </Container>






  );
}

export default App;
