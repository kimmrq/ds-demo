import { Placement } from '@popperjs/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

import { useUniqueId } from '../../../hooks/use-unique-id';

export type { Placement };

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The react component to use as the trigger for the tooltip
     */
    children: React.ReactNode;
    /**
     * Content of the Tooltip
     */
    content: React.ReactNode;
    /**
     * If `true`, the tooltip will show an arrow tip
     * @default true
     */
    hasArrow?: boolean;
    /**
     * Where to place the tooltip
     * @default top
     */
    placement?: Placement;
}

const doesWindowSupportTouch = (): boolean =>
    typeof window !== 'undefined' && 'ontouchstart' in window;

export function Tooltip({
    children,
    content,
    placement = 'top',
    hasArrow = true,
    ...props
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const id = useUniqueId();

    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: 'arrow',
                options: {
                    element: arrowRef,
                },
            },
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    function handleClick() {
        if (doesWindowSupportTouch()) {
            if (isVisible) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }
    }

    function onFocus() {
        if (!doesWindowSupportTouch()) {
            setIsVisible(true);
        }
    }

    function onBlur() {
        if (!doesWindowSupportTouch()) {
            setIsVisible(false);
        }
    }

    function onMouseEnter() {
        if (!doesWindowSupportTouch()) {
            setIsVisible(true);
        }
    }

    function onMouseLeave() {
        setIsVisible(false);
    }

    return (
        <>
            <StyledTooltipElement
                ref={setReferenceElement}
                aria-describedby={isVisible ? id : undefined}
                onClick={handleClick}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            >
                {children}
            </StyledTooltipElement>
            {isVisible &&
                ReactDOM.createPortal(
                    <StyledTooltipContent
                        role="tooltip"
                        id={id}
                        ref={setTooltipElement}
                        style={styles.popper}
                        onClick={(event): void => {
                            // This is to ensure the default event propagation is stopped when the tooltip
                            // is created by portals.
                            // https://reactjs.org/docs/portals.html#event-bubbling-through-portals
                            // https://github.com/facebook/react/issues/11387

                            event.stopPropagation();

                            // This is to ensure the tooltip would be closed if it's clicked in touch screen
                            // devices so it could easier to be toggled off.
                            if (doesWindowSupportTouch()) {
                                setIsVisible(false);
                            }
                        }}
                        {...attributes.popper}
                    >
                        {content}
                        {hasArrow && (
                            <div ref={setArrowRef} style={styles.arrow} className="arrow" />
                        )}
                    </StyledTooltipContent>,
                    document.body,
                )}
        </>
    );
}

const StyledTooltipElement = styled.div`
    display: inline-block;
`;

const StyledTooltipContent = styled.div`
    display: inline-block;
    max-width: 300px;
    padding: 8px 16px;
    border-radius: 3px;
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    font-size: 14px;
    line-height: 1.375;
    color: white;
    background-color: ${tokens.kdsColorNeutral900};
    text-align: left;
    word-wrap: break-word;
    animation: tooltip-animation 150ms cubic-bezier(0, 0, 0.4, 1);
    z-index: 9999;

    @keyframes tooltip-animation {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .arrow,
    .arrow::before {
        position: absolute;
        width: 8px;
        height: 8px;
        background: inherit;
    }

    .arrow {
        visibility: hidden;
    }

    .arrow::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }

    &[data-popper-placement^='top'] > .arrow {
        bottom: -4px;
    }

    &[data-popper-placement^='bottom'] > .arrow {
        top: -4px;
    }

    &[data-popper-placement^='left'] > .arrow {
        right: -4px;
    }

    &[data-popper-placement^='right'] > .arrow {
        left: -4px;
    }
`;
