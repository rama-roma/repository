import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Counter from './pages/Counter'
import Home from './pages/Home'
import Sync from './pages/Sync'
import Async from './pages/Async'
import Info from './pages/Info'

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/counter' element={<Counter/>} />
           <Route path='/sync' element={<Sync/>} />
           <Route path='/async' element={<Async/>} />
           <Route path='/info/:id' element={<Info/>} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App