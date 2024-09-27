import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Rental() {
    const params = useParams();
    const [rental, setRental] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:5050/record/${params.id.toString()}`
            )

            const record = await response.json();

            setRental(record);
        }
        fetchData()
    }, [])

    function rentalForm() {
        return (
            <div>{rental.name}</div>
        )

    }

    // useEffect(() => {
    //     const id = (params.id?.toString() || undefined)

    // },[])

    return (
        <div>
            You are trying to rent this piece of gear
            <div>
                {rentalForm()}
            </div>
        </div>
    )
}