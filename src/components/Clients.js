import React from 'react';
import './Clients.css';

const clients = [
  'client1.jpg', 'client2.jpg', 'client3.jpg',
  'client4.jpg', 'client5.jpg', 'client6.jpg',
  'client7.jpg', 'client8.jpg', 'client9.jpg',
];

const Clients = () => {
  // Duplicate list to allow seamless loop effect
  const fullClientList = [...clients, ...clients];

  return (
    <div className="clients-slider-section">
      <h2 className="clients-title">
        Our <span>Clients</span>
      </h2>
      <div className="clients-slider">
        <div className="clients-track">
          {fullClientList.map((client, i) => (
            <div className="client-logo" key={`${client}-${i}`}>
              <img
                src={`/clients/${client}`}
                alt={`Client logo ${((i % clients.length) + 1)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
