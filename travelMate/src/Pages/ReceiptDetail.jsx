import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth'
import EReceipt from '../Components/EReceipt';
function ReceiptDetail() {
  const [receipts, setReceipts] = useState([{}])

  const { getToken } = useAuth();

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const token = getToken();
        const response = await fetch('http://localhost:5000/api/auth/user/receipt', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        setReceipts(data.receipts);
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

      {
        receipts.map((receipt, index) => (
          <EReceipt key={index}
            country={receipt.country}
            place={receipt.place}
            bookingDate={receipt.bookingDate}
            roomType={receipt.roomType}
            travelers={receipt.travelers}
            totalPrice={receipt.total}
            currency="$"
            bookingId={receipt.booking}

          />
        ))
      }
    </>
  )
}

export default ReceiptDetail;