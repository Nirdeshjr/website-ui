import React from 'react';
import Image from 'next/image';

type ImageOwnProps<T extends React.ElementType> = {
  className: string;
  image: string;
  alt: string;
  objectCover?: string;
  as?: T;
};

type ImageProps<T extends React.ElementType> = ImageOwnProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ImageOwnProps<T>>;

export const Img = <T extends React.ElementType = 'div'>({
  className,
  image,
  alt,
  objectCover,
  as,
  ...rest
}: ImageProps<T>) => {
  const Component = as || 'div';
  return (
    <Component className={className} {...rest}>
      <Image src={image} alt={alt} className={`w-full h-full ${objectCover}`} />
    </Component>
  );
};

