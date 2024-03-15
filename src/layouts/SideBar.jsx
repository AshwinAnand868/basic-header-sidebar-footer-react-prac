import React from "react";
import { NavLink } from 'react-router-dom';

const lists = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
]

const SideBar = () => {
    return (
        <div className="sidebar">
            {lists.map( (list, index) => (
                <NavLink to={list.path} key={index}
                    className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    {list.name}
                </NavLink>
            ))}
        </div>
    );
}

export default SideBar;