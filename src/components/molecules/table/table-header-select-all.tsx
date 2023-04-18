import React from 'react';
import styled, { css } from 'styled-components';

import { Checkbox } from '../../atoms/checkbox';
import { TableContext, TableStyleType } from './table-context';

export type TableStyleProps = Pick<TableStyleType, 'transparentHeader'>;

export interface TableHeaderSelectAllProps
    extends TableStyleProps,
        React.ThHTMLAttributes<HTMLElement> {
    /**
     * Specify the aria label for the underlying input control
     * @default Select all rows in the table
     */
    ariaLabel?: string;
    /**
     * Specify whether all items are selected, or not
     */
    checked: boolean;
    /**
     * Pass in children that will be embedded in the table header label
     */
    children?: React.ReactNode;
    /**
     * Specify whether the selection only has a subset of all items
     */
    indeterminate: boolean;
    /**
     * Provide a handler to listen to when a user initiates a selection request
     */
    onSelect: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Specify the scope of this table header. You can find more info about this
     * attribute at the following URL:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
     *
     *@default col
     */
    scope?: string;
}

export function TableHeaderSelectAll({
    indeterminate,
    checked,
    onSelect,
    ariaLabel = 'Select all rows in the table',
    scope = 'col',
    ...props
}: TableHeaderSelectAllProps) {
    const { transparentHeader } = React.useContext(TableContext);
    return (
        <StyledTableHeaderSelectAll
            scope={scope}
            aria-label={ariaLabel}
            transparentHeader={transparentHeader}
            {...props}
        >
            <Checkbox
                indeterminate={indeterminate}
                checked={checked}
                onChange={onSelect}
                aria-label="Select all"
            />
        </StyledTableHeaderSelectAll>
    );
}

const StyledTableHeaderSelectAll = styled.th<Pick<TableHeaderSelectAllProps, 'transparentHeader'>>`
    background-color: #f4f4f2;
    padding-left: 32px;
    padding-right: 16px;

    ${(props) =>
        props.transparentHeader &&
        css`
            background-color: transparent;
        `};
`;
