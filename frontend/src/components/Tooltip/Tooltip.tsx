import React, { useEffect, useState } from 'react';
import './tooltip.css';

export function Tooltip({
  children,
  isVisible,
}: {
  children: React.ReactNode;
  isVisible: boolean;
}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(isVisible);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsTooltipVisible(false), 2000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, []);

  return (
    <div
      className='tooltip'
      style={{ display: isTooltipVisible ? 'block' : 'none' }}
    >
      <span>{children}</span>
    </div>
  );
}
