import { useCallback, useEffect, useState } from "react"

import "./solution.css"

import { Tank } from "./tank"

export const Solution = () => {
  const [totalWater, setTotalWater] = useState(0)
  const [water, setWater] = useState([0, 0, 0, 0])
  const [shouldEquilibrate, setShouldEquilibrate] = useState(false)

  useEffect(() => {
    if (!shouldEquilibrate) return
    const average = +(totalWater / 4).toFixed(3)
    const interval = setInterval(() => {
      setWater((prev) => {
        const newWater = [...prev]
        const arr = newWater.map((tank) => {
          if (Math.abs(tank - average) < 25) {
            tank = average
          } else if (tank > average) {
            tank -= 25
          } else if (tank < average) {
            tank += 25
          } else {
            tank = average
          }
          return tank
        })

        return arr
      })
    }, 1000)

    if (water.every((tank) => tank == average)) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [water, shouldEquilibrate, totalWater])

  const handleAddWater = useCallback((index: number) => {
    setShouldEquilibrate(false)
    setWater((prev) => {
      const newWater = [...prev]
      if (newWater[index] === 1000) return newWater
      // If tank is 800 or more, make it 1000
      if (newWater[index] >= 800 && newWater[index] < 1000) {
        newWater[index] = 1000
      }
      // If tank is emptier than 800, add 200
      if (newWater[index] < 800) newWater[index] += 200
      // Add water only when the tank is not full

      setTotalWater((prev) => {
        if (prev >= 3800) {
          return 4000
        } else {
          return prev + 200
        }
      })
      return newWater
    })
  }, [])

  const handlEmptyTank = useCallback(
    (index: number) => {
      const waterToEmpty = water[index]
      setTotalWater((prev) => {
        return prev - waterToEmpty
      })
      setWater((prev) => {
        const newWater = [...prev]
        newWater[index] = 0
        return newWater
      })
      setShouldEquilibrate(true)
    },
    [water]
  )

  const equilibrate = useCallback(() => {
    setShouldEquilibrate(true)
  }, [])

  return (
    <>
      <div className='solution'>
        <p className='total'>{totalWater} L</p>
        <div className='tanks-container'>
          <Tank
            equilibrate={equilibrate}
            handleAddWater={handleAddWater}
            filledWater={water[0]}
            index={0}
            handleEmptyTank={handlEmptyTank}
          />
          <Tank
            equilibrate={equilibrate}
            handleAddWater={handleAddWater}
            filledWater={water[1]}
            index={1}
            handleEmptyTank={handlEmptyTank}
          />
          <Tank
            equilibrate={equilibrate}
            handleAddWater={handleAddWater}
            filledWater={water[2]}
            index={2}
            handleEmptyTank={handlEmptyTank}
          />
          <Tank
            equilibrate={equilibrate}
            handleAddWater={handleAddWater}
            filledWater={water[3]}
            index={3}
            handleEmptyTank={handlEmptyTank}
          />
        </div>
      </div>
    </>
  )
}
