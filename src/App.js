import { Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './pages/Home'
import Project from './components/project/Project'

function App() {
    return (
        <ParallaxProvider>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects/:name' element={<Project/>}/>
            </Routes>
        </ParallaxProvider>
    )
}

export default App
