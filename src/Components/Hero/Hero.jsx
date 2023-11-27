import logo from "./../../assets/logo.jpg"
const Hero = () => {
    return (
        <div className="flex justify-between mx-10 select-none md:border-b-2 border-cyan-700 py-4">
            <div className="w-28">
                <img src={logo} alt="d" width="200px" />
            </div>
            <div className="grid items-center">
                <div>
                    <p className="md:text-2xl font-mono font-bold mt-4 mb-2">5th International Conference on Data & Information Sciences (ICDIS-2023)</p>
                </div>
                <div className="md:my-1 select-none justify-center text-md text-white bg-cyan-950 rounded-md mx-auto">
                    <div className="px-2 py-2">January 8-9, 2024</div>
                </div>
                <div>
                    <p className="text-sm md:text-normal mt-1 text-cyan-900 font-normal">Raja Balwant Singh Engineering Technical Campus, Bichpuri,
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
