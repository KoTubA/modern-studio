import React from 'react';
import { StyledIconWrapper } from './StyledIcon.styles';

export const StyledIcon = ({ children, ...props }) => <StyledIconWrapper {...props}>{children}</StyledIconWrapper>;
