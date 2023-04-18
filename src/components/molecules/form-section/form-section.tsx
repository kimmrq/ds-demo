import React from 'react';
import styled, { css } from 'styled-components';

import { H4 } from '../../atoms/text';

export interface FormSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    isBorderless?: boolean;
    title?: string;
}

export function FormSection({ title, children, isBorderless, ...props }: FormSectionProps) {
    return (
        <StyledFormSection {...props} isBorderless={isBorderless}>
            {title && <StyledH4>{title}</StyledH4>}
            {children}
        </StyledFormSection>
    );
}

const StyledFormSection = styled.section<FormSectionProps>`
    & + & {
        padding: ${(props) => props.theme.formSection.padding} 0 0 0;
        margin: ${(props) => props.theme.formSection.margin} 0 0 0;
        border-top: 1px solid ${(props) => props.theme.formSection.borderColor};
    }

    ${(props) =>
        props.isBorderless &&
        css`
            padding: 0 0 0 0 !important;
            border-top: none !important;
        `}
`;

const StyledH4 = styled(H4)`
    margin: ${(props) => props.theme.formSection.formSectionHeader.margin};
`;
