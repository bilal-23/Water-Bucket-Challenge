import { useRef } from "react"

import "./tank.css"

interface Props {
  filledWater: number
  index: number
  handleAddWater: (index: number) => void
  handleEmptyTank: (index: number) => void
  equilibrate: () => void
}
export const Tank = ({
  filledWater,
  index,
  handleEmptyTank,
  handleAddWater,
  equilibrate,
}: Props) => {
  const interval = useRef<number | undefined>()

  const handleAdd = () => {
    if (filledWater < 1000) {
      interval.current = setInterval(() => {
        handleAddWater(index)
      }, 1000)
    }
  }

  const handleEmpty = () => {
    handleEmptyTank(index)
  }
  return (
    <div className='tank-container'>
      <p>{filledWater} L</p>
      <div className='tank'>
        <div
          className='filled-water'
          style={{
            height: `${Math.floor(filledWater / 10)}%`,
          }}
        />
      </div>
      <div className='button-container'>
        <button
          className='add'
          onMouseDown={handleAdd}
          onMouseUp={() => {
            clearInterval(interval.current)
            equilibrate()
          }}
        >
          Add
        </button>
        <button className='empty' onClick={handleEmpty}>
          Empty
        </button>
      </div>
    </div>
  )
}
