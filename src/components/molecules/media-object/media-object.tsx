import React from 'react';
import styled, { css } from 'styled-components';

import { H3, P1 } from '../../atoms/text/text';

export interface MediaObjectProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Call to action element
     */
    action?: JSX.Element;
    /**
     * Align content vertically inside the MediaObject
     */
    align?: 'center' | 'start' | 'end';
    children?: React.ReactNode;
    /**
     * Header of the MediaObject
     */
    header?: JSX.Element | string;
    /**
     * Media element
     */
    mediaItem: JSX.Element;
    /**
     * Whitespace between content and mediaItem
     */
    mediaSpacing?: 'small' | 'medium' | 'large' | 'xlarge';
    /**
     * Subheader to show below the title
     */
    subHeader?: string;
}

export function MediaObject({
    children,
    mediaItem,
    mediaSpacing = 'medium',
    header,
    subHeader,
    align,
    action,
    ...props
}: MediaObjectProps) {
    const displayMediaHeader = () => {
        if (typeof header === 'string') {
            return <StyledH3>{header}</StyledH3>;
        }
        return header;
    };

    return (
        <StyledMediaObject {...props} align={align}>
            <StyledFigure {...props} mediaSpacing={mediaSpacing}>
                <StyledMediaItem>{mediaItem}</StyledMediaItem>
            </StyledFigure>
            <StyledMediaContent>
                <StyledMediaBody>
                    {displayMediaHeader()}
                    {header && subHeader && <StyledP1>{subHeader}</StyledP1>}
                    {children && <StyledBodyContent>{children}</StyledBodyContent>}
                </StyledMediaBody>
            </StyledMediaContent>
            {action && <StyledMediaAction>{action}</StyledMediaAction>}
        </StyledMediaObject>
    );
}

const StyledH3 = styled(H3)`
    color: ${(props) => props.theme.mediaObject.color};
`;
const StyledP1 = styled(P1)`
    margin-top: 4px;
    margin-bottom: 0;
    font-size: ${(props) => props.theme.mediaObject.paragraphFontSize};
`;

const StyledMediaObject = styled.article<Pick<MediaObjectProps, 'align'>>`
    display: flex;

    & + & {
        margin-top: ${(props) => props.theme.mediaObject.stackedSpacing};
        padding-top: ${(props) => props.theme.mediaObject.stackedSpacing};
        border-top: 1px solid ${(props) => props.theme.mediaObject.borderColor};
    }

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
`;

const StyledFigure = styled.figure<Pick<MediaObjectProps, 'mediaSpacing'>>`
    flex: 0 0 auto;

    ${(props) =>
        props.mediaSpacing === 'small' &&
        css`
            margin: 0 8px 0 0;
        `}
    ${(props) =>
        props.mediaSpacing === 'medium' &&
        css`
            margin: 0 16px 0 0;
        `}
    ${(props) =>
        props.mediaSpacing === 'large' &&
        css`
            margin: 0 24px 0 0;
        `}
    ${(props) =>
        props.mediaSpacing === 'xlarge' &&
        css`
            margin: 0 32px 0 0;
        `}
`;

const StyledMediaItem = styled.div`
    display: flex;
`;

const StyledMediaContent = styled.div`
    flex: 1;
`;

const StyledMediaBody = styled.div`
    margin: 0 1rem 0 0;
`;

const StyledBodyContent = styled.div`
    margin-top: ${(props) => props.theme.mediaObject.bodySpacing};
`;

const StyledMediaAction = styled.div`
    flex: 0 0 auto;
    align-self: flex-start;
`;
