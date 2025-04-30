import { useRef, useState } from "react";
import { useAuth } from "../Store/Auth";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ country, place }) {
  const { getToken } = useAuth();
  const navigate = useNavigate();


  const pricePerPerson = 1299;
  const taxFees = 260;

  const calculateTotal = (travelers, roomPrice) =>
    pricePerPerson * travelers + roomPrice * travelers + taxFees;

  const [roomType, setRoomType] = useState({ type: "Double Room", price: 0 });
  const [travelers, setTravelers] = useState(2);
  const [total, setTotal] = useState(() => calculateTotal(2, 0));

  const dateRef = useRef();

  const handleFormData = async (event) => {
    event.preventDefault();
    const date = new Date(dateRef.current.value);

    try {
      const response = await fetch("http://localhost:5000/api/auth/user/booking&receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          country,
          place,
          date,
          travelers,
          roomType: roomType.type,
          total,
        }),
      });

      const result = await response.json();
      if (result.status == 400) {

        alert("Booking response: " + result.message);
      }
      alert("Booking response: " + result.message);
      navigate('/receipt')
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handleTravelersChange = (e) => {
    const newTravelers = Number(e.target.value);
    setTravelers(newTravelers);
    setTotal(calculateTotal(newTravelers, roomType.price));
  };

  const handleRoomTypeChange = (type, price) => {
    setRoomType({ type, price });
    setTotal(calculateTotal(travelers, price));
  };

  return (
    <form onSubmit={handleFormData}>
      <div className="bg-white px-7 py-10 space-y-4 rounded-2xl shadow-lg border border-black/20 w-150">
        <p className="text-2xl font-bold">
          $1,299 <span className="text-sm">per person</span>
        </p>

        <label className="block mt-4">Tour Date</label>
        <input type="date" ref={dateRef} className="w-full p-2 border rounded mt-1" />

        <label className="block mt-4">Number of Travelers</label>
        <select
          className="w-full p-2 border rounded mt-1"
          value={travelers}
          onChange={handleTravelersChange}
        >
          <option value={1}>1 Traveler</option>
          <option value={2}>2 Travelers</option>
          <option value={3}>3 Travelers</option>
        </select>

        <label className="block mt-4">Room Type</label>
        <div className="mt-2">
          <label className="block">
            <input
              type="radio"
              name="room"
              value={0}
              checked={roomType.price === 0}
              onChange={() => handleRoomTypeChange("Double Room", 0)}
              className="mr-2"
            />
            Double Room
          </label>
          <label className="block">
            <input
              type="radio"
              name="room"
              value={299}
              checked={roomType.price === 299}
              onChange={() => handleRoomTypeChange("Single Room", 299)}
              className="mr-2"
            />
            Single Room (+$299)
          </label>
          <label className="block">
            <input
              type="radio"
              name="room"
              value={-99}
              checked={roomType.price === -99}
              onChange={() => handleRoomTypeChange("Triple Room", -99)}
              className="mr-2"
            />
            Triple Room (-$99 per person)
          </label>
        </div>

        <p className="mt-4">
          Base Price:{" "}
          <span className="font-bold">
            ${pricePerPerson * travelers + roomType.price * travelers}
          </span>
        </p>
        <p>Taxes & Fees: ${taxFees}</p>
        <p className="text-xl font-bold mt-2">Total: ${total}</p>

        <button className="w-full bg-black text-white py-3.5 rounded-[10px] mt-4">
          Book Now
        </button>
      </div>
    </form>
  );
}
