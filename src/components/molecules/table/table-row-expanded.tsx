import React from 'react';
import styled from 'styled-components';

export interface TableRowExpandedProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    isExpanded?: boolean;
}

export function TableRowExpanded({ isExpanded, children, ...props }: TableRowExpandedProps) {
    return (
        <StyledTableRowExpanded isExpanded={isExpanded} {...props}>
            {children}
        </StyledTableRowExpanded>
    );
}

export const StyledTableRowExpanded = styled.tr<TableRowExpandedProps>`
    display: ${(props) => (props.isExpanded ? 'table-row' : 'none')};
`;
