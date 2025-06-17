import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-[#01b71c] hover:bg-[#019917] text-white focus:ring-[#01b71c]',
    secondary: 'bg-[#01562c] hover:bg-[#014523] text-white focus:ring-[#01562c]',
    outline: 'bg-transparent border border-[#01b71c] text-[#01b71c] hover:bg-[#01b71c]/10 focus:ring-[#01b71c]'
  };
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg'
  };
  return <button type={type} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} onClick={onClick}>
      {children}
    </button>;
};
export default Button;