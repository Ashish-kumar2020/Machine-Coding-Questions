import { useState } from "react";
import axios from "axios";

const BookSession = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doctorName: "",
    location: "",
    appointment: "",
  });

  const [meetSpot, setMeetSpot] = useState(false);
  const [schedulingLoading, setSchedulingLoading] = useState(false);
  const [bookingSccess, setBookingSuccess] = useState(false);

  const handleFormData = async () => {
    console.log(userData);
    setSchedulingLoading(true);
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      userData,
    );
    console.log(response);
    setSchedulingLoading(false);
    setBookingSuccess(true);
  };

  const handleCancelBooking = () => {
    setBookingSuccess(false)
  }
  return (
    <div>
      <h1>Book a session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>

      <b>
        <span>Basic info</span>
      </b>
      {!schedulingLoading && !bookingSccess ? (
        <form className="form-container">
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="LastName">LastName</label>
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <b>
            <span>Doctor</span>
          </b>

          <select
            name="doctor"
            id="doctor"
            value={userData.doctorName}
            onChange={(e) => {
              setUserData({ ...userData, doctorName: e.target.value });
              setMeetSpot(true);
            }}
          >
            <option value="selectyourdoctor">Select your doctor</option>
            <option value="dr.abcd">Dr. abcd Singh</option>
            <option value="dr.faltu">Dr Faltu Kumar</option>
          </select>
          {meetSpot && (
            <>
              <span>
                <b>Where</b>
              </span>
              <input
                type="radio"
                name="google-meet"
                id="googleMeet"
                value="Google Meet"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserData({ ...userData, location: e.target.value });
                }}
              />
              <label htmlFor="google-meet">Google Meet</label>
              <input
                type="radio"
                name="phone"
                id="phone"
                value="Phone"
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
              />
              <label htmlFor="phone">Phone</label>
              <span>
                <b>When?</b>
              </span>
              <input
                type="datetime-local"
                name="appointment"
                id="appointment"
                value={userData.appointment}
                onChange={(e) =>
                  setUserData({ ...userData, appointment: e.target.value })
                }
              />
            </>
          )}
        </form>
      ) : (
       schedulingLoading &&  <h2>Scheduling the appointment...</h2>
      )}
      {bookingSccess ? (
        <>
          <h2>Appointment Booked successfully</h2>{" "}
          <button onClick={handleCancelBooking}>Cancel Booking</button>
        </>
      ) : (
        <>
          {" "}
        
          <button onClick={handleFormData}>Confirm Booking</button>
        </>
      )}
     
    </div>
  );
};

export default BookSession;
