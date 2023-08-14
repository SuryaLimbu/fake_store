

import { FiFacebook, FiInstagram, FiGithub, FiYoutube, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="mt-10 bg-gray-100 py-5">
                <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-5 px-4 sm:px-10 md:px-20 lg:px-30 gap-5">
                    <div className=' '>
                        <a className="normal-case text-xl font-bold">K<span>e</span>D<span>e</span>M</a>
                        <h1>Making the world a better place through constructing elegant hierarchies.</h1>

                        <div className='flex  space-x-4 py-5'>
                            <FiFacebook />
                            <FiInstagram />
                            <FiGithub />
                            <FiYoutube />
                            <FiTwitter />

                        </div>
                    </div>
                    <div>
                        <h1>Solutions</h1>
                        <ul>
                            <li><Link to={``}>Marketing</Link></li>
                            <li><Link to={``}>Analytics</Link></li>
                            <li><Link to={``}>Commerce</Link></li>
                            <li><Link to={``}>Insights</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <ul>
                            <li><Link to={``}>Pricing</Link></li>
                            <li><Link to={``}>Documentation</Link></li>
                            <li><Link to={``}>Guides</Link></li>
                            <li><Link to={``}>API Status</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h1>Solutions</h1>
                        <ul>
                            <li><Link to={``}>Marketing</Link></li>
                            <li><Link to={``}>Analytics</Link></li>
                            <li><Link to={``}>Commerce</Link></li>
                            <li><Link to={``}>Insights</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <ul>
                            <li><Link to={``}>Pricing</Link></li>
                            <li><Link to={``}>Documentation</Link></li>
                            <li><Link to={``}>Guides</Link></li>
                            <li><Link to={``}>API Status</Link></li>

                        </ul>
                    </div>







                </div>

            </div>
            <div className='px-4 sm:px-10 md:px-20 lg:px-30 bg-gray-200 flex flex-col gap-2 text-center items-center justify-between py-4 font-regular'>
                <h1>Develop by: Surya Man Kedem</h1>
                <h1>Date: 2023/8/12</h1>
                <h1>API: <Link to={`https://fakestoreapi.com/`}>fakestoreapi</Link></h1>
            </div>
        </>
    )
}
export default Footer;