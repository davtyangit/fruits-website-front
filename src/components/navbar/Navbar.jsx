import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from '../card/Card'
import Logo from '../../images/icons/logo.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }

    return (
        <div className='header'>
            <div className="logo" onClick={toHome}>
                <img src={Logo} alt="logo" />
            </div>
            <nav className='navbar'>
                <NavLink className={({ isActive }) => isActive ? 'active_links' : 'pasive_links'} to="/">Home</NavLink>
                <a className="dropdown">
                    <NavLink className={({ isActive }) => isActive ? 'active_links' : 'pasive_links'} to="/products">Products</NavLink>
                    <div className="dropdown-content">
                        <NavLink className={({ isActive }) => isActive ? 'dropdow_active' : 'pasive_links'} to="/products/fruits">Fruits</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'dropdow_active' : 'pasive_links'} to="/products/vagetables">Vegetables</NavLink>
                    </div>
                </a>
            </nav>
            <NavLink className={({ isActive }) => isActive ? 'active_links' : 'pasive_links'} to="/card">
                <Card />
            </NavLink>
        </div>
    )
}
