import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const getSize = () => {
    if (typeof size === 'number') return size;

    switch (size) {
      case 'sm': return 32;
      case 'md': return 48;
      case 'lg': return 64;
      default: return 48;
    }
  };

  const sizeValue = getSize();

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Representação minimalista do logo do Cruzeiro */}
      <circle cx="50" cy="50" r="45" fill="#1D4ED8" />
      <path
        d="M50 10 L50 90 M10 50 L90 50"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="15" fill="#1D4ED8" stroke="white" strokeWidth="4" />
      <circle cx="50" cy="50" r="5" fill="white" />
    </svg>
  );
};

export default Logo;