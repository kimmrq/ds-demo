import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '../../atoms/checkbox';
import { TableCell } from './table-cell';

export interface TableCellSelectRowProps extends React.HTMLAttributes<HTMLElement> {
    isSelected?: boolean;
    onSelect?: React.ChangeEventHandler<HTMLInputElement>;
}

export function TableCellSelectRow({ isSelected, onSelect, ...props }: TableCellSelectRowProps) {
    return (
        <StyledTableCellSelectRow isSelected={isSelected} {...props}>
            <Checkbox
                checked={isSelected ? isSelected : false}
                aria-label="Select row"
                onChange={onSelect}
            />
        </StyledTableCellSelectRow>
    );
}

export const StyledTableCellSelectRow = styled(TableCell)<TableCellSelectRowProps>`
    padding-left: 32px;
    padding-right: 16px;
    width: 68px;
    min-width: 68px;
`;
