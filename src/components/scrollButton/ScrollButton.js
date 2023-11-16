import React from 'react';
import '../scrollButton/scrollButton.css'
import { Link } from 'react-router-dom'

const ScrollButton = () =>{
    return (
        <Link className='scrollButton' to='/'>
            Назад
        </Link>
    )
}

export default ScrollButton