import React, { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import { CornerEffectWrapper } from './CornerEffect.styles';

export const CornerEffect = ({ children, position = 'topLeft', distance = '20px', size = '70px', color = 'dark', pseudoelement = 'after' }) => {
  const itemRef = useRef(null);
  const [playState, setPlayState] = useState(false);

  const handlePlayStateChange = throttle(() => {
    const { top } = itemRef.current.getBoundingClientRect();
    if (top < 400) {
      setPlayState(true);
    }
  }, 150);

  useEffect(() => {
    document.addEventListener('scroll', handlePlayStateChange);

    return () => {
      document.removeEventListener('scroll', handlePlayStateChange);
    };
  }, []);

  return (
    <CornerEffectWrapper position={position} size={size} color={color} distance={distance} pseudoelement={pseudoelement} playState={playState} ref={itemRef}>
      {children}
    </CornerEffectWrapper>
  );
};
