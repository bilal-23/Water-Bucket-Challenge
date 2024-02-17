import "./tank.css"

interface Props {
  filledWater: number
  index: number
  handleAddWater: (index: number) => void
  handleEmptyTank: (index: number) => void
}
export const Tank = ({ filledWater, index, handleEmptyTank, handleAddWater }: Props) => {
  const handleAdd = () => {
    handleAddWater(index)
  }

  const handleEmpty = () => {
    handleEmptyTank(0)
  }

  return (
    <div className='tank-container'>
      <p>{filledWater} Litres</p>
      <div className='tank'>
        <div className='filled-water' style={{ height: `${filledWater}%` }} />
      </div>
      <div className='button-container'>
        <button className='add' onClick={handleAdd}>
          Add
        </button>
        <button className='empty' onClick={handleEmpty}>
          Empty
        </button>
      </div>
    </div>
  )
}
