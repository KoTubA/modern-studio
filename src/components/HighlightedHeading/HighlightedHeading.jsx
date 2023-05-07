import React from 'react';
import { StyledHeading } from './HighlightedHeading.styles';

export const HighlightedHeading = ({ level = '2', children }) => <StyledHeading as={`h${level}`}>{children}</StyledHeading>;
