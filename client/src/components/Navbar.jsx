import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-400 h-20">

      <div className="h-full w-96  justify-start items-end flex float-right">
      <ul className="w-full">
        <button>
          <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full" >link1</li>


        </button>
        <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full">link2</li>
        <li className="inline-block py-2 px-5 mx-4 mb-2 border border-1px rounded-full">link3</li>
      </ul>
      
      </div>
        <NavLink to="/">
          <h1>hello</h1>
        </NavLink>

        <NavLink  to="/create">
          <div className="bg-green-300 text-white inline-flex justify-end items-start float-right">
            Create Employee

          </div>
        </NavLink>
    </div>
  );
}