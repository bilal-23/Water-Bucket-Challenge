import "./App.css"

import { Solution } from "./components/solution"

function App() {
  return (
    <div className='container'>
      <h1>Water Tank Challenge</h1>
      <main>
        <Solution />
        <div className='problem-statement'>
          <h2>Problem Statement</h2>
          <ul>
            <li>
              We have magical system of connected water tanks. Each tank can hold 100L of water
            </li>
            <li>
              Every tank has an &quot;Add Water&quot; button, if the button is pressed down
              continuosly, then every 1s, it adds 200L of water in the tank, if the tank is not
              already full.
            </li>
            <li>
              The water levels in each tank will eventually settle to the same height. The water
              moves in or out of any tank at rate of 25L/second.
            </li>
            <li>
              Every tank also has a &quot;Empty tank&quot; button. When clicked, it will remove all
              the water from the tank in an instant.
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
