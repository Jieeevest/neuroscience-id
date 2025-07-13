'use client';

import Image from 'next/image';
import { useState } from 'react';

interface RelatedEventImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function RelatedEventImage({ src, alt, className }: RelatedEventImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className || 'object-cover'}
      onError={() => {
        // Fallback to a generic event thumbnail if the image fails to load
        setImgSrc('/images/event-placeholder.svg');
      }}
    />
  );
}