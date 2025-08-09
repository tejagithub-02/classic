import React, { useRef, useState } from 'react';
import './BookingForm.css';

const WHATSAPP_PHONE_NUMBER = '919035815260';

const BookingForm = () => {
  const [isOtherCity, setIsOtherCity] = useState(false);
  const [otherCity, setOtherCity] = useState('');

  const cityRef = useRef();
  const venueRef = useRef();
  const eventTypeRef = useRef();
  const peopleRef = useRef();
  const contactRef = useRef();
  const dateRef = useRef();
  const emailRef = useRef();

  const getMenuType = () => {
    const selected = document.querySelector('input[name="menu"]:checked');
    return selected ? selected.value.charAt(0).toUpperCase() + selected.value.slice(1) : "Not specified";
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setIsOtherCity(selectedCity === 'Others');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityValue = isOtherCity ? otherCity : cityRef.current.value;

    const message =
      `Booking Request:

• City: ${cityValue}
• Venue/Place: ${venueRef.current.value}
• Event Type: ${eventTypeRef.current.value}
• No. of People: ${peopleRef.current.value}
• Menu: ${getMenuType()}
• Contact No: ${contactRef.current.value}
• Date: ${dateRef.current.value}
• Email: ${emailRef.current.value}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className="booking-wrapper"
      style={{
        backgroundImage: "url('/services/booking.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="booking-overlay">
        <div className="booking-form-container">
          <p className="booking-subtitle">— Book Us —</p>
          <h2 className="booking-title">
            <span className="highlight">W</span>here You Want Our Services
          </h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            <select ref={cityRef} onChange={handleCityChange} required>
              <option value="">Select City</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Mangaluru">Mangaluru</option>
              <option value="Hubballi">Hubballi</option>
              <option value="Dharwad">Dharwad</option>
              <option value="Belagavi">Belagavi</option>
              <option value="Shivamogga">Shivamogga</option>
              <option value="Ballari">Ballari</option>
              <option value="Tumakuru">Tumakuru</option>
              <option value="Kalaburagi">Kalaburagi</option>
              <option value="Udupi">Udupi</option>
              <option value="Others">Others</option>
            </select>

            {isOtherCity && (
              <input
                type="text"
                placeholder="Enter City"
                value={otherCity}
                onChange={(e) => setOtherCity(e.target.value)}
                required
              />
            )}
            <input type="text" ref={venueRef} placeholder="Venue or Place" required />
            <input type="text" ref={eventTypeRef} placeholder="Event Type" required />
            <input type="number" min="1" ref={peopleRef} placeholder="No. of People" required />

            <div className="radio-group">
              <label>
                <input type="radio" name="menu" value="vegetarian" required />
                Vegetarian
              </label>
              <label>
                <input type="radio" name="menu" value="non-veg" />
                Non-Vegetarian
              </label>
              <label>
                <input type="radio" name="menu" value="both" />
                Both
              </label>
            </div>

            <input type="text" ref={contactRef} placeholder="Contact Number" required />
            <input type="date" ref={dateRef} required />
            <input type="email" ref={emailRef} placeholder="Your Email" required />

            <button type="submit">Send Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
