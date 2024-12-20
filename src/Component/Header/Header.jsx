/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import './Header.css'
const Header = ({ navClickHandler, navClickHandlerTrue }) => {
    return (
        <div className="shadow-xl bg-emerald-500">
            <div className="flex  md:flex-row gap-4 flex-col justify-between items-center max-w-screen-xl mx-auto p-5  text-white">

                <a href="" className='text-4xl font-semibold cursor-pointer'>Home.jsx</a>

                <nav id="nav-bar" className="flex gap-5 md:gap-10 font-semibold text-xl ">
                    <button className="hover:text-black active:scale-95 transition-all" onClick={navClickHandlerTrue} ><NavLink to="/" >Home</NavLink></button>
                    <button className="hover:text-black active:scale-95 transition-all" onClick={navClickHandler}><NavLink to="/about">About</NavLink></button>
                    <button className="hover:text-black active:scale-95 transition-all" onClick={navClickHandler}><NavLink to="/users">Users</NavLink></button>
                    <button className="hover:text-black active:scale-95 transition-all" onClick={navClickHandler}><NavLink to="/posts">Posts</NavLink></button>
                    <button className="hover:text-black active:scale-95 transition-all" onClick={navClickHandler}><NavLink to="/contact">Contact</NavLink></button>
                </nav>

            </div>
        </div>
    )
}

export default Header