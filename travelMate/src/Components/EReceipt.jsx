import { CalendarDays, MapPin, Users, CreditCard } from "lucide-react"
const EReceipt = ({
  country,
  place,
  bookingDate,
  roomType,
  travelers,
  totalPrice,
  currency = "$",
  bookingId = "BK-12345", }) => {
  const formattedDate = bookingDate
    ? new Date(bookingDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "Invalid date";


  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Thank you for your booking</h3>
            <h2 className="text-2xl font-bold mt-1">E-Receipt</h2>
          </div>
          <span className="text-xs font-medium border border-gray-300 px-2 py-1 rounded-md text-gray-600">
            {bookingId}
          </span>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-700">
          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
          <span className="font-medium">
            {place}, {country}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarDays className="h-4 w-4 mr-2" />
            Booking Date
          </div>
          <span className="font-medium text-gray-800">{formattedDate}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <CreditCard className="h-4 w-4 mr-2" />
            Room Type
          </div>
          <span className="font-medium text-gray-800">{roomType}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            Travelers
          </div>
          <span className="font-medium text-gray-800">
            {travelers} {travelers === 1 ? "person" : "people"}
          </span>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200 mx-6" />

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-sm text-gray-700">Total Amount</span>
        <span className="text-xl font-bold text-gray-900">
          {currency}
          {totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
export default EReceipt;
