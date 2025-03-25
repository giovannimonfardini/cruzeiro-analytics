import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  hoverEffect = true
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md p-6 border border-gray-100
        ${hoverEffect ? 'transform transition-all duration-200 hover:scale-105 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;