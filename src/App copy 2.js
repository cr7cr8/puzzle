import logo from './logo.svg';
import './App.css';


import { useContext, useRef, useEffect, useState } from "react"
import { Context } from "./ContextProvider"

import { Button, makeStyles, withStyles, withTheme, CssBaseline, Box, Grid, Container } from "@mui/material"

import ResponsiveColumns from "./Mansory"
import { Transition } from 'react-transition-group';

function App() {


  const { a } = useContext(Context)


  const divRef = useRef()
  const imageRef = useRef()

  const [divWidth, setDivWidth] = useState(0)

  const [divHeight, setDivHeight] = useState(0)


  const [imgW, setImgW] = useState(0)
  const [imgH, setImgH] = useState(0)

  const [isFullW, setIsFullW] = useState(false)
  const [isFullH, setIsFullH] = useState(true)

  const src = "https://picsum.photos/832/587"
  const url = "url(" + src + ")"


  const [oriW, setOriW] = useState(0)
  const [oriH, setOriH] = useState(0)

  const [shiftX, setShiftX] = useState(0)


  return (
    <>
      <img src={src} style={{ position: "absolute", zIndex: -100, }}
        ref={imageRef}
        onLoad={function (e) {

          //  console.log(e.target)


          const imgWidth = Number(window.getComputedStyle(e.target).width.replace("px", ""))
          const imgHeight = Number(window.getComputedStyle(e.target).height.replace("px", ""))



          const w = Number(window.getComputedStyle(divRef.current).width.replace("px", ""))
          const h = Number(window.getComputedStyle(divRef.current).height.replace("px", ""))


          const wBasedOnfullH = imgWidth / imgHeight * h
          const hBasedOnfullW = imgHeight / imgWidth * w

          console.log(w, h)
          // console.log(imgWidth, imgHeight)
          console.log(wBasedOnfullH, h)
          console.log(w, hBasedOnfullW)


          if ((wBasedOnfullH + h) <= (w + hBasedOnfullW)) {

            setOriW(imgWidth)
            setOriH(imgHeight)

            setDivWidth(w)
            setDivHeight(h)
            setImgW(wBasedOnfullH)
            setImgH(h)
            setIsFullW(false)
            setIsFullH(true)
            //     alert("T")
          }
          else {
            setOriW(imgWidth)
            setOriH(imgHeight)


            setDivWidth(w)
            setDivHeight(h)
            setImgW(w)
            setImgH(hBasedOnfullW)
            setIsFullW(true)
            setIsFullH(false)
            //   alert("F")


          }


        }}
      />


      <Container disableGutters={true} fixed={false} maxWidth={window.innerWidth >= 3000 ? false : "md"}

        sx={{
          //   width:100,

          backgroundColor: "pink",
          width: imgH === 0 ? "inherit" : isFullW ? "inherit" : imgW + "px",
          height: imgH === 0 ? "100vh" : isFullH ? "100vh" : imgH + "px",
          //   backgroundImage: url,
          //  backgroundImage: "url(https://picsum.photos/232/386)",
          //  backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          //  backgroundSize: "60px 120px",
          backgroundSize: imgW + "px " + imgH + "px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",


        }}
        ref={divRef} >



        <div
          style={{
            backgroundImage: url,
            backgroundSize: imgW + "px " + imgH + "px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px 0px`,

          }}
          onClick={function () {
            alert("isFullW  " + isFullW + "  isFullH  " + isFullH)
            alert(`oriW ${oriW} oriH ${oriH} imgW ${imgW} imgH ${imgH}`)
          }}

        />

        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "skyblue",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px 0px`,
      

        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "orange",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px 0px`
        }} />





        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `0% -${(isFullH ? divHeight : imgH) / 3}px`
        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px  -${(isFullH ? divHeight : imgH) / 3}px`
        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px  -${(isFullH ? divHeight : imgH) / 3}px`
        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `0%  -${(isFullH ? divHeight : imgH) / 3 * 2}px`
        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px  -${(isFullH ? divHeight : imgH) / 3 * 2}px`
        }} />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px  -${(isFullH ? divHeight : imgH) / 3 * 2}px`
        }} />









      </Container>




    </>

  );
}

export default App;
