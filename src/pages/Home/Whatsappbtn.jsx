// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
 import "../style/whatsapp.css"
const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/9529121881', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;
