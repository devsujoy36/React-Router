import { NavLink } from "react-router-dom"
import './Header.css'
const Header = () => {
    return (
        <div className="shadow-xl bg-emerald-500">
            <div className="flex  md:flex-row gap-4 flex-col justify-between items-center max-w-screen-xl mx-auto p-5  text-white">

                <a href="" className='text-4xl font-semibold cursor-pointer'>Home.jsx</a>

                <nav id="nav-bar" className="flex gap-5 md:gap-10 font-semibold text-xl ">
                    <NavLink to="/" className="hover:text-black active:scale-95 transition-all">Home</NavLink>
                    <NavLink to="/about" className="hover:text-black active:scale-95 transition-all">About</NavLink>
                    <NavLink to="/users" className="hover:text-black active:scale-95 transition-all">Users</NavLink>
                    <NavLink to="/posts" className="hover:text-black active:scale-95 transition-all">Posts</NavLink>
                    <NavLink to="/contact" className="hover:text-black active:scale-95 transition-all">Contact</NavLink>
                </nav>

            </div>
        </div>
    )
}

export default Header