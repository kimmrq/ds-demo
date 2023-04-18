import React, { memo } from 'react';
import styled, { css } from 'styled-components';

import { InputLayout } from '../input-layout';

export interface FormLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Align content vertically inside the InputLayout
     */
    align?: 'center' | 'start' | 'end';
    /**
     * Use this variant if all children should be displayed in unequal columns
     */
    children?: React.ReactNode;
    /**
     * Use the colSize modifier to give a width, otherwise it defaults to auto width
     */
    colSize?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Use this variant if all children should have equal column sizes
     */
    items?: JSX.Element[];
    /**
     * Controls the horizontal alignment of the children within the container.
     * 'center' | 'left' | 'right' | 'space-between';
     */
    justify?: 'center' | 'left' | 'right' | 'space-between';
    /**
     * Controls the layout of the children. Grouped: removes spacing, Condensed: decreases spacing, Stacked: Displays a column
     * 'grouped' | 'condensed' | 'stacked';
     */
    layout?: 'grouped' | 'condensed' | 'stacked';
    /**
     *  Wrap modifier controls whether the children are forced in a single line or can be flowed into multiple lines.
     */
    wrap?: 'no-wrap' | 'wrap';
}

export const FormLayout = memo(function FormLayout({
    children,
    justify,
    layout,
    items,
    wrap,
    colSize,
    align,
    ...props
}: FormLayoutProps) {
    return (
        <StyledFormLayout {...props} justify={justify} layout={layout} wrap={wrap} align={align}>
            {items && (
                <>
                    {items.map((item, i) => (
                        <StyledInputLayout colSize={colSize} key={i}>
                            {item}
                        </StyledInputLayout>
                    ))}
                </>
            )}
            {children && <>{children}</>}
        </StyledFormLayout>
    );
});

const StyledInputLayout = styled(InputLayout)``;

const StyledFormLayout = styled.div<Pick<FormLayoutProps, 'layout' | 'justify' | 'wrap' | 'align'>>`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: -${(props) => props.theme.formLayout.columnSpacing};
    margin-right: -${(props) => props.theme.formLayout.columnSpacing};

    ${(props) =>
        props.layout === 'grouped' &&
        css`
            margin-left: 0;
            margin-right: 0;
            > * {
                padding: 0 0 0 0 !important;
                &:not(:last-child) {
                    margin-right: -1px;
                }
            }
        `}

    ${(props) =>
        props.layout === 'condensed' &&
        css`
            margin-left: -${props.theme.formLayout.condensedSpacing};
            margin-right: -${props.theme.formLayout.condensedSpacing};
            > * {
                padding: 0 ${props.theme.formLayout.condensedSpacing} !important;
            }
        `}

    ${(props) =>
        props.layout === 'stacked' &&
        css`
            flex-direction: column;

            > * {
                &:not(:last-child) {
                    margin-bottom: ${(props) => props.theme.formGroup.margin};
                }
            }
        `}

    ${(props) =>
        props.justify === 'left' &&
        css`
            justify-content: flex-start;
        `}
    ${(props) =>
        props.justify === 'center' &&
        css`
            justify-content: center;
        `}
    ${(props) =>
        props.justify === 'right' &&
        css`
            justify-content: flex-end;
        `}
    ${(props) =>
        props.justify === 'space-between' &&
        css`
            justify-content: space-between;
        `}

    ${(props) =>
        props.wrap === 'wrap' &&
        css`
            flex-wrap: wrap;
            > * {
                padding: 0 ${(props) => props.theme.formLayout.columnSpacing};
            }
        `}
    ${(props) =>
        props.wrap === 'wrap' &&
        props.layout === 'condensed' &&
        css`
            flex-wrap: wrap;
            > * {
                padding: 0 ${props.theme.formLayout.condensedSpacing} !important;
            }
        `}
    ${(props) =>
        props.wrap === 'no-wrap' &&
        css`
            flex-wrap: nowrap;
        `}

    ${(props) =>
        props.align === 'start' &&
        css`
            align-items: flex-start;
        `}
    ${(props) =>
        props.align === 'center' &&
        css`
            align-items: center;
        `}
    ${(props) =>
        props.align === 'end' &&
        css`
            align-items: flex-end;
        `}
`;
