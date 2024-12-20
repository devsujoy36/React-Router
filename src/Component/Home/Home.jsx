import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Loading from "../Loading/Loading"

const Home = () => {
const navigation = useNavigation()
const location = useLocation()
console.log(location);

    return (
        <div className="">
            <Header/>
            {
                navigation.state === "loading"?<Loading/>:<Outlet />
            }
            
            
            <Footer/>
            
        </div>
    )
}

export default Home