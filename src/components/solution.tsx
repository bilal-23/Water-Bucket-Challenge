import { useCallback, useState } from "react"

import "./solution.css"

import { Tank } from "./tank"

// 200litres = 600px = 200%
// 100litres = 300px = 100%
// 10litres = 30px = 10%
// 1litre = 3px = 1%
// 25litres = 75px = 25%

export const Solution = () => {
  const [water, setWater] = useState([0, 0, 0, 0])

  const handleAddWater = useCallback((index: number) => {
    setWater((prev) => {
      const newWater = [...prev]
      newWater[index] += 200
      return newWater
    })
  }, [])

  const handlEmptyTank = useCallback((index: number) => {
    console.log(index)
    setWater((prev) => {
      const newWater = [...prev]
      newWater[index] = 0
      return newWater
    })
  }, [])

  return (
    <div className='solution'>
      <Tank
        handleAddWater={handleAddWater}
        filledWater={water[0]}
        index={0}
        handleEmptyTank={handlEmptyTank}
      />
      <Tank
        handleAddWater={handleAddWater}
        filledWater={water[1]}
        index={1}
        handleEmptyTank={handlEmptyTank}
      />
      <Tank
        handleAddWater={handleAddWater}
        filledWater={water[2]}
        index={2}
        handleEmptyTank={handlEmptyTank}
      />
      <Tank
        handleAddWater={handleAddWater}
        filledWater={water[3]}
        index={3}
        handleEmptyTank={handlEmptyTank}
      />
    </div>
  )
}
