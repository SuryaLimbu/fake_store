import { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from "react-router-dom";

// 
import {useCart } from "react-use-cart";
const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/products/categories`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // useEffect(() => {
    //     axios.get(`https://fakestoreapi.com/carts`).then((res) => {
    //         // console.log(res);
    //     })
    // })


    // cart
    const { totalUniqueItems, cartTotal } = useCart();

    // console.log(categories)
    return (
        <>
            <div className="navbar max-w-7xl mx-auto bg-base-100 px-4 sm:px-10 md:px-20 lg:px-30 py-4">
                <div className="flex-1">
                    <Link className=" normal-case text-xl font-bold" to={`/`}>K<span>e</span>D<span>e</span>M</Link>
                </div>
                {/* start navmenu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Categories</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 cursor-pointer">
                        <li><Link to={`/`}>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    {categories.map((category) => (
                                        <li key={category}>
                                            <Link to={`/categoryfilter/${category}`}>{category}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                {/* seachbar */}
                <div>
                    <div className="relative flex items-center w-full h-12 rounded-full bg-gray-100 overflow-hidden px-2 hidden lg:flex">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <FiSearch />
                        </div>

                        <input
                            className="peer h-full w-full outline-none  text-sm text-gray-700 pr-2 bg-gray-100"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>
                {/* end nav menu */}

                <div className="flex-none space-x-4 pl-4 navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator bg-gray-100 p-3 rounded-full">
                                <FiShoppingCart className="w-5 h-5" />
                                <span className="badge badge-sm indicator-item">{totalUniqueItems} </span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{totalUniqueItems} Items</span>
                                <div>
                                    cart items here
                                </div>
                                <span className="text-info">Subtotal: ${cartTotal}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/358532000_3180418502104716_7404074812858620467_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=8WK_HtQTr5cAX_lHj0_&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAnVpJak-4edlqonk-WyjZ-JE6BkwlN-eI6maOXwGPDVA&oe=64DC0BAC" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
