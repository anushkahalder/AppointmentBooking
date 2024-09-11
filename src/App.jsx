import { useState } from 'react'
 
import AddBooking from './components/AddBooking'
import AllBooking from './components/AllBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <AddBooking/>
  <AllBooking/>
  </>
  )
}

export default App
