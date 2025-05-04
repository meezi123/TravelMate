import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth'
import EReceipt from '../Components/EReceipt';
import Navbar from '../Components/Navbar';
function ReceiptDetail() {
  const [receipts, setReceipts] = useState([{}])
  const [found, setFound] = useState(false)

  const { getToken } = useAuth();
  const { user } = useAuth()

  useEffect(() => {
    const fetchReceipts = async () => {

      try {

        const response = await fetch('http://localhost:5000/api/auth/user/receipt', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          }

        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        if (data.receipts.length > 0) {
          setReceipts(data.receipts);
          setFound(true);
        }

        // alert(data)
        console.log(data.receipts)

      } catch (err) {
        console.error("Frontend fetch error:", err);
        alert("Error fetching receipts: " + err.message);
      }
    };

    fetchReceipts();
  }, []);

  return (
    <>
      <div className="relative">
        <Navbar />
      </div>

      <div className="pt-[100px] px-4">
        {found ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {receipts.map((receipt, index) => (
              <EReceipt
                key={index}
                country={receipt.country}
                place={receipt.place}
                bookingDate={receipt.bookingDate}
                roomType={receipt.roomType}
                travelers={receipt.travelers}
                totalPrice={receipt.total}
                currency="$"
                bookingId={receipt.booking}
              />
            ))}
          </div>
        ) : (
          <h1>No Receipts Found</h1>
        )}
      </div>
    </>
  )
}

export default ReceiptDetail;