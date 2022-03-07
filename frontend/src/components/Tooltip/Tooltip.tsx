import React, { useEffect, useState } from 'react';
import './tooltip.css';

export function Tooltip({
  children,
  isVisible,
}: {
  children: React.ReactNode;
  isVisible: boolean;
}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(() => isVisible);

  useEffect(() => {
    setTimeout(() => setIsTooltipVisible(false), 2000);
  }, []);

  return (
    <>
      {isTooltipVisible ? (
        <div className='tooltip'>
          <span>{children}</span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
