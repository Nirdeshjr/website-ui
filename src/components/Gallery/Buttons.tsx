import React from 'react';

// Define the ButtonProps type
type ButtonProps = {
  className: string;
  children: string | React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

// Define the Button component
const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
