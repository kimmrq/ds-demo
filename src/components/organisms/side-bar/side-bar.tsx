import React from 'react';
import styled from 'styled-components';

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /*
     * Header area in sidebar; Use with AvatarBlock
     */
    header?: JSX.Element;
    /*
     * Nav area in sidebar
     */
    navigation?: JSX.Element;
}

export function SideBar({ header, navigation, ...props }: SideBarProps) {
    return (
        <StyledSideBar {...props}>
            <StyledColumn>
                {header && <StyledProfileArea>{header}</StyledProfileArea>}
                {navigation && <StyledNavigationArea>{navigation}</StyledNavigationArea>}
            </StyledColumn>
        </StyledSideBar>
    );
}

const StyledSideBar = styled.div`
    display: block;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 24px;
    background: linear-gradient(
        -180deg,
        rgb(244, 242, 240) 0%,
        rgb(250, 249, 248) 100%,
        rgba(255, 255, 255, 0.1) 100%
    );

    @media (min-width: 992px) {
        max-width: 350px;
        margin-left: 3rem;
    }
`;

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    overflow-x: hidden;
`;

const StyledProfileArea = styled.div`
    flex: 0 0 auto;
`;

const StyledNavigationArea = styled.div`
    flex: 1;
`;
