import React from 'react'
import './Todo.css'
export default ({handleClick, item}) => {
    return (
        <li onClick={() => handleClick(item)} className={`${item.completed ? 'completed' : ''}`}>
            {item.task}
        </li>
    )
}
