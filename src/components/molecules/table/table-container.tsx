import React from 'react';
import styled from 'styled-components';

export interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function TableContainer({ children, ...props }: TableContainerProps) {
    return <StyledTableContainer {...props}>{children}</StyledTableContainer>;
}

const StyledTableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
`;
