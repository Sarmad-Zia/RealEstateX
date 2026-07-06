import React from 'react';
// import { styles } from './stytle';

export const Button = ({
  className = '',
  onPress,
  text,
  children,
  type = 'button',
  ...props         
}) => {
  
  const baseStyles = "display-inline-flex align-items-center justify-content-center gap-2 cursor-pointer";
  
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onPress}
      className={combinedClassName}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};