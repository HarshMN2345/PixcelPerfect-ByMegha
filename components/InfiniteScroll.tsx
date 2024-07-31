import React, { useRef, useEffect } from 'react';

const images = [
  { src: '/inbox.svg', alt: 'Inbox 1' },
  { src: '/inbox-1.svg', alt: 'Inbox 2' },
  { src: '/inbox-2.svg', alt: 'Inbox 3' },
  // Add more images as needed
];

const InfiniteScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const resetAnimation = () => {
      scrollContainer.style.animation = 'none';
      void scrollContainer.offsetWidth; // Trigger reflow
      scrollContainer.style.animation = '';
    };

    scrollContainer.addEventListener('animationiteration', resetAnimation);

    return () => {
      scrollContainer.removeEventListener('animationiteration', resetAnimation);
    };
  }, []);

  // Repeat the images array to ensure seamless looping
  const repeatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex animate-scroll"
      >
        {repeatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[436.2px] h-[246.5px] mx-4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-[5.68px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;