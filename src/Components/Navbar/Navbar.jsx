import { Link } from "react-router-dom";
import { ArrowDown } from "../../Icons/ArrowDown";
//import link in react
// import { Link } from "react-router-dom";

import "./Navbar.css"

const NavbarList = [
    { name: "Home", link: "/", isDropdown: false },
    {
        name: "Committee", link: "s#", isDropdown: true, dropdown: [
            { name: "Advisory Board", link: "/advisory-board" },
            { name: "Technical Program Committee", link: "/technical-program-committee" },
            { name: "Organizing Committee", link: "/organizing-committee" },
            { name: "Student Committee", link: "/student-committee" },
        ]
    },
    {
        name: "Author", link: "#", isDropdown: true, dropdown: [
            { name: "Call for Papers", link: "/call-for-papers" },
            { name: "Paper Submission", link: "/paper-submission" },
            { name: "Registration", link: "/registration" },
            { name: "Proceedings", link: "/proceedings" },
        ]
    },
    {
        name: "Schedule", link: "/schedule", isDropdown: true, dropdown: [
            { name: "Important Dates", link: "/important-dates" },
            { name: "Venue", link: "/venue" },
            { name: "How to Reach", link: "/how-to-reach" },
        ]
    },
    {
        name: "Keynote Speaker", link: "#", isDropdown: true, dropdown: [
            { name: "Our Speaker", link: "/our-speaker" },
        ]
    },
];

export default function Navbar() {
    return (
        <>
            {/* <BrowserRouter> */}
                <div className="navbar bg-base-100 border-b-4 fixed z-10">
                    {/* Small Screen */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[300px]">
                                {NavbarList.map((item, index) => {
                                    if (item.isDropdown) {
                                        return (
                                            <li key={index} tabIndex={index}>
                                                <details>
                                                    <summary>{item.name}</summary>
                                                    <ul className="p-2">
                                                        {item.dropdown.map((subitem, subindex) => {
                                                            return (
                                                                <li key={subindex}>
                                                                    <Link to={subitem.link}>
                                                                        <summary>{subitem.name}</summary>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </details>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={index}>
                                                <Link to={item.link}>
                                                    <summary>{item.name}</summary>
                                                </Link>
                                            </li>
                                        )
                                    }

                                })}
                            </ul>
                        </div>
                        <span className="btn btn-ghost normal-case text-xl">ICDIS - 2023</span>
                    </div>
                    {/* Big Screen */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavbarList.map((item, index) => {
                                if (item.isDropdown) {
                                    return (
                                        <li key={index} tabIndex={index} className="dropdown w-[150px] flex text-center justify-center align-middle self-center">
                                            <details className="text-center">
                                                <summary className="justify-center">{item.name}<ArrowDown /></summary>
                                                <ul className="p-2 menu menu-sm dropdown-content w-[150px]">
                                                    {item.dropdown.map((subitem, subindex) => {
                                                        return (
                                                            <li key={subindex}>
                                                                <Link to={subitem.link}>
                                                                    <summary>{subitem.name}</summary>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </details>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index} className="w-[150px]">
                                            <Link to={item.link} className="justify-center">
                                                <summary className="justify-center">{item.name}</summary>
                                            </Link>
                                        </li>
                                    )
                                }

                            })}
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                </div> */}
                </div>
            {/* </BrowserRouter> */}
        </>
    )
}
