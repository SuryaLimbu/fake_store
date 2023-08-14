
import HeroImage from '../assets/hero.png';

const Hero = () => {

    return (
        <>
            <div className=" bg-gray-100 px-4 sm:px-10 md:px-20 lg:px-30 ">
                <div className="max-w-7xl mx-auto  rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 min-h-screen items-center justify-center text-center">
                    <div className='space-y-10 text px-4 '>
                        <h1 className=' font-black text-6xl lg:text-8xl'>Fashion for All, Every Day</h1>
                        <button className='btn btn-primary'>Shop</button>
                    </div>
                    <div className='flex items-baseline justify-end'>
                        <img src={HeroImage} alt="Hero Image" className="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;