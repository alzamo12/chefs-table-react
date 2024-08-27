

const Banner = () => {
    return (
        <div className='bg-banner-bg w-auto md:h-[700px] h-auto bg-no-repeat bg-cover md:mt-10 py-8 rounded-3xl flex flex-col justify-center items-center md:space-y-10 space-y-2'>

            <h1 className="text-white md:text-5xl text-lg font-bold">Discover an exceptional cooking <br />
                class tailored for you!</h1>
            <p className="md:text-lg text-sm text-[#FFFFFF]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                problems to become an exceptionally well world-class Programmer.</p>
            <div className="">
                <button className="bg-[#0BE58A] text-black md:px-5 md:py-3 p-1 md:text-md text-sm font-semibold rounded-3xl mr-4">Explore Now</button>
                <button className="md:px-5 md:py-3 p-1 text-md font-semibold text-white border-white border-solid border-2 rounded-3xl">Our Feedback</button>
            </div>

        </div>
    );
};

export default Banner;