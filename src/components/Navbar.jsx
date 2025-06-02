import { IoIosSearch } from "react-icons/io";
import logo from "../assets/Isolation_Mode.png";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <img className="size-6 " src={logo} alt="" />
          <h4 className="text-3xl font-semibold"> HomeQuest</h4>
        </div>
        <div className="flex  ml-12 gap-4 items-center">
          <ul>Home</ul>
          <ul>Projects</ul>
          <ul>Contact</ul>
          <ul>Testimonial</ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <p>0123454676</p>
        <p className="size-8 rounded-full flex items-center justify-center bg-gray-300">
          <IoIosSearch />
        </p>
        <button className="px-4 py-1 rounded-2xl bg-[#DBFB1E] flex items-center gap-2">
          Get a Quote <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
