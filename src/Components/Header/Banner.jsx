

const Banner = () => {
    return (
        <div className='bg-banner-bg w-full h-[700px] bg-no-repeat bg-cover mt-10 rounded-3xl flex flex-col justify-center items-center space-y-10'>

            <h1 className="text-white text-5xl font-bold">Discover an exceptional cooking <br />
                class tailored for you!</h1>
            <p className="text-lg text-[#FFFFFF]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                problems to become an exceptionally well world-class Programmer.</p>
            <div className="">
                <button className="bg-[#0BE58A] text-black px-5 p-3 text-md font-semibold rounded-3xl mr-4">Explore Now</button>
                <button className="px-5 py-3 text-md font-semibold text-white border-white border-solid border-2 rounded-3xl">Our Feedback</button>
            </div>

        </div>
    );
};

export default Banner;