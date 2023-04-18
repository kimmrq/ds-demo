import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icons } from '../../atoms/icon';
import { IconButton } from '../../atoms/icon-button';
import { H1, H2, H3, H4 } from '../../atoms/text/text';

export interface FormHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Corresponding header tag
     * @default H2
     */
    headerLevel?: 1 | 2 | 3 | 4;
    icon?: Icons;
    onClick?: (e: React.SyntheticEvent) => void;
    title: string;
}

export function FormHeader({ icon, title, onClick, headerLevel = 2, ...props }: FormHeaderProps) {
    const componentMap = {
        1: H1,
        2: H2,
        3: H3,
        4: H4,
    };
    const TagName = componentMap[headerLevel || 2];

    return (
        <StyledFormHeader {...props}>
            <TagName>{title}</TagName>
            {icon && <IconButton icon={icon} labelText="Edit form" onClick={onClick} />}
        </StyledFormHeader>
    );
}

const StyledFormHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: ${tokens.kdsSpacingStack4};

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        margin: ${(props) => props.theme.formHeader.margin};
    }
`;
