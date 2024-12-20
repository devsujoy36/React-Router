import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Loading from "../Loading/Loading"
import { useState } from "react"

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location);


    const [toggle, setToggle] = useState(true);

    const navClickHandler = () => {
        setToggle(false)
    }

    return (
        <div className="">
            <Header navClickHandler={navClickHandler} />
            {
                toggle &&
                <div className="min-h-[76vh] bg-black text-white flex justify-center gap-2 flex-col items-center">
                    <h1 className="text-5xl font-bold">Wellcome To Our</h1>
                    <h1 className="text-4xl  font-bold">React Route</h1>
                </div>
            }
            
            {
                navigation.state === "loading" ? <Loading /> : <Outlet />
            }

            <Footer />

        </div>
    )
}

export default Home