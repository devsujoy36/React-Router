import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="shadow-xl bg-emerald-500">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto p-5  text-white">
                <a href="" className='text-4xl font-semibold cursor-pointer'>Home.jsx</a>
                <nav className="flex gap-10 font-semibold text-xl ">
                    <Link to="/" className="hover:text-black active:scale-95 transition-all">Home</Link>
                    <Link to="about" className="hover:text-black active:scale-95 transition-all">About</Link>
                    <Link to="users" className="hover:text-black active:scale-95 transition-all">Users</Link>
                    <Link to="blogs" className="hover:text-black active:scale-95 transition-all">Blogs</Link>
                    <Link to="contact" className="hover:text-black active:scale-95 transition-all">Contact</Link>
                </nav>
            </div>
        </div>

    )
}

export default Header