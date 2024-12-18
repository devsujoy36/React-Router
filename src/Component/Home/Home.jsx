import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div className="">
            <div className="border shadow-xl p-5">
                <h1 className='text-4xl font-semibold cursor-pointer'>Home.jsx</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Home