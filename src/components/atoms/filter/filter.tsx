import { Button } from 'components/atoms/button';
import { Collapse } from 'components/atoms/collapse';
import { IconButton } from 'components/atoms/icon-button';
import { Link } from 'components/atoms/link';
import { Text } from 'components/atoms/text';
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

export interface FilterProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Content of the Filter
     */
    children: React.ReactNode;
    /**
     * The unique id of the Filter used for ARIA and HTML `id` attributes.
     */
    id?: string;
    /**
     * Hides or shows the filter when toggled
     */
    isOpen?: boolean;
    /**
     * Applies no padding to content
     */
    noPadding?: boolean;
    /**
     * The function called when the Filter should close. This is called after the escape shortcut key is used.
     */
    onClose?: React.KeyboardEventHandler<HTMLDivElement>;
    /**
     * The function called when the reset button is clicked.
     */
    onReset?: React.MouseEventHandler<HTMLElement>;
    /**
     * The function called when the filter values are saved.
     */
    onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Filter({
    isOpen,
    onReset,
    onSubmit,
    onClose,
    noPadding,
    children,
    ...props
}: FilterProps) {
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && filterRef.current) {
            filterRef.current.focus();
        }
    }, [isOpen, filterRef]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClose && isOpen && event.key === 'Escape') {
            onClose(event);
        }
    };

    return (
        <StyledFilter isOpen={isOpen} {...props}>
            <StyledFilterScroll>
                <StyledFilterContent
                    noPadding={noPadding}
                    ref={filterRef}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onKeyUp={(e) => {
                        e.preventDefault();
                    }}
                >
                    {children}
                </StyledFilterContent>
            </StyledFilterScroll>
            <StyledFilterFooter>
                <Link
                    onClick={onReset}
                    style={{ fontSize: '14px' }}
                    fontWeight="normal"
                    color="grey"
                >
                    Wissen
                </Link>
                <Button variant="solid" size="small" onClick={onSubmit}>
                    Opslaan
                </Button>
            </StyledFilterFooter>
        </StyledFilter>
    );
}

const StyledFilter = styled.div<FilterProps>`
    padding: 0;
    margin: 8px 0px;
    box-shadow: ${tokens.kdsBoxShadowLevel3};
    border-radius: 3px;
    background-color: white;
    width: 310px;
`;

const StyledFilterScroll = styled.div`
    display: flex;
    max-height: 283px;
    overflow-y: auto;
    height: 100%;
    overflow-x: hidden;
    flex-direction: column;
`;

const StyledFilterContent = styled.div<Pick<FilterProps, 'noPadding'>>`
    ${(props) =>
        !props.noPadding &&
        css`
            padding: 12px 16px;
        `}

    &:focus {
        outline: none;
    }
`;

const StyledFilterFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-top: 1px solid ${tokens.kdsColorNeutral200};
`;

export interface FilterSectionProps {
    /**
     * The content of the section.
     */
    children?: React.ReactNode;
    /**
     * The label of the section.
     */
    label?: string;
}

function FilterSection({ label, children, ...props }: FilterSectionProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = (event: React.SyntheticEvent): void => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    return (
        <StyledFilterSection {...props}>
            <StyledFilterSectionHeader onClick={handleClick}>
                <Text fontSize={300} fontWeight="medium">
                    {label}
                </Text>
                <IconButton
                    variant="ghost"
                    icon={isOpen ? 'caret-up-big' : 'caret-down-big'}
                    labelText="Show more"
                    onClick={handleClick}
                />
            </StyledFilterSectionHeader>
            <Collapse isOpen={isOpen}>
                <StyledFilterSectionContent>{children}</StyledFilterSectionContent>
            </Collapse>
        </StyledFilterSection>
    );
}

const StyledFilterSection = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        border-bottom: 1px solid ${tokens.kdsColorNeutral200};
    }
`;

const StyledFilterSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;
    cursor: pointer;
`;

const StyledFilterSectionContent = styled.div`
    padding: 0 16px;
`;

Filter.Section = FilterSection;
