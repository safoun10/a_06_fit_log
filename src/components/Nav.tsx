import Image from "next/image";
import logo from "../assets/logo.png";

const Nav = () => {
    return (
        <div className="border-b border-gray-800 sticky top-0 z-100 bg-[#0c0d10]">
            <div className="navbar text-white max-w-7xl mx-auto px-4 py-5">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2">
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#15171C] rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-300">
                            <li><a className="text-neon font-semibold">Workouts</a></li>
                            <li><a className="hover:text-white">My Plan</a></li>
                        </ul>
                    </div>


                    <a className="flex items-center gap-2 cursor-pointer">
                        <Image src={logo} alt="logo"></Image>
                        <span className="text-xl font-semibold tracking-tighter text-white">FITLOG</span>
                    </a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 items-center">
                        <li>
                            <a className="bg-[#1D2B05] text-[#B5F200] font-semibold px-8 rounded-full hover:bg-[#273a07]">
                                Workouts
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white px-8">
                                My Plan
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Plan</span>
                        <span className="w-6 h-6 rounded-full bg-[#B5F200] text-black font-bold flex items-center justify-center text-xs">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Saved</span>
                        <span className="w-6 h-6 rounded-full border border-gray-700 bg-[#121418] text-white flex items-center justify-center text-xs">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;