import { BrowserRouter, Routes, Route } from "react-router-dom"
import Unclustered from './components/2-unclustered_tab/Unclustered'
import Clustered from './components/1-clustered_tab/Clustered'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clustered/>} />
          <Route path='/unclustered' element={<Unclustered/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App