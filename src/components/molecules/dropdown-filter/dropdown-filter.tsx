import { Placement } from '@popperjs/core';
import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

import { useMergeRefs } from '../../../hooks/use-merge-refs';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useUniqueId } from '../../../hooks/use-unique-id';
import { Filter } from '../../atoms/filter';
import { Icon } from '../../atoms/icon';
import { Text } from '../../atoms/text';

export type { Placement };

export interface DropdownFilterProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Content of the Filter
     */
    children: React.ReactNode;
    /**
     * The total number of selected items
     */
    count?: number;
    /**
     * The label of the ActionButton.
     */
    label?: string;
    /**
     * Applies no padding to content
     */
    noPadding?: boolean;
    /**
     * The function called when the reset button is clicked.
     */
    onReset?: () => void;
    /**
     * The function called when the filter values are saved.
     */
    onSubmit?: () => void;
    /**
     * The placement of the Filter relative to the triggerButton. Accepts `auto`, `top`,
     * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
     * variations: `-start` or `-end`.
     * @default bottom-end
     */
    placement?: Placement;
}

export function DropdownFilter({
    label,
    count,
    noPadding,
    onReset,
    onSubmit,
    children,
    placement = 'bottom-end',
    ...props
}: DropdownFilterProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filterId = `filter-controlled-${useUniqueId()}`;
    const controlButtonId = `${filterId}-button`;

    const dropdownFilterRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    const mergedRef = useMergeRefs(buttonRef, setReferenceElement);

    useOutsideClick({
        ref: dropdownFilterRef,
        handler: () => {
            setIsOpen(false);
        },
    });

    const handleClick = () => {
        if (update) {
            update();
        }
        setIsOpen(!isOpen);
    };

    const handleSubmit = () => {
        handleClose();
        if (onSubmit) {
            onSubmit();
        }
    };

    const handleReset = () => {
        handleClose();
        if (onReset) {
            onReset();
        }
    };

    const handleClose = () => {
        if (!isOpen) {
            return;
        }
        setIsOpen(false);
        if (buttonRef && buttonRef.current) {
            buttonRef.current.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === `ArrowDown`) {
            setIsOpen(true);
        }
    };

    const getLabelText = () => {
        if (count && count > 0) {
            return (
                <>
                    <DropdownFilter.Label
                        fontSize={200}
                        fontWeight={count > 0 ? 'medium' : 'normal'}
                    >
                        {label}
                    </DropdownFilter.Label>
                    <DropdownFilter.Count fontSize={200} fontWeight="medium">
                        {String.fromCharCode(8226)} {count}
                    </DropdownFilter.Count>
                </>
            );
        }
        return (
            <DropdownFilter.Label fontSize={200} fontWeight="normal">
                {label}
            </DropdownFilter.Label>
        );
    };

    return (
        <StyledDropdownFilter ref={dropdownFilterRef} {...props}>
            <ActionButton
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-haspopup={true}
                aria-controls={filterId}
                ref={mergedRef}
                isOpen={isOpen}
                onKeyDown={handleKeyDown}
            >
                {getLabelText()}
                <StyledIcon icon="caret-down" color={tokens.kdsColorNeutral400} />
            </ActionButton>
            <StyledPopper
                ref={setPopperElement}
                isOpen={isOpen}
                style={styles.popper}
                {...attributes.popper}
            >
                <Filter
                    onReset={handleReset}
                    onSubmit={handleSubmit}
                    id={filterId}
                    isOpen={isOpen}
                    aria-label={controlButtonId}
                    noPadding={noPadding}
                    onClose={handleClose}
                >
                    {children}
                </Filter>
            </StyledPopper>
        </StyledDropdownFilter>
    );
}

const StyledDropdownFilter = styled.div`
    position: inline-block;
`;

const StyledLabel = styled(Text)`
    flex: 1 1 auto;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const StyledIcon = styled(Icon)`
    flex-shrink: 0;
    margin-left: 4px;
`;

const StyledCount = styled(Text)`
    flex-shrink: 0;
    margin-left: 2px;
`;

const StyledPopper = styled.div<{ isOpen: boolean }>`
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    z-index: ${(props) => (props.isOpen ? 1 : -1)};
`;

export interface ActionButtonProps {
    isOpen?: boolean;
}

const ActionButton = styled.button<Pick<ActionButtonProps, 'isOpen'>>`
    height: 40px;
    border-radius: 3px;
    border: 1px solid rgb(219, 213, 208);
    color: ${tokens.kdsColorNeutral900};
    background-color: white;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding-left: 12px;
    padding-right: 8px;
    transition: background-color 0.13s;
    width: 100%;

    ${(props) =>
        props.isOpen &&
        css`
            background-color: #fbfaf9;
        `}

    &:hover {
        background-color: #fbfaf9;
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
        border-color: rgb(219, 213, 208);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.button.blue.boxShadowColor};
        border-color: ${(props) => props.theme.button.blue.boxShadowColor};
    }
`;

DropdownFilter.Label = StyledLabel;
DropdownFilter.Count = StyledCount;
DropdownFilter.Section = Filter.Section;
