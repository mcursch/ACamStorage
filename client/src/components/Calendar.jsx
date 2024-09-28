import { NavLink } from "react-router-dom";

export default function Calendar() {
  return (
    <div className="h-full w-full flex justify-center items-center ">
        <div className="h-5/6 w-10/12 bg-[#f2f2f2] rounded-lg ">
            <div class="h-20 bg-gray-300 rounded-t-lg relative">
                <div class="h-full w-32 text-gray-800 justify-center items-center flex text-xl font-bold absolute left-0">
                    January
                </div>
                <div className="absolute right-0 h-20 w-96 justify-center items-center flex">
                    <ul>
                        <li className="inline-block mx-10">type select</li>
                        <button>
                            <li className="inline-block mx-10 rounded-lg p-2 font-bold bg-[#f2f2f2]">add event </li>


                        </button>
                    </ul>
                </div>

            </div>

        </div>

    </div>
  
   
  );
}