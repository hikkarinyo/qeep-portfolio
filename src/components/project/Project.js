import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../../data/projects'
import '../project/project.css'
import ScrollButton from "../scrollButton/ScrollButton";

const Project = () => {
    const {name} = useParams()
    const project = projects.find(project => project.link === name)

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <main className='project container'>
            <section className='projectSection'>
                <div className='projectContent'>
                    <h1 className='projectTitle gradient'>{project.title}</h1>
                    <h2 className='gradientSubTitle gradient'>{project.client ? 'Клиент' : 'Концепция'}</h2>
                    <p className='projectText'>{project.client ? project.client : project.concept}</p>
                    <h2 className='gradientSubTitle gradient'>{project.problem ? 'Задача' : 'Описание'}</h2>
                    <p className='projectText'>{project.problem ? project.problem : project.fullDescription}</p>
                </div>
                <div className='projectImage'>
                    <img src={project.images['1']} alt={project.title} draggable='false'/>
                </div>
            </section>
            <section className='projectSection'>
                <div className='projectImage'>
                    <img className='projectImage' src={project.images['2']} alt={project.title} draggable='false'/>
                </div>
                <div className='projectContent'>
                    <h2 className='gradientSubTitle gradient'>{project.solution ? 'Решение' : 'Непрерывное совершенствование'}</h2>
                    <p className='projectText'>{project.solution ? project.solution : project.improvement}</p>
                </div>
            </section>
            <section className='projectSection'>
                <div className='projectContent'>
                    <h2 className='gradientSubTitle gradient'>Результат</h2>
                    <p className='projectText'>{project.result}</p>
                </div>
                <div className='projectImage'>
                    <img className='projectImage' src={project.images['3']} alt={project.title} draggable='false'/>
                </div>
            </section>
            <section className='projectSection'>
                <div className='projectImage'>
                    <img className='projectImage' src={project.images['4']} alt={project.title} draggable='false'/>
                </div>
                <div className='projectContent'>
                    <h2 className='gradientSubTitle gradient'>Используемые технологии</h2>
                    <p className='projectText'>{project.technologiesDescription}</p>
                    <div className='projectTechnologiesWrapper'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='projectTechnologies'>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>
            <ScrollButton />
        </main>
    )
}

export default Project
