import React from 'react';
import styled, { css } from 'styled-components';

import { StyledTableRowExpanded } from './table-row-expanded';
export interface TableCellExpandedProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
    /**
     * Table cell content
     */
    children?: React.ReactNode;
    /**
     * Specify if the table cell text if cut off at a max-width of 200px
     */
    ellipsis?: boolean;
    /**
     * Specify whether this row is selected or not
     */
    isSelected?: boolean;
}

export function TableCellExpanded({
    ellipsis = false,
    isSelected = false,
    children,
    ...props
}: TableCellExpandedProps) {
    return (
        <StyledTableExpandedCell isSelected={isSelected} ellipsis={ellipsis} {...props}>
            {children}
        </StyledTableExpandedCell>
    );
}

const StyledTableExpandedCell = styled.td<TableCellExpandedProps>`
    padding: 10px 16px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #50463f;
    background-color: white;
    transition: box-shadow 150ms ease;

    ${(props) =>
        props.ellipsis &&
        css`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: keep-all;
            max-width: 200px;
        `};

    ${(props) =>
        props.isSelected &&
        css`
            box-shadow: inset 3px 0 0 #003ad6;
        `};

    ${StyledTableRowExpanded}:hover & {
        background-color: hsla(29, 20%, 98%, 1);
    }
`;
