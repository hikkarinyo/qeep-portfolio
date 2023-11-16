import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
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
                    {project.client &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Клиент</h2>
                            <p className='projectText'>{project.client}</p>
                        </>
                    }
                    {project.concept &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Концепция</h2>
                            <p className='projectText'>{project.concept}</p>
                        </>
                    }
                    {project.problem &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Задача</h2>
                            <p className='projectText'>{project.problem}</p>
                        </>
                    }
                    {project.fullDescription &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Описание</h2>
                            <p className='projectText'>{project.fullDescription}</p>
                        </>
                    }
                </div>
                <div className='projectImage'>
                    <img src={project.images['1']} alt={project.title} draggable='false'/>
                </div>
            </section>
            {project.objective &&
            <section className='projectSection'>
                    <div className='projectContent'>
                        <h2 className='gradientSubTitle gradient'>Цель проекта</h2>
                        <p className='projectText'>{project.objective}</p>
                    </div>
            </section>
            }
            <section className='projectSection'>
                <div className='projectImage'>
                    <img className='projectImage' src={project.images['2']} alt={project.title} draggable='false'/>
                </div>
                <div className='projectContent'>
                    {project.solution &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Решение</h2>
                            <p className='projectText'>{project.solution}</p>
                        </>
                    }
                    {project.projectFeatures &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Особенности проекта</h2>
                            <p className='projectText'>{project.projectFeatures}</p>
                        </>
                    }
                    {project.improvement &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Непрерывное совершенствование</h2>
                            <p className='projectText'>{project.improvement}</p>
                        </>
                    }
                    {project.featuresAndInnovations &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Особенности и инновации</h2>
                            {project.featuresAndInnovations?.map((item, index) => (
                                <ul key={index}>
                                    <li className='projectText'>{item}</li>
                                </ul>
                            ))}
                        </>
                    }
                </div>
            </section>
            <section className='projectSection'>
                <div className='projectContent'>
                    {project.result &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Результат</h2>
                            <p className='projectText'>{project.result}</p>
                        </>
                    }
                    {project.projectSignificance &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Значение проекта</h2>
                            <p className='projectText'>{project.projectSignificance}</p>
                        </>
                    }
                    {project.businessResult &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Результаты и влияние на бизнес</h2>
                            <p className='projectText'>{project.businessResult}</p>
                        </>
                    }
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
                    {project.technologiesDescription &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Используемые технологии</h2>
                            <p className='projectText'>{project.technologiesDescription}</p>
                        </>
                    }
                    <div className='projectTechnologiesWrapper'>
                        {project.technologies?.map((tech, index) => (
                            <span key={index} className='projectTechnologies'>{tech}</span>
                        ))}
                    </div>
                    {project.resultWork &&
                        <>
                            <h2 className='gradientSubTitle gradient'>Результат работы</h2>
                            <a className='projectLink' href={project.resultWork} target='_blank'
                               rel="noopenner noreferrer">
                                Посмотреть сайт
                            </a>
                        </>
                    }
                </div>
            </section>
            <ScrollButton/>
        </main>
    )
}

export default Project
