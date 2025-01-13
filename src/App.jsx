import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './commons/Layout'
import './App.css'
import { LogIn } from './LogIn/LogIn'
import { Dashboard } from './Dashboard/Dashboard'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LogIn/>}/>
            <Route element = {<Layout/>}>
              <Route path='/dashboard' element = {<Dashboard/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
