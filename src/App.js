import logo from './logo.svg';
import './App.css';


import { useContext, useRef, useEffect, useState } from "react"
import { Context } from "./ContextProvider"

import { Button, makeStyles, withStyles, withTheme, CssBaseline, Box, Grid, Container } from "@mui/material"

import ResponsiveColumns from "./Mansory"
import { Transition } from 'react-transition-group';



Array.prototype.swap = function (x, y) {

  const a = this[x]
  const b = this[y]
  this[x] = b
  this[y] = a

}


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

  const src = "https://picsum.photos/700/900"
  const url = "url(" + src + ")"


  const [oriW, setOriW] = useState(0)
  const [oriH, setOriH] = useState(0)

  const [shiftX1, setShiftX1] = useState("0")
  const [shiftY1, setShiftY1] = useState("0")

  const [shiftX2, setShiftX2] = useState("0")
  const [shiftY2, setShiftY2] = useState("0")

  const [shiftX3, setShiftX3] = useState("0")
  const [shiftY3, setShiftY3] = useState("0")

  const [shiftX4, setShiftX4] = useState("0")
  const [shiftY4, setShiftY4] = useState("0")

  const [shiftX5, setShiftX5] = useState("0")
  const [shiftY5, setShiftY5] = useState("0")

  const [shiftX6, setShiftX6] = useState("0")
  const [shiftY6, setShiftY6] = useState("0")

  const [shiftX7, setShiftX7] = useState("0")
  const [shiftY7, setShiftY7] = useState("0")

  const [shiftX8, setShiftX8] = useState("0")
  const [shiftY8, setShiftY8] = useState("0")

  const [shiftX9, setShiftX9] = useState("0")
  const [shiftY9, setShiftY9] = useState("0")


  const matrix = useRef(
    [
      "A", "B", "C",
      "D", "E", "F",
      "G", "H", "I",
    ]
  )


  function findE() {

    const posE = matrix.current.indexOf("E") + 1

    if (posE === 1) {
      return [1, 3]
    }
    else if (posE === 2) {
      return [0, 2, 4]
    }
    else if (posE === 3) {
      return [1, 5]
    }
    else if (posE === 4) {
      return [0, 4, 6]
    }
    else if (posE === 5) {
      return [1, 3, 5, 7]
    }
    else if (posE === 6) {
      return [2, 4, 8]
    }
    else if (posE === 7) {
      return [3, 7]
    }
    else if (posE === 8) {
      return [4, 6, 8]
    }
    else if (posE === 9) {
      return [5, 7]
    }


  }





  return (
    <>
      <img src={src} style={{ position: "absolute", zIndex: -100, opacity: 0, transform:"scale(0)" }}
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

            transform: `translateX(${shiftX1}) translateY(${shiftY1})`,
            transition: "transform 150ms"

          }}
          onClick={function () {
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("A"))) {

              const posB = matrix.current.indexOf("A");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY1(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY1(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX1(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX1(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            }

          }}
        />

        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "skyblue",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px 0px`,

          transform: `translateX(${shiftX2}) translateY(${shiftY2})`,
          transition: "transform 150ms"

        }}

          onClick={function () {
      
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("B"))) {

              const posB = matrix.current.indexOf("B");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY2(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY2(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX2(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX2(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            }

          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "orange",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px 0px`,

          transform: `translateX(${shiftX3}) translateY(${shiftY3})`,
          transition: "transform 150ms"

        }}

          onClick={function () {
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("C"))) {

              const posB = matrix.current.indexOf("C");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY3(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY3(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX3(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX3(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            
            }

          }}
        />





        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `0% -${(isFullH ? divHeight : imgH) / 3}px`,

          transform: `translateX(${shiftX4}) translateY(${shiftY4})`,
          transition: "transform 150ms"
        }}

          onClick={function () {
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("D"))) {

              const posB = matrix.current.indexOf("D");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY4(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY4(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX4(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX4(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            
            }
          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px  -${(isFullH ? divHeight : imgH) / 3}px`,
          opacity: 0,
          transform: `translateX(${shiftX5}) translateY(${shiftY5})`,
          transition: "transform 150ms"
        }}

          onClick={function () {
            //   setShiftX5("100%")
         //   alert(matrix.current.indexOf("E"))
          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px  -${(isFullH ? divHeight : imgH) / 3}px`,

          transform: `translateX(${shiftX6}) translateY(${shiftY6})`,
          transition: "transform 150ms"
        }}

          onClick={function () {
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("F"))) {

              const posB = matrix.current.indexOf("F");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY6(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY6(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX6(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX6(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            
            }
          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `0%  -${(isFullH ? divHeight : imgH) / 3 * 2}px`,

          transform: `translateX(${shiftX7}) translateY(${shiftY7})`,
          transition: "transform 150ms"
        }}

          onClick={function () {
          

            const arr = findE()
            if (arr.includes(matrix.current.indexOf("G"))) {

              const posB = matrix.current.indexOf("G");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY7(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY7(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX7(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX7(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            }




          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3}px  -${(isFullH ? divHeight : imgH) / 3 * 2}px`,

          transform: `translateX(${shiftX8}) translateY(${shiftY8})`,
          transition: "transform 150ms"
        }}




          onClick={function () {
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("H"))) {

              const posB = matrix.current.indexOf("H");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY8(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY8(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX8(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX8(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            }
          }}
        />


        <div style={{
          backgroundImage: url,
          backgroundSize: imgW + "px " + imgH + "px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${(isFullW ? divWidth : imgW) / 3 * 2}px  -${(isFullH ? divHeight : imgH) / 3 * 2}px`,

          transform: `translateX(${shiftX9}) translateY(${shiftY9})`,
          transition: "transform 150ms"
        }}

          onClick={function () {
         
            const arr = findE()
            if (arr.includes(matrix.current.indexOf("I"))) {

              const posB = matrix.current.indexOf("I");
              const posE = matrix.current.indexOf("E");

              matrix.current.swap(posB, posE)
              if (posB - posE === -3) {
                setShiftY9(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
              else if (posB - posE === 3) {
                setShiftY9(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftY5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === 1) {
                setShiftX9(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
              }
              else if (posB - posE === -1) {
                setShiftX9(pre => { return (Number(pre.replace("%", "")) + 100) + "%" })
                setShiftX5(pre => { return (Number(pre.replace("%", "")) - 100) + "%" })
              }
            }


            
          }}
        />

      </Container>

    </>

  );
}

export default App;
