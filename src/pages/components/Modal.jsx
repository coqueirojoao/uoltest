import React from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center z-50`} onClick={closeModal}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-16 rounded-lg shadow-md z-10" onClick={(e) => e.stopPropagation()}>
        <div className='mb-5 flex justify-center'>
        {title}
        </div>
        <div className='flex flex-col gap-5'>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
