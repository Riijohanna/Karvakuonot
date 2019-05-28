import React from 'react';

const Button = ({ icon, onClick }) => {
  return (
    <div className={icon} onClick={onClick} >
    </div>
  );
};

export default Button
