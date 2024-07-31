import React, { useRef, useEffect } from 'react';

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

  return (
    <div className="overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex animate-scroll"
      >
        {/* Original content */}
        <section className="flex flex-row items-start justify-start relative max-w-full min-w-full">
          <div className="w-[1366px] flex flex-row items-start justify-start pt-0 pb-[124.4px] pr-[3px] pl-[93px] box-border gap-[32px] max-w-full mq800:gap-[16px] mq800:pl-[23px] mq800:box-border mq450:pb-[81px] mq450:box-border mq1300:flex-wrap mq1300:justify-center mq1300:pl-[46px] mq1300:box-border">
            <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
              <div className="h-44 w-44 absolute !m-[0] right-[-155.6px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100" />
              <img
                className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/inbox.svg"
              />
            </div>
            <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
              <div className="h-44 w-44 absolute !m-[0] right-[109.5px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-turquoise" />
              <img
                className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/inbox-1.svg"
              />
            </div>
            <img
              className="h-[246.5px] w-[436.2px] relative rounded-[5.68px] overflow-hidden shrink-0 max-w-full"
              alt=""
              src="/inbox-2.svg"
            />
            {/* Add more images here */}
          </div>
        </section>
        {/* Duplicated content */}
        <section className="flex flex-row items-start justify-start relative max-w-full min-w-full">
          <div className="w-[1366px] flex flex-row items-start justify-start pt-0 pb-[124.4px] pr-[3px] pl-[93px] box-border gap-[32px] max-w-full mq800:gap-[16px] mq800:pl-[23px] mq800:box-border mq450:pb-[81px] mq450:box-border mq1300:flex-wrap mq1300:justify-center mq1300:pl-[46px] mq1300:box-border">
            <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
              <div className="h-44 w-44 absolute !m-[0] right-[-155.6px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-mediumpurple-100" />
              <img
                className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/inbox.svg"
              />
            </div>
            <div className="h-[246.5px] w-[436.2px] flex flex-row items-start justify-start relative max-w-full shrink-0">
              <div className="h-44 w-44 absolute !m-[0] right-[109.5px] bottom-[-141.2px] [filter:blur(400px)] rounded-981xl bg-turquoise" />
              <img
                className="h-[246.5px] flex-1 relative rounded-[5.68px] max-w-full overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/inbox-1.svg"
              />
            </div>
            <img
              className="h-[246.5px] w-[436.2px] relative rounded-[5.68px] overflow-hidden shrink-0 max-w-full"
              alt=""
              src="/inbox-2.svg"
            />
            {/* Add more duplicated images here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfiniteScroll;