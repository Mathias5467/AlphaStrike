import { useState } from 'react'
import { createContext } from 'react'
import Header from './Header';
export const MainColor = createContext();

function App() {
  const mainColors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5']
  const [actualColor, setActualColor] = useState(mainColors[0])

  const setColor = (number) => {
    if (number >= 0 && number < mainColors.length) {
      setActualColor(mainColors[number]);
    }
  }

  return (
      <MainColor.Provider value={{actualColor, setColor}}>
        <Header />
      </MainColor.Provider>
  )
}

export default App;