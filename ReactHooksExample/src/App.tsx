import { StrictMode } from 'react'
import './App.css'
import Counter from './components/Counter'
import Tasks from './components/Tasks'
import { ThemeProvider } from './components/ThemeProvider'
import RandomName from './components/RandomName'
function App() {

  return (
    <StrictMode>
      <ThemeProvider>
        <Tasks></Tasks>
        <Counter></Counter>
        <RandomName></RandomName>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
