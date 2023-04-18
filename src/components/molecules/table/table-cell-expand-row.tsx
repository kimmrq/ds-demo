import React from 'react';
import styled from 'styled-components';

import { IconButton } from '../../atoms/icon-button';
import { TableCell } from './table-cell';

export interface TableCellExpandRowProps extends React.HTMLAttributes<HTMLElement> {
    isExpandable?: boolean;
    isExpanded?: boolean;
    onExpand?: React.MouseEventHandler<HTMLElement>;
}

export function TableCellExpandRow({
    isExpandable,
    isExpanded = false,
    onExpand,
    ...props
}: TableCellExpandRowProps) {
    return (
        <>
            {onExpand && isExpandable && (
                <StyledTableCellExpandRow {...props}>
                    <IconButton
                        icon={isExpanded ? 'caret-up' : 'caret-down'}
                        labelText={isExpanded ? 'close' : 'open'}
                        onClick={onExpand}
                        variant="ghost"
                    />
                </StyledTableCellExpandRow>
            )}
            {onExpand && !isExpandable && <TableCell />}
        </>
    );
}

export const StyledTableCellExpandRow = styled(TableCell)`
    padding: 0 16px;
    width: 62px;
    min-width: 62px;
`;
