import React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../../atoms/icon';
import { TableContext, TableStyleType } from './table-context';

export type TableStyleProps = Pick<TableStyleType, 'transparentHeader'>;
export interface TableHeaderProps
    extends TableStyleProps,
        React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
    /**
     * Pass in children that will be embedded in the table header label
     */
    children?: React.ReactNode;
    /**
     * Specify whether this header is the header by which a table is being sorted
     * by
     */
    isSortHeader?: boolean;
    /**
     * Specify whether this header is one through which a user can sort the table
     * @default false
     */
    isSortable?: boolean;
    /**
     * Hook that is invoked when the header is clicked
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * Specify the scope of this table header. You can find more info about this
     * attribute at the following URL:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
     */
    scope?: string;
    /**
     * Specify which direction we are currently sorting by, should be one DESC or ASC.
     */
    sortDirection?: 'DESC' | 'ASC';
}

export function TableHeader({
    isSortable = false,
    isSortHeader,
    sortDirection,
    scope = 'col',
    onClick,
    children,
    ...props
}: TableHeaderProps) {
    const { transparentHeader } = React.useContext(TableContext);

    if (!isSortable) {
        return (
            <StyledTableHeader transparentHeader={transparentHeader} scope={scope} {...props}>
                <TableHeaderLabel>{children}</TableHeaderLabel>
            </StyledTableHeader>
        );
    }
    return (
        <StyledTableHeader transparentHeader={transparentHeader} scope={scope} {...props}>
            <TableHeaderButton onClick={onClick}>
                {children}
                <Icon
                    color={isSortHeader ? '#003ad6' : '#8c7e75'}
                    icon={isSortHeader && sortDirection === 'ASC' ? 'arrow-up' : 'arrow-down'}
                    size={10}
                    style={{ marginLeft: '4px' }}
                />
            </TableHeaderButton>
        </StyledTableHeader>
    );
}

const StyledTableHeader = styled.th<TableHeaderProps>`
    white-space: nowrap;
    text-align: left;
    color: #50463f;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    background-color: #f4f4f2;
    padding: 0;

    ${(props) =>
        props.transparentHeader &&
        css`
            background-color: transparent;

            > button {
                background-color: inherit;
            }
        `};
`;

const TableHeaderLabel = styled.div`
    padding: 16px;
`;

const TableHeaderButton = styled.button`
    border: 0;
    padding: 0;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100%;
    background-color: #f4f4f2;
    color: #50463f;
    padding: 16px;
    transition: background-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
        outline 70ms cubic-bezier(0, 0, 0.38, 0.9);

    &:hover {
        background-color: #ecece6;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:focus {
        outline: 2px solid #7090e5;
        outline-offset: -2px;
    }
`;
