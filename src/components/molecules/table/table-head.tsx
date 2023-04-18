import React from 'react';
import styled from 'styled-components';

import { StyledTableRow } from './table-row';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export function TableHead({ children, ...props }: TableHeadProps) {
    return <StyledTableHead {...props}>{children}</StyledTableHead>;
}

export const StyledTableHead = styled.thead`
    ${StyledTableRow} {
        box-shadow: none;
    }
`;
