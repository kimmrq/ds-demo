import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { TableContext } from './table-context';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    /**
     * Sets border spacing for table and set styles accordingly.
     * Note: Not to be used with Table expand components
     */
    spacing?: 'none' | 'medium';
    /**
     * Styles the TableHeader and TableHeaderSelect transparent
     */
    transparentHeader?: boolean;
}

export function Table({
    children,
    spacing = 'none',
    transparentHeader = false,
    ...props
}: TableProps) {
    return (
        <TableContext.Provider value={{ spacing, transparentHeader }}>
            <StyledTable spacing={spacing} transparentHeader={transparentHeader} {...props}>
                {children}
            </StyledTable>
        </TableContext.Provider>
    );
}

const StyledTable = styled.table<TableProps>`
    width: 100%;

    ${(props) =>
        props.spacing === 'none' &&
        css`
            border-collapse: collapse;
            border-spacing: 0;
        `};

    ${(props) =>
        props.spacing === 'medium' &&
        css`
            border-spacing: 0 ${tokens.kdsSpacing2};
            border-collapse: separate;
        `};
`;
