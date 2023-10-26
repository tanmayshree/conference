import logo from "./../../assets/logo.jpg"
const Hero = () => {
    return (
        <div className="flex justify-between mx-10 select-none md:border-b-2 border-cyan-700 py-4">
            <div className="w-28">
                <img src={logo} alt="d" width="200px" />
            </div>
            <div className="grid items-center">
                <div>
                    <p className="md:text-2xl font-mono font-bold">5th International Conference on Data & Information Sciences (ICDIS-2023)</p>
                </div>
                <div className="select-none justify-center text-md text-white bg-cyan-950 rounded-2xl mx-auto">
                    <div className="px-3 py-2">June 16-17, 2023</div>
                </div>
                <div>
                    <p className="text-lg text-cyan-900 font-medium">Raja Balwant Singh Engineering Technical Campus, Bichpuri,
                        Agra, Uttar Pradesh, INDIA</p>
                </div>
            </div>
            <div className="w-28">
                <img src={logo} alt="d" width="200px" />
            </div>
        </div>
    )
}

export default Hero;
