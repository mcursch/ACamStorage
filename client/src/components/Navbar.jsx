import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-300 h-20 relative">

      <div className="h-fit w-96 absolute bottom-0 right-0">
      <ul className="w-full">
        <button>
          <a href="/rent">
          <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full hover:bg-gray-400" >
            Rental page
            </li>
          </a>
          
        </button>
        <button>
          <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full hover:bg-gray-400">link2</li>
        </button>
        <button>
          <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full hover:bg-gray-400">link3</li>
        </button>
      </ul>
      </div>


      <div className="w-fit absolute bottom-0 left-0 mb-2 ml-2 text-2xl font-bold">
        <NavLink to="/">
          <h1>ACamera Storage Rental</h1>
        </NavLink>
      </div>
        
    </div>
  );
}