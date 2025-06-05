import "./App.css";
import banner from "./assets/banner1.png";
import Exclusive from "./components/Exclusive";
import Massage from "./components/Massage";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";

function App() {
  return (
    <div>
      <header
        className="min-h-[870px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "auto",
        }}
      >
        <Navbar></Navbar>
        <div className="mt-32 xl:w-10/12 mx-auto">
          <div className="w-[800px]">
            <h3 className="text-6xl font-semibold text-white leading-snug">
              Turning Your Real Estate Dreams into Reality
            </h3>
            <p className="text-2xl text-white leading-12">
              Forget clunky application forms. We offer a modern, user-friendly
              platform that makes applying for a job a breeze.
            </p>
            <label className="input bg-white mt-10 w-[500px] text-gray-500">
              Search your dream real estate
              <input type="text" className="grow" placeholder="" />
              <span className="badge badge-neutral badge-xs px-4 py-4">
                Search for booking
              </span>
            </label>
          </div>
        </div>
      </header>
      <Trusted></Trusted>
      <Exclusive></Exclusive>
      <Massage></Massage>
       
    </div>
  );
}

export default App;
