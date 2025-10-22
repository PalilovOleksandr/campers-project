import React from 'react';
import css from './Buttons.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
}

export default function Button({
  variant = 'primary',
  size = 'large',
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = `${css.button} ${css[variant]} ${css[size]}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
