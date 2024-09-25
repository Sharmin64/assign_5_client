/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateBookingMutation } from '../../redux/api/baseApi';
import { setBookingDetails, setBookingStatus, setBookingError } from '../../redux/features/bookingSlice';

const BookingForm: React.FC = () => {
  const dispatch = useDispatch();
  const [createBooking] = useCreateBookingMutation(); // RTK Query hook for booking mutation
  const [formData, setFormData] = useState({
    serviceId: '',
    slotId: '',
    vehicleType: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleYear: 2021,
    vehiclePlate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      serviceId: formData.serviceId,
      slotId: formData.slotId,
      vehicleDetails: {
        type: formData.vehicleType,
        brand: formData.vehicleBrand,
        model: formData.vehicleModel,
        year: formData.vehicleYear,
        plate: formData.vehiclePlate,
      },
    };

    try {
      dispatch(setBookingStatus("loading"));
      await createBooking(bookingData).unwrap();
      dispatch(setBookingDetails(bookingData));
      dispatch(setBookingStatus("succeeded"));
    } catch (err: any) {
      dispatch(setBookingError(err.data.message || "Booking failed"));
      dispatch(setBookingStatus("failed"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Service ID</label>
        <input
          type="text"
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
        />
      </div>
      <div>
        <label>Slot ID</label>
        <input
          type="text"
          value={formData.slotId}
          onChange={(e) => setFormData({ ...formData, slotId: e.target.value })}
        />
      </div>
      <div>
        <label>Vehicle Type</label>
        <input
          type="text"
          value={formData.vehicleType}
          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
        />
      </div>
      <div>
        <label>Vehicle Brand</label>
        <input
          type="text"
          value={formData.vehicleBrand}
          onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
        />
      </div>
      <div>
        <label>Vehicle Model</label>
        <input
          type="text"
          value={formData.vehicleModel}
          onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
        />
      </div>
      <div>
        <label>Vehicle Year</label>
        <input
          type="number"
          value={formData.vehicleYear}
          onChange={(e) => setFormData({ ...formData, vehicleYear: Number(e.target.value) })}
        />
      </div>
      <div>
        <label>Vehicle Plate</label>
        <input
          type="text"
          value={formData.vehiclePlate}
          onChange={(e) => setFormData({ ...formData, vehiclePlate: e.target.value })}
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
