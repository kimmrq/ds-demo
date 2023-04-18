import React from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export interface BoxProps extends Props, SpaceProps, LayoutProps, FlexboxProps {}

const StyledBox = styled.div<BoxProps>`
    ${flexbox}
    ${layout}
    ${space}
`;

export function Box({ children, ...props }: BoxProps) {
    return <StyledBox {...props}>{children}</StyledBox>;
}
