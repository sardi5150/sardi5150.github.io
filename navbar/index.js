const Navbar = () => {
    return (
        <nav className="flex justify-between px-4 py-2 items-center bg-slate-800">
            <div className="flex items-center"> 
                <img src="/images/sardi_logo.png" className="w-12"></img >
                <h2 className="text-yellow-500">Sar<span className="
                text-red-500">day</span></h2>

            </div>
            <ul className="flex space-x-4 text-white text-sm font-[Poppins]  ">
                <li>
                 <a href="#" className="hover:text-yellow-500"
                >HOME
                </a>
                </li>
                <li><a href="#" className="hover:text-yellow-500">ABOUT</a></li>
                <li><a href="#" className="hover:text-yellow-500"> CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Navbar