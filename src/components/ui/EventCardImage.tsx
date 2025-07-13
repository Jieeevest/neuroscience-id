'use client';

import Image from 'next/image';
import { useState } from 'react';

interface EventCardImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function EventCardImage({ src, alt, className, priority, sizes }: EventCardImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className || 'object-cover'}
      priority={priority}
      onError={() => {
        // Fallback to a generic event thumbnail if the image fails to load
        setImgSrc('/images/event-placeholder.svg');
      }}
    />
  );
}