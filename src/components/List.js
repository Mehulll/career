import React from 'react'
import {Link} from 'react-router-dom'
import './List.css'

function List() {
    return (
        <div>
            <p className = "p100"> List of Career</p>
            <ul className = "ul1">
            <li><Link to = "/astronaut" >Astronaut</Link></li>
            </ul>
        </div>
       
    );
}

export default List;