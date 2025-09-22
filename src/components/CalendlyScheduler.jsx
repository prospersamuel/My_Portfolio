// components/CalendlyScheduler.jsx
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { PopupModal } from 'react-calendly';

const CalendlyScheduler = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true)
  }));

  return (
    <PopupModal
      url="https://calendly.com/prospersamuel100/30min"
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={document.getElementById('root')}
    />
  );
});

export default CalendlyScheduler;