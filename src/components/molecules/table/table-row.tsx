import React from 'react';
import styled, { css } from 'styled-components';

import { TableContext, TableStyleType } from './table-context';

export type TableStyleProps = Pick<TableStyleType, 'spacing'>;

export interface TableRowProps extends TableStyleProps, React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    /**
     * Hook that is invoked when the table row is clicked
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export function TableRow({ children, onClick, ...props }: TableRowProps) {
    const { spacing } = React.useContext(TableContext);

    return (
        <StyledTableRow spacing={spacing} onClick={onClick} {...props}>
            {children}
        </StyledTableRow>
    );
}

export const StyledTableRow = styled.tr<TableRowProps>`
    ${(props) =>
        props.spacing === 'medium' &&
        css`
            box-shadow: 0px 8px 12px -4px rgba(219, 213, 208, 0.3);
        `};

    ${(props) =>
        props.onClick &&
        css`
            cursor: pointer;
        `};
`;
