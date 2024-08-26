import { FaSearch } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl text-[#150B2B]">Recipe Calories</h2>
        <ul className="flex gap-8 text-black-rgba text-sm">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
        </ul>
        <div className="flex gap-3 items-center py-2 px-5 border-2 rounded-3xl bg-gray-200">
            <FaSearch className=" "></FaSearch>
            <input className=" text-black w-[100%] p-1 border-none outline-none bg-gray-200 " type="Search" placeholder="Search" />
        </div>
    </div>
    );
};

export default Nav;