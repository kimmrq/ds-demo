import { Text } from 'components/atoms/text/text';
import React from 'react';
import styled from 'styled-components';

export interface QuestionnaireFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    handleSubmit?: () => void;
    id?: string;
}

export interface QuestionnaireIntroProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

export interface QuestionnaireFormSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function QuestionnaireForm({
    children,
    handleSubmit,
    id,
    ...props
}: QuestionnaireFormProps) {
    return (
        <StyledQuestionnaireForm
            {...props}
            onSubmit={(e) => {
                if (handleSubmit) {
                    e.preventDefault();
                    handleSubmit();
                }
            }}
            id={id}
        >
            {children}
        </StyledQuestionnaireForm>
    );
}

export function QuestionnaireIntro({ title, ...props }: QuestionnaireIntroProps) {
    return (
        <StyledQuestionnaireIntro {...props}>
            <Text as="h3" fontSize={400} fontWeight="normal">
                {title}
            </Text>
        </StyledQuestionnaireIntro>
    );
}

export function QuestionnaireFormSection({ children, ...props }: QuestionnaireFormSectionProps) {
    return <StyledQuestionnaireFormSection {...props}>{children}</StyledQuestionnaireFormSection>;
}

const StyledQuestionnaireIntro = styled.div`
    margin: ${(props) => props.theme.formHeader.margin};
`;

const StyledQuestionnaireFormSection = styled.div`
    padding: ${(props) => props.theme.form.paddingTop} ${(props) => props.theme.form.paddingSides};
    margin: 0;
    box-shadow: ${(props) => props.theme.form.boxShadow};
    background: white;
    position: relative;

    &:not(:last-child) {
        margin: 0 0 2rem 0;
    }
`;

const StyledQuestionnaireForm = styled.form`
    margin: 1rem 0;
    width: 100%;
    background: transparent;
`;
