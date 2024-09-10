'use client'
import Model from '../_components/Model'
import Home from './Home'
import Customizer from './Customizer'
function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Model/>
      <Customizer />
    </main>
  )
}

export default App
