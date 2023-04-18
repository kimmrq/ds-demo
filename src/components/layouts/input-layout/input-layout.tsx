import React, { memo } from 'react';
import styled, { css } from 'styled-components';

export interface InputLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Align content vertically inside the InputLayout
     */
    align?: 'center' | 'start' | 'end';
    children?: React.ReactNode;
    /**
     * Use the colSize modifier to give a width, otherwise it defaults to auto width
     */
    colSize?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Use the isExpanded modifier on the element if you want to fill up the remaining space
     */
    isExpanded?: boolean;
}

export function getColSize(colSize: number | undefined) {
    const maxCols = 6;
    if (colSize && colSize > 0 && colSize <= maxCols) {
        return (100 / maxCols) * colSize;
    }
    return undefined;
}

export const InputLayout = memo(function InputLayout({
    children,
    colSize,
    align,
    ...props
}: InputLayoutProps) {
    return (
        <StyledInputLayout {...props} colWidth={getColSize(colSize)} align={align}>
            {children}
        </StyledInputLayout>
    );
});

const StyledInputLayout = styled.div<
    Pick<InputLayoutProps & { colWidth: number | undefined }, 'align' | 'isExpanded' | 'colWidth'>
>`
    position: relative;
    font-size: ${(props) => props.theme.formLabel.fontSize};
    line-height: ${(props) => props.theme.formLabel.lineHeight};
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${(props) => (typeof props.colWidth === 'number' ? `${props.colWidth}%` : 'auto')};
    max-width: ${(props) => (typeof props.colWidth === 'number' ? `${props.colWidth}%` : 'auto')};

    padding: 0 ${(props) => props.theme.formLayout.columnSpacing};

    ${(props) =>
        props.align === 'start' &&
        css`
            display: flex;
            align-items: flex-start;
        `}
    ${(props) =>
        props.align === 'center' &&
        css`
            display: flex;
            align-items: center;
        `}
    ${(props) =>
        props.align === 'end' &&
        css`
            display: flex;
            align-items: flex-end;
        `}

    ${(props) =>
        props.isExpanded &&
        css`
            flex-grow: 1;
            flex-shrink: 1;
        `}
`;
