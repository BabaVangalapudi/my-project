import Home from './components/home'
import Landing from './components/landing'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
