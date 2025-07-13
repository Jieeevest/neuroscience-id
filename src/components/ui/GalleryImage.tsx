'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function GalleryImage({ src, alt, className }: GalleryImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className || 'object-cover'}
      onError={() => {
        // Fallback to a generic image if the gallery image fails to load
        setImgSrc('/images/event-placeholder.svg');
      }}
    />
  );
}