import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Project from './components/project/Project'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects/:name' element={<Project/>}/>
        </Routes>
    )
}

export default App
