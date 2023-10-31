import { NavLink } from "react-router-dom"
import image404 from "./../../assets/404.1.png"
export default function Error404() {
    return (
        <div className="grid justify-center">
            <img src={image404} alt="404" width="500" />
            <NavLink to="/"><button className="btn btn-outline w-fit m-10 mx-auto">Go to Home Page</button></NavLink>
        </div>
    )
}
