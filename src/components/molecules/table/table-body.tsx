import React from 'react';
import styled from 'styled-components';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export function TableBody({ children, ...props }: TableBodyProps) {
    return <StyledTableBody {...props}>{children}</StyledTableBody>;
}

const StyledTableBody = styled.tbody``;
