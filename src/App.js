import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './pages/Home'
import Project from './components/project/Project'
import Loader from './components/loader/Loader'


function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <ParallaxProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects/:name" element={<Project />} />
                    </Routes>
                </ParallaxProvider>
            )}
        </>
    )
}

export default App
