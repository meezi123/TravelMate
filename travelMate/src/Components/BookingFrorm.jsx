import { useState } from "react";

export default function BookingForm() {
  const [travelers, setTravelers] = useState(2);
  const [roomType, setRoomType] = useState(0);
  const pricePerPerson = 1299;
  const taxFees = 260;

  const updatePrice = () => {
    return pricePerPerson * travelers + roomType * travelers + taxFees;
  };

  return (
    <div className="bg-white px-7 py-10 space-y-4 rounded-2xl shadow-lg border border-black/20 w-150 ">
      <p className="text-2xl font-bold">$1,299 <span className="text-sm">per person</span></p>

      <label className="block mt-4">Tour Date</label>
      <input type="date" className="w-full p-2 border rounded mt-1" />

      <label className="block mt-4">Number of Travelers</label>
      <select className="w-full p-2 border rounded mt-1" value={travelers} onChange={e => setTravelers(Number(e.target.value))}>
        <option value={1}>1 Traveler</option>
        <option value={2}>2 Travelers</option>
        <option value={3}>3 Travelers</option>
      </select>

      <label className="block mt-4">Room Type</label>
      <div className="mt-2">
        <label className="block"><input type="radio" name="room" value={0} checked={roomType === 0} onChange={() => setRoomType(0)} className="mr-2" /> Double Room</label>
        <label className="block"><input type="radio" name="room" value={299} checked={roomType === 299} onChange={() => setRoomType(299)} className="mr-2" /> Single Room (+$299)</label>
        <label className="block"><input type="radio" name="room" value={-99} checked={roomType === -99} onChange={() => setRoomType(-99)} className="mr-2" /> Triple Room (-$99 per person)</label>
      </div>

      <p className="mt-4">Base Price: <span className="font-bold">${pricePerPerson * travelers + roomType * travelers}</span></p>
      <p>Taxes & Fees: ${taxFees}</p>
      <p className="text-xl font-bold mt-2">Total: ${updatePrice()}</p>

      <button className="w-full bg-black text-white py-3.5 rounded-[10px] mt-4">Book Now</button>
    </div>
  );
}
