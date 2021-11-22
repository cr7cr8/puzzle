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

  const src = "https://images.unsplash.com/photo-1635701438149-26737db0147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzU2MDEzOA&ixlib=rb-1.2.1&q=80&w=1080"
  const url = "url(" + src + ")"




  const [shiftXArr, setShiftXArr] = useState(["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"])
  const [shiftYArr, setShiftYArr] = useState(["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"])


 

  const matrix = useRef(
    [
      "A", "B", "C",
      "D", "E", "F",
      "G", "H", "I",
    ]
  )


  function findSurrounding(letter) {

    const pos = matrix.current.indexOf(letter)

    if (pos % 3 === 0) return [pos + 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 })
    if (pos % 3 === 1) return [pos - 1, pos + 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 })
    if (pos % 3 === 2) return [pos - 1, pos - 3, pos + 3].filter(item => { return item >= 0 && item <= 8 })

  }

  const emptyLetter = "I"
  const emptyLetterIndex = "ABCDEFGHI".indexOf(emptyLetter)




  return (
    <>
      <img src={src} style={{ position: "absolute", zIndex: -100, opacity: 0, transform: "scale(0)" }}
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


        {[...new Array(9)].map((item, index) => {

          let backPosX = 0;
          let backPosY = 0;
          const dicStr = "ABCDEFGHI"
          const letter = dicStr[index]



          if ((index % 3) === 0) { backPosX = "0px" }
          else if ((index % 3) === 1) { backPosX = `-${(isFullW ? divWidth : imgW) / 3}px` }
          else if ((index % 3) === 2) { backPosX = `-${(isFullW ? divWidth : imgW) / 3 * 2}px` }

          if ((index / 3) < 1) { backPosY = "0px" }
          else if ((index / 3) < 2) { backPosY = `-${(isFullH ? divHeight : imgH) / 3}px` }
          else if ((index / 3) < 3) { backPosY = `-${(isFullH ? divHeight : imgH) / 3 * 2}px` }

          //if(index>1) return
          return (
            <div key={index}
              style={{
                backgroundImage: url,
                backgroundSize: imgW + "px " + imgH + "px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${backPosX} ${backPosY}`,

                ...letter === emptyLetter && { opacity: 0 },
                transform: `translateX(${shiftXArr[index]}) translateY(${shiftYArr[index]})`,
                transition: "transform 200ms"

              }}
              onClick={function (e) {

                e.preventDefault(); e.stopPropagation()
           
                if (index === emptyLetterIndex) { return }

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

                    setShiftYArr(pre => {
                      return [...arr]
                    })
                  }


                  else if ((pos - posEmpty === -1)||(pos - posEmpty === 1)) {

                    const diff = (pos - posEmpty) === -1 ?100:-100
                    const arr = shiftXArr
                    arr[index] = (Number(arr[index].replace("%", "")) + diff) + "%"
                    arr[emptyLetterIndex] = (Number(arr[emptyLetterIndex].replace("%", "")) - diff) + "%"

                    setShiftXArr(pre => {                  
                      return [...arr]
                    })
                  }

            
                }

              }}


            />
          )


        })}




      </Container>

    </>

  );
}

export default App;
