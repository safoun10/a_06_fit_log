"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/logo.png";
import { usePlan } from "@/context/ExerciseContext";

const Nav = () => {
    const pathname = usePathname();
    const { planList, savedList } = usePlan();

    const isWorkoutsActive = pathname === "/" || pathname.startsWith("/exercises");
    const isMyPlanActive = pathname.startsWith("/my-plan");

    const activeClass = "bg-[#1D2B05] text-[#B5F200] font-semibold px-8 rounded-full hover:bg-[#273a07]";
    const inactiveClass = "text-gray-400 hover:text-white px-8";

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
                            className="menu menu-sm dropdown-content bg-[#15171C] rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-300"
                        >
                            <li>
                                <Link
                                    href="/"
                                    className={isWorkoutsActive ? "text-[#B5F200] font-semibold" : "hover:text-white"}
                                >
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-plan"
                                    className={isMyPlanActive ? "text-[#B5F200] font-semibold" : "hover:text-white"}
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo Link -> Base Page */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <Image src={logo} alt="logo" />
                        <span className="text-xl font-semibold tracking-tighter text-white">FITLOG</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 items-center">
                        <li>
                            <Link href="/" className={isWorkoutsActive ? activeClass : inactiveClass}>
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-plan" className={isMyPlanActive ? activeClass : inactiveClass}>
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end gap-6 text-sm">
                    <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <span>Plan</span>
                        <span className="w-6 h-6 rounded-full bg-[#B5F200] text-black font-bold flex items-center justify-center text-xs">
                            {planList?.length || 0}
                        </span>
                    </Link>

                    <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <span>Saved</span>
                        <span className="w-6 h-6 rounded-full border border-gray-700 bg-[#121418] text-white flex items-center justify-center text-xs">
                            {savedList?.length || 0}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;