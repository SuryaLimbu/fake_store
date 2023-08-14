import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiArrowDown, FiArrowRight, FiStar, FiMessageCircle, FiShoppingCart } from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import { Tabs } from 'react-daisyui';
import { useParams } from 'react-router-dom';


// 
// import { useCart } from 'react-use-cart';


import { Product } from '../models/Product';

interface IState {
    product: Product | null;
    loading: boolean;
    error: string;
}

const ProductDetails: React.FC = () => {


    const [tabValue, setTabValue] = useState(0);
    const [data, setData] = useState<IState>({
        loading: false,
        product: null,
        error: ''
    });
    const [sData, setSData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(prevData => ({ ...prevData, loading: true }));
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products/${id}`
                );
                // console.log(response.data); // Check the response data in the console
                setData(prevData => ({
                    ...prevData,
                    loading: false,
                    product: response.data
                }));
                // setIsLoading(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);
    console.log(data.product?.title);

    //fetch similar data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products?limit=4`
                );
                // console.log(response);
                setSData(response.data);
                // setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    // 


    const { loading, product, error } = data;



    return (
        <>
            <div>


                {loading && <>Loading....</>}
                {error && <p>{error}</p>}
                {data.product ?(


                    <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-20 lg:px-30">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 sm:gap-20">
                            <div className="grid grid-cols-3">
                                <div className="flex flex-col items-center justify-between">
                                    <div className="carousel flex flex-col gap-6 items-center ">

                                        <div id="slide1" className="carousel-item relative w-10 h-10 sm:w-20 sm:h-20 border border-gray-500  rounded-xl sm:rounded-3xl p-1">
                                            <img src={product?.image} className="w-full object-cover object-center rounded-xl sm:rounded-3xl" />
                                        </div >
                                        <div id="slide1" className="carousel-item relative w-10 h-10 sm:w-20 sm:h-20">
                                            <img src={product?.image} className="w-full object-cover object-center rounded-xl sm:rounded-3xl" />
                                        </div>
                                        <div id="slide1" className="carousel-item relative w-10 h-10 sm:w-20 sm:h-20 ">
                                            <img src={product?.image} className="w-full object-cover object-center rounded-xl sm:rounded-3xl" />
                                        </div>
                                        <div className="flex flex-col justify-between transform -translate-y-1/2 pt-40 gap-5">
                                            <a href="#slide4" className="btn btn-circle"><FiArrowUp /></a>
                                            <a href="#slide2" className="btn btn-circle"><FiArrowDown /></a>
                                        </div>
                                    </div >

                                </div >
                                <div className=' col-span-2'>
                                    <img src={product?.image} alt="" />
                                </div>
                            </div >
                            <div>

                                <div className="text-sm breadcrumbs">
                                    <ul>
                                        <li><Link to={`/`}>Home</Link></li>
                                        <li><a>Documents</a></li>
                                        <li>Add Document</li>
                                    </ul>

                                </div>
                                <h1 className=' font-bold text-4xl'>{product?.title}</h1>
                                <div className='py-6 flex gap-10 font-medium text-lg'>
                                    <div className='flex items-center gap-2 '>
                                        <FiStar className="fill-orange-200 text-orange-200"></FiStar>
                                        <FiStar className="fill-orange-200 text-orange-200"></FiStar>
                                        <FiStar className="fill-orange-200 text-orange-200"></FiStar>
                                        <FiStar className="fill-orange-200 text-orange-200"></FiStar>
                                        <FiStar className="fill-orange-200 text-orange-200"></FiStar>
                                        4.5
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FiMessageCircle />
                                        120 Comments
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-5'>
                                        <h1 className=' font-semibold'>Select Size</h1>
                                        <h1 className='flex items-center gap-2'>Size Guide  <FiArrowRight /></h1>
                                    </div>
                                    <div className='flex gap-2 py-6'>
                                        <button className='border-2 border-gray-200 rounded-xl px-4 py-2 text-lg'>X</button>
                                        <button className='border-2 border-gray-200 rounded-xl px-4 py-2 text-lg'>S</button>
                                        <button className=' bg-gray-900 text-white rounded-xl px-4 py-2 text-lg'>M</button>
                                        <button className='border-2 border-gray-200 rounded-xl px-4 py-2 text-lg'>L</button>
                                        <button className='border-2 border-gray-200 rounded-xl px-4 py-2 text-lg'>XL</button>
                                    </div>
                                    <div className='py-6'>
                                        <h1>Colors Availables</h1>
                                        <div className='flex gap-2 py-4'>
                                            <button className='rounded-full bg-red-600 w-8 h-8 '></button>
                                            <button className='rounded-full bg-gray-900 w-8 h-8 border-2 border-gray-400 p-1'></button>
                                            <button className='rounded-full bg-yellow-600 w-8 h-8 '></button>
                                            <button className='rounded-full bg-pink-600 w-8 h-8 '></button>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex gap-5 py-6'>
                                    <button className='flex items-center btn btn-primary rounded-full px-4 md:px-10 lg:px-20'><FiShoppingCart /> Add to Cart</button>
                                    <button className='btn font-bold text-lg rounded-full px-10 '>${product?.price}</button>
                                </div>

                                <hr className='opacity-80' />

                                <div className='grid grid-cols-1  sm:grid-cols-2 pt-4 gap-4'>
                                    <div>Secure Payment</div>
                                    <div>Size & Fit</div>
                                    <div>Free Shipping</div>
                                    <div>Free Shipping & Returns</div>


                                </div>
                            </div>
                        </div >
                        {/* product details */}
                        <div className='mt-10' >
                            <h1 className=' text-xl font-bold'>Product Description</h1>
                            <div id='tabs4'>
                                <Tabs value={tabValue} variant="bordered" onChange={setTabValue} size='lg' className=" font-medium space-x-4">
                                    <Tabs.Tab value={0} >Description</Tabs.Tab>
                                    <Tabs.Tab value={1} >User Comments</Tabs.Tab>
                                    <Tabs.Tab value={2} >Queries</Tabs.Tab>
                                </Tabs>
                                {tabValue === 0 && (
                                    <div>
                                        <h1 className='text-xl font-bold'>Overview</h1>

                                    </div>
                                )}
                                {tabValue === 1 && (
                                    <div>
                                        User Comments
                                    </div>
                                )}
                                {tabValue === 2 && (
                                    <div>
                                        Queries
                                    </div>
                                )}
                            </div>
                        </div>




                        {/* similar products */}
                        <div className='py-6' >
                            <h1 className='text-xl font-bold py-6'>Similar Products</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {sData.map(product => (
                                    <ProductCard product={product} />
                                ))}

                            </div>
                        </div >

                    </div >
                ) : (
                    <p>No product data </p>
                )
                }

            </div >
        </>
    )
}
export default ProductDetails;