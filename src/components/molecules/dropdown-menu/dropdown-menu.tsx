import { Placement } from '@popperjs/core';
import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

import { useMergeRefs } from '../../../hooks/use-merge-refs';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useUniqueId } from '../../../hooks/use-unique-id';
import { Menu } from '../../atoms/menu';
import { MenuItemProps } from '../../atoms/menu/menu-item';

export type { Placement };

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A collection of 'MenuItem' elements
     */
    children: React.ReactElement<MenuItemProps>[] | React.ReactElement<MenuItemProps>;
    /**
     * The placement of the Menu relative to the triggerButton. Accepts `auto`, `top`,
     * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
     * variations: `-start` or `-end`.
     * @default bottom-end
     */
    placement?: Placement;
    /**
     * Button that toggles the Menu. Use IconButton or Button.
     */
    trigger: React.ReactElement;
}

export function DropdownMenu({
    children,
    trigger,
    placement = 'bottom-end',
    ...props
}: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const menuId = `menu-controlled-${useUniqueId()}`;
    const controlButtonId = `${menuId}-button`;

    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    useOutsideClick({
        ref: dropdownMenuRef,
        handler: () => {
            setIsOpen(false);
        },
    });

    const mergedRef = useMergeRefs(buttonRef, setReferenceElement);

    const handleClose = () => {
        if (!isOpen) {
            return;
        }
        setIsOpen(false);
        if (buttonRef && buttonRef.current) {
            buttonRef.current.focus();
        }
    };

    const handleClick = () => {
        if (update) {
            update();
        }
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === `ArrowDown`) {
            setIsOpen(true);
        }
    };

    return (
        <StyledDropdownMenu ref={dropdownMenuRef} {...props}>
            {React.cloneElement(trigger, {
                'onKeyDown': handleKeyDown,
                'onClick': handleClick,
                'buttonRef': mergedRef,
                'id': controlButtonId,
                'aria-expanded': isOpen,
                'aria-haspopup': true,
                'aria-controls': menuId,
            })}
            <StyledPopper
                ref={setPopperElement}
                isOpen={isOpen}
                style={styles.popper}
                {...attributes.popper}
            >
                <Menu id={menuId} isOpen={isOpen} onClose={handleClose} labeledBy={controlButtonId}>
                    {children}
                </Menu>
            </StyledPopper>
        </StyledDropdownMenu>
    );
}

const StyledDropdownMenu = styled.div`
    display: inline-block;
`;

const StyledPopper = styled.div<{ isOpen: boolean }>`
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
    z-index: ${(props) => (props.isOpen ? 1 : -1)};
`;
