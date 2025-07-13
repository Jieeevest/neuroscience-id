'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResourceCardImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ResourceCardImage({ src, alt, className, priority, sizes }: ResourceCardImageProps) {
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
        // Fallback to a generic video thumbnail if the YouTube thumbnail fails to load
        setImgSrc('/images/video-placeholder.svg');
      }}
    />
  );
}