import React from 'react';
import { StyledHeading } from './HighlightedHeading.styles';

export const HighlightedHeading = ({ level = '2', children, ...props }) => (
  <StyledHeading as={`h${level}`} {...props}>
    {children}
  </StyledHeading>
);
