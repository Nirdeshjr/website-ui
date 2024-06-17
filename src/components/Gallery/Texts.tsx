import React from 'react';

// Define the own props for the Text component
type TextOwnProps<E extends React.ElementType> = {
  className: string;
  children?: React.ReactNode;
  as?: E;
};

// Define the TextProps by combining TextOwnProps with the props of the element type,
// omitting any keys that are already in TextOwnProps
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof TextOwnProps<E>>;

// Define the Title component with a default element type of 'div'
export const Text = <E extends React.ElementType = 'div'>({ className, children, as }: TextProps<E>) => {
  const Component = as || 'div';
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};
