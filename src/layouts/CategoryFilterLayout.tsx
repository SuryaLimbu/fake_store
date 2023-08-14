import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import { FiFilter, FiChevronDown } from "react-icons/fi";
import { useParams } from "react-router-dom";

const CategoryFilterLayout = () => {
    const { title } = useParams();
    // console.log(category);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [data, setData] = useState([])
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products/category/${title}`
                );
                // console.log(response);
                setData(response.data);
                // setIsLoading(false);
                // window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [title]);

    console.log(data)

    return (
        <>
            <div>


                <div className="bg-white">
                    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Workspace</h1>
                        <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers.</p>
                    </div>

                </div>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between items-center border-t border-b border-gray-200 py-2 sm:text-lg font-semibold px-4">
                        <div className="flex items-center gap-4">
                            <button onClick={toggleCollapse} className="flex items-center gap-2 border-r  border-gray-200 pr-4 sm:pr-8"><FiFilter />Filter</button>
                            <button>Clear all</button>
                        </div>
                        <div>
                            <details className="dropdown dropdown-end">
                                <summary className="btn">Sort <FiChevronDown /></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Most Popular</a></li>
                                    <li><a>Best Rating</a></li>
                                    <li><a>Newest</a></li>
                                </ul>
                            </details>

                        </div>
                    </div>


                    <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 py-6 px-4">
                            <div>
                                <fieldset>
                                    <legend className="block font-medium">Price</legend>
                                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-0" name="price[]" value="0" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-0" className="ml-3 min-w-0 flex-1 text-gray-600"> $0 - $25 </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-1" name="price[]" value="25" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-1" className="ml-3 min-w-0 flex-1 text-gray-600"> $25 - $50 </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-2" name="price[]" value="50" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-2" className="ml-3 min-w-0 flex-1 text-gray-600"> $50 - $75 </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> $75+ </label>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset>
                                    <legend className="block font-medium">Color</legend>
                                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-0" name="price[]" value="0" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-0" className="ml-3 min-w-0 flex-1 text-gray-600"> White</label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-1" name="price[]" value="25" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-1" className="ml-3 min-w-0 flex-1 text-gray-600"> Beige </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-2" name="price[]" value="50" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-2" className="ml-3 min-w-0 flex-1 text-gray-600"> Blue </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> Brown </label>
                                        </div>
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> Green </label>
                                        </div>
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> Purple </label>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset>
                                    <legend className="block font-medium">Size</legend>
                                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-0" name="price[]" value="0" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-0" className="ml-3 min-w-0 flex-1 text-gray-600"> XS</label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-1" name="price[]" value="25" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-1" className="ml-3 min-w-0 flex-1 text-gray-600"> S </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-2" name="price[]" value="50" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-2" className="ml-3 min-w-0 flex-1 text-gray-600"> M </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> L </label>
                                        </div>
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> XL </label>
                                        </div>
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-3" name="price[]" value="75" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-3" className="ml-3 min-w-0 flex-1 text-gray-600"> 2XL </label>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset>
                                    <legend className="block font-medium">Category</legend>
                                    <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-0" name="price[]" value="0" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-0" className="ml-3 min-w-0 flex-1 text-gray-600"> All Arrivals</label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-1" name="price[]" value="25" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-1" className="ml-3 min-w-0 flex-1 text-gray-600"> Tees </label>
                                        </div>

                                        <div className="flex items-center text-base sm:text-sm">
                                            <input id="price-2" name="price[]" value="50" type="checkbox" className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                            <label htmlFor="price-2" className="ml-3 min-w-0 flex-1 text-gray-600"> Objects </label>
                                        </div>


                                    </div>
                                </fieldset>

                            </div>


                        </div>
                    </div>

                </div>

                <section className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                        {data.map(product => (
                            <ProductCard product={product} />
                        ))}




                    </div>

                </section>
            </div >




        </>
    )
}
export default CategoryFilterLayout;