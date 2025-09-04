import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'filled', 
  onClick, 
  className = '',
  style = {}
}) => {
  const baseStyles = {
    width: '100%',
    padding: '1rem',
    borderRadius: '1rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'inline-block',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)',
    ...style
  };

  const variants = {
    filled: {
      backgroundColor: 'var(--bg-teal)',
      color: 'var(--text-primary)',
      border: 'none'
    },
    outline: {
      backgroundColor: 'var(--color-transparent)',
      color: 'var(--color-primary-teal)',
      border: '2px solid var(--color-primary-teal)'
    },
    outlineWhite: {
      backgroundColor: 'var(--color-transparent)',
      color: 'var(--color-white)',
      border: '2px solid var(--color-white)'
    },
    green: {
      backgroundColor: 'var(--color-green)',
      color: 'var(--text-white)',
      border: 'none'
    },
    white: {
      backgroundColor: 'var(--color-white-90)',
      color: 'var(--text-primary)',
      border: 'none'
    }
  };

  const buttonStyle = {
    ...baseStyles,
    ...variants[variant]
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className={`button button-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
