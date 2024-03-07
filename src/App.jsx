import Home from './components/home'
import Landing from './components/landing'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   {/* <Home/>   */}
   {/* <Landing/> */}
    </>
  )
}

export default App
