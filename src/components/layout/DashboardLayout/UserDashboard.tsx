import { selectUserProfile } from "../../../redux/features/userSlice";
import {
  selectUpcomingBookings,
  selectPastBookings,
} from "../../../redux/features/bookingSlice";
import CountdownTimer from "../../innerUi/CountdownTimer";
import { useAppSelector } from "../../../redux/hooks";

const UserDashboard: React.FC = () => {
  const userProfile = useAppSelector(selectUserProfile);
  const upcomingBookings = useAppSelector(selectUpcomingBookings);
  const pastBookings = useAppSelector(selectPastBookings);

  return (
    <>
      <h3 className="text-2xl font-bold">Profile Information</h3>
      <div className="mb-8 flex flex-auto items-center justify-around mt-5 container mx-auto p-4 bg-[#eaeaff]">
        <p>
          <strong>Name:</strong> {userProfile?.name ?? "N/A"}
        </p>
        <p className="pb-11">
          <strong>Email:</strong> {userProfile?.email ?? "N/A"}
        </p>
        <p>
          <strong>Phone:</strong> {userProfile?.phone ?? "N/A"}
        </p>
        <p className="pb-11">
          <strong>Address:</strong> {userProfile?.address ?? "N/A"}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">Past Bookings</h3>
        <table className="table-auto w-full">
          <thead className="p-5 space-x-3 bg-[#eaeaff]">
            <tr>
              <th>Service Name</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody className="p-5 space-x-3 bg-[#ffdd00]">
            {pastBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.serviceName}</td>
                <td>{new Date(booking.timeSlot).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Upcoming Bookings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="card p-4 shadow-lg bg-[#eaeaff]">
              <h4>{booking.serviceName}</h4>
              <p>{new Date(booking.timeSlot).toLocaleString()}</p>
              <CountdownTimer timeSlot={booking.timeSlot} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
