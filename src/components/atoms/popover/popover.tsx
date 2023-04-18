import { Placement } from '@popperjs/core';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useUniqueId } from '../../../hooks/use-unique-id';

export type { Placement };

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Child element that triggers the popover
     */
    children: React.ReactNode;
    /**
     * Content of the popover
     */
    content: React.ReactNode;
    /**
     * The placement of the popover content relative to the children. Accepts `auto`, `top`,
     * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
     * variations: `-start` or `-end`.
     * @default bottom
     */
    placement?: Placement;
}

export function Popover({ children, content, placement = 'bottom', ...props }: PopoverProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const id = useUniqueId();

    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    useOutsideClick({
        ref: popoverRef,
        handler: (event) => {
            if (isVisible && !triggerRef.current?.contains(event.target as HTMLElement)) {
                setIsVisible(false);
            }
        },
    });

    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <StyledPopover {...props}>
            <div ref={triggerRef}>
                <StyledPopoverElement
                    ref={setReferenceElement}
                    aria-describedby={isVisible ? id : undefined}
                    onClick={handleClick}
                >
                    {children}
                </StyledPopoverElement>
            </div>

            {isVisible &&
                ReactDOM.createPortal(
                    <StyledPopoverContainer ref={popoverRef}>
                        <StyledPopoverContent
                            role="tooltip"
                            id={id}
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            {content}
                        </StyledPopoverContent>
                    </StyledPopoverContainer>,
                    document.body,
                )}
        </StyledPopover>
    );
}

const StyledPopover = styled.div`
    display: inline-block;
`;

const StyledPopoverElement = styled.div``;

const StyledPopoverContent = styled.div`
    width: 300px;
    padding: 16px;
    border-radius: 3px;
    box-shadow: 0px 4px 24px -4px rgba(219, 213, 208, 0.75);
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    font-size: 14px;
    line-height: 1.375;
    color: #5a4f47;
    background-color: white;
    text-align: left;
`;

const StyledPopoverContainer = styled.div`
    z-index: 9999;
    position: relative;
`;
