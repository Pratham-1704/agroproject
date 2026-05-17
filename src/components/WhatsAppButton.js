import React from 'react';

const WhatsAppButton = () => {
  // TODO: replace with your business phone number in international format (no + or leading zeros)
  const phoneNumber = '919999999999';
  const message = encodeURIComponent('Hello! I would like to know more about your products.');
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg className="whatsapp-icon" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.09 1.6 5.84L0 24l6.49-1.71A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.5c-1.6 0-3.17-.42-4.53-1.22l-.32-.18-3.86 1.02 1.02-3.76-.21-.35A9.38 9.38 0 0 1 2.6 12 9.4 9.4 0 0 1 12 2.6 9.4 9.4 0 0 1 21.4 12 9.4 9.4 0 0 1 12 21.5z"/>
        <path fill="currentColor" d="M17.28 14.04c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.2.29-.78.94-.96 1.13-.18.18-.36.21-.66.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.36.44-.54.15-.18.2-.29.3-.48.1-.18.05-.34-.03-.49-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.15.18 1.94 2.96 4.7 4.04 1.32.54 1.87.73 2.52.93.65.2 1.24.17 1.71.1.52-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.18-.55-.33z"/>
      </svg>
      <span className="whatsapp-pulse" aria-hidden="true"></span>
    </a>
  );
};

export default WhatsAppButton;
