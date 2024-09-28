// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// import { Transition } from '@headlessui/react'
// export default function Rental() {
//     // const params = useParams();
//     // const [rental, setRental] = useState([])

//     // useEffect(() => {
//     //     async function fetchData() {
//     //         const response = await fetch(
//     //             `http://localhost:5050/record/${params.id.toString()}`
//     //         )

//     //         const record = await response.json();

//     //         setRental(record);
//     //     }
//     //     fetchData()
//     // }, [])

//     // function rentalForm() {
//     //     return (
//     //         <div>{rental.name}</div>
//     //     )

//     // }

//     // // useEffect(() => {
//     // //     const id = (params.id?.toString() || undefined)

//     // // },[])

//     // return (
//     //     <div>
//     //         You are trying to rent this piece of gear
//     //         <div>
//     //             {rentalForm()}
//     //         </div>
//     //     </div>
//     // )
//     let [isOpen, setIsOpen] = useState(false)

//     return (
//         <>
//           {/* <button onClick={() => setIsOpen(true)}>Open dialog</button>
//           <Dialog open={isOpen} onClose={() => setIsOpen(false)}
//             className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
//             <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//               <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
//                 <DialogTitle className="font-bold">Deactivate account</DialogTitle>
//                 <Description>This will permanently deactivate your account</Description>
//                 <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
//                 <div className="flex gap-4">
//                   <button onClick={() => setIsOpen(false)}>Cancel</button>
//                   <button onClick={() => setIsOpen(false)}>Deactivate</button>
//                 </div>
//               </DialogPanel>
//             </div>
//           </Dialog> */}

//         <button onClick={() => setOpen((open) => !open)}>Toggle</button>
//         <Transition show={open}>
//             <div className="transition duration-300 ease-in data-[closed]:opacity-0">I will fade in and out</div>
//         </Transition>
//         </>
//       )
// }
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

const Movie = (props) => (
    <div className="flex w-full justify-center" > 
        <button className="bg-gray-500 text-white mt-3 h-16 w-1/2 rounded-full flex justify-center hover:bg-gray-600">
            <div className="pl-8 pt-4">
                {props.movie.title}
            </div>
        </button>
    </div>
)

export default function Rental() {
  let [isOpen, setIsOpen] = useState(true)
  const [movies, setMovies] = useState([]);
      useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:5050/movie`
            )
            // console.log(await response.json())
            const movies = await response.json()
            setMovies(movies)
        }
        fetchData()
    }, [movies.length])

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function movieList() {
    return movies.map((movie) => {
      return (
          <Movie 
            key={movie._id}
            movie={movie}
            />
       
      );
    });
  }

  return (
    <>
    <div className="h-full">
    {movieList()}
    </div>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog> */}
    </>
  )
}