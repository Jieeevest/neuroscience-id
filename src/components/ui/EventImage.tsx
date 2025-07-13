'use client';

import Image from 'next/image';
import { useState } from 'react';

interface EventImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function EventImage({ src, alt, className, priority }: EventImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className || 'object-cover'}
      priority={priority}
      onError={() => {
        // Fallback to a generic event thumbnail if the image fails to load
        setImgSrc('/images/event-placeholder.svg');
      }}
    />
  );
}