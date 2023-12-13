import React, { useState, useEffect } from 'react';

const Toast = ({ message, success, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000); // Ocultar después de 5 segundos (puedes ajustar el tiempo según tus necesidades)

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 p-4 rounded-md ${success ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
    >
      {message}
    </div>
  );
};

export default Toast;