import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { TableContext, TableStyleType } from './table-context';
import { StyledTableRow } from './table-row';

export type TableStyleProps = Pick<TableStyleType, 'spacing'>;

export interface TableCellProps
    extends TableStyleProps,
        React.TdHTMLAttributes<HTMLTableDataCellElement> {
    /**
     * Table cell content
     */
    children?: React.ReactNode;
    /**
     * Specify if the table cell text if cut off
     */
    ellipsis?: boolean;
    /**
     * Specify whether this row is selected or not
     */
    isSelected?: boolean;
}

export function TableCell({
    ellipsis = false,
    isSelected = false,
    children,
    ...props
}: TableCellProps) {
    const { spacing } = React.useContext(TableContext);

    return (
        <StyledTableCell spacing={spacing} isSelected={isSelected} ellipsis={ellipsis} {...props}>
            <div>{children}</div>
        </StyledTableCell>
    );
}

const StyledTableCell = styled.td<TableCellProps>`
    border-top: 1px solid #f4f4f2;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #50463f;
    background-color: white;
    transition: box-shadow 150ms ease;
    vertical-align: middle;

    ${(props) =>
        props.ellipsis &&
        css`
            > div {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: keep-all;
                max-width: 200px;
            }
        `};

    ${(props) =>
        props.isSelected &&
        css`
            box-shadow: inset 3px 0 0 #003ad6;
        `};

    ${StyledTableRow}:hover & {
        background-color: #faf9f8;
    }

    ${(props) =>
        props.spacing === 'medium' &&
        css`
            border: none;
            padding: ${tokens.kdsSpacing6} ${tokens.kdsSpacing4};
            background: rgb(255, 255, 255);
        `};
`;
