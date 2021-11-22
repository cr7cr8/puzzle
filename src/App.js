import logo from './logo.svg';
import './App.css';


import { useContext, useRef, useEffect, useState } from "react"
import { Context } from "./ContextProvider"

import { Button, makeStyles, withStyles, withTheme, CssBaseline, Box, Grid, Container, useTheme } from "@mui/material"

import ResponsiveColumns from "./Mansory"
import { Transition } from 'react-transition-group';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import FavoriteIcon from '@mui/icons-material/FavoriteBorderRounded';

Array.prototype.swap = function (x, y) {

  const a = this[x]
  const b = this[y]
  this[x] = b
  this[y] = a
  return this
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

  // "/image.jpg" 
  //const src = "/mt.png"
   const src = "https://picsum.photos/200/300"
  const url = "url(" + src + ")"

  const [shiftXArr, setShiftXArr] = useState(["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"])
  const [shiftYArr, setShiftYArr] = useState(["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"])

  const btnRefArr = useRef([])
  const [done, setDone] = useState(false)


  const dicStr = "jusForHER"

  const matrix = useRef(shuffleArray([...dicStr]))


  const [imgLoaded, setImgLoaded] = useState(false)


  function findSurrounding(letter) {

    const pos = matrix.current.indexOf(letter)

    return [
      [pos + 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 }),
      [pos - 1, pos + 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 }),
      [pos - 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 })
    ][pos % 3]

  }

  const emptyLetter = dicStr[dicStr.length - 1]
  const emptyLetterIndex = dicStr.indexOf(emptyLetter)


  useEffect(function () {

    console.log(matrix.current.join(""))

    if ((matrix.current.join("") === dicStr) && (imgLoaded)) {

      setDone(true)
    }

  })




  useEffect(function () {


    if (imgLoaded) {

      matrix.current.forEach((letter, index) => {



        const oriPos = dicStr.indexOf(letter)
        const currentPos = index



        if (oriPos === 0 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 0 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 0 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 0 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 0 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 0 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 0 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }) }
        if (oriPos === 0 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }
        if (oriPos === 0 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }



        if (oriPos === 1 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 1 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 1 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 1 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 1 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 1 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 1 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }) }
        if (oriPos === 1 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }
        if (oriPos === 1 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }


        if (oriPos === 2 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 2 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 2 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 2 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 2 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 2 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 2 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }) }
        if (oriPos === 2 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }
        if (oriPos === 2 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "200%"; return [...pre] }); }



        if (oriPos === 3 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 3 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 3 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 3 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 3 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 3 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 3 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 3 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 3 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }


        if (oriPos === 4 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 4 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 4 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 4 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 4 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 4 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 4 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 4 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 4 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }



        if (oriPos === 5 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 5 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 5 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 5 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 5 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 5 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 5 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }) }
        if (oriPos === 5 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }
        if (oriPos === 5 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "100%"; return [...pre] }); }

        if (oriPos === 6 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 6 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 6 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 6 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 6 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 6 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 6 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 6 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 6 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }



        if (oriPos === 7 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 7 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 7 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 7 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 7 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 7 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 7 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 7 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 7 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }


        if (oriPos === 8 && currentPos === 0) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 8 && currentPos === 1) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 8 && currentPos === 2) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); }
        if (oriPos === 8 && currentPos === 3) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); }
        if (oriPos === 8 && currentPos === 4) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 8 && currentPos === 5) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "-100%"; return [...pre] }) }
        if (oriPos === 8 && currentPos === 6) { setShiftXArr(pre => { pre[oriPos] = "-200%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }) }
        if (oriPos === 8 && currentPos === 7) { setShiftXArr(pre => { pre[oriPos] = "-100%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }
        if (oriPos === 8 && currentPos === 8) { setShiftXArr(pre => { pre[oriPos] = "0%"; return [...pre] }); setShiftYArr(pre => { pre[oriPos] = "0%"; return [...pre] }); }

      })

   
    }

  }, [imgLoaded])

  const theme = useTheme()
  return (
    <>
      <img src={src} style={{ position: "absolute", zIndex: -100, opacity: 0, transform: "scale(0)" }}
        ref={imageRef}
        onLoad={function (e) {

          const imgWidth = Number(window.getComputedStyle(e.target).width.replace("px", ""))
          const imgHeight = Number(window.getComputedStyle(e.target).height.replace("px", ""))

          const w = Number(window.getComputedStyle(divRef.current).width.replace("px", ""))
          const h = Number(window.getComputedStyle(divRef.current).height.replace("px", ""))

          const wBasedOnfullH = imgWidth / imgHeight * h
          const hBasedOnfullW = imgHeight / imgWidth * w

      


          if ((wBasedOnfullH + h) <= (w + hBasedOnfullW)) {

            setDivWidth(w)
            setDivHeight(h)
            setImgW(wBasedOnfullH)
            setImgH(h)
            setIsFullW(false)
            setIsFullH(true)

          }
          else {

            setDivWidth(w)
            setDivHeight(h)
            setImgW(w)
            setImgH(hBasedOnfullW)
            setIsFullW(true)
            setIsFullH(false)

          }
          setImgLoaded(true)
        }}
      />


      <Container disableGutters={true} fixed={false} maxWidth={window.innerWidth >= 3000 ? false : "md"}

        sx={{
       

          backgroundColor: "wheat",
          width: imgH === 0 ? "inherit" : isFullW ? "inherit" : imgW + "px",
          height: imgH === 0 ? "100vh" : isFullH ? "100vh" : imgH + "px",

          backgroundSize: imgW + "px " + imgH + "px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          boxShadow: !done ? theme.shadows[5] : theme.shadows[20],
          transition: "box-shadow 2s,border-radius 2s ",
          borderRadius: !done ? "8px" : "999px",
          overflow: "hidden",
          position: "relative",
        }}
        ref={divRef} >


        {[...new Array(9)].map((item, index) => {

          let backPosX = 0;
          let backPosY = 0;

          const letter = dicStr[index]

          if ((index % 3) === 0) { backPosX = "0px" }
          else if ((index % 3) === 1) { backPosX = `-${(isFullW ? divWidth : imgW) / 3}px` }
          else if ((index % 3) === 2) { backPosX = `-${(isFullW ? divWidth : imgW) / 3 * 2}px` }

          if ((index / 3) < 1) { backPosY = "0px" }
          else if ((index / 3) < 2) { backPosY = `-${(isFullH ? divHeight : imgH) / 3}px` }
          else if ((index / 3) < 3) { backPosY = `-${(isFullH ? divHeight : imgH) / 3 * 2}px` }


          return (
            <div key={index}
              ref={function (element) { btnRefArr.current[index] = element }}
              style={{
                backgroundImage: url,
                backgroundSize: imgW + "px " + imgH + "px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${backPosX} ${backPosY}`,
                boxShadow: !done ? theme.shadows[5] : theme.shadows[0],
                opacity: (letter === emptyLetter && !done) ? 0 : 1,

              
                transform: `translateX(${shiftXArr[index]}) translateY(${shiftYArr[index]})`,
                transition: "transform 200ms, opacity 3s, box-shadow 1s ",

       

              }}
              onClick={function (e) {

                e.preventDefault(); e.stopPropagation()

                if (done) { return }
                //   if (index === emptyLetterIndex) { return }

                const arr = findSurrounding(emptyLetter)

                if (arr.includes(matrix.current.indexOf(letter))) {

                  const pos = matrix.current.indexOf(letter);
                  const posEmpty = matrix.current.indexOf(emptyLetter);

                  matrix.current.swap(pos, posEmpty)
                  if ((pos - posEmpty === -3) || (pos - posEmpty === 3)) {

                    const diff = (pos - posEmpty) === -3 ? 100 : -100
                    const arr = shiftYArr
                    arr[index] = (Number(arr[index].replace("%", "")) + diff) + "%"
                    arr[emptyLetterIndex] = (Number(arr[emptyLetterIndex].replace("%", "")) - diff) + "%"

                    setShiftYArr([...arr])

                  }

                  else if ((pos - posEmpty === -1) || (pos - posEmpty === 1)) {

                    const diff = (pos - posEmpty) === -1 ? 100 : -100
                    const arr = shiftXArr
                    arr[index] = (Number(arr[index].replace("%", "")) + diff) + "%"
                    arr[emptyLetterIndex] = (Number(arr[emptyLetterIndex].replace("%", "")) - diff) + "%"

                    setShiftXArr([...arr])
                  }
                }

              }}


            >

            </div>
          )


        })}

        <FavoriteIcon sx={{
          display: "block",
          color: "pink",
          zIndex: 100,
          position: "absolute",
          top: "50%",
          left: "50%",

          opacity: !done ? 0.8 : 0.05,
          transform: !done ? `translateX(-50%) translateY(-50%)  scale(0)` : "translateX(-50%) translateY(-50%) scale(100)",
          transition: "all 2s cubic-bezier(.87,.12,.86,.4) 600ms",

        }} />


      </Container>

    </>

  );
}




function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}





export default App;
