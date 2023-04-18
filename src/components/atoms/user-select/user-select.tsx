/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useUniqueId } from '../../../hooks/use-unique-id';
import * as tokens from '../../../tokens/tokens';
import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { IconCircle } from '../icon-circle';

export interface user {
    id: number;
    initials: string;
    name: string;
    username: string;
}

export interface UserSelectProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    /**
     * Initial selected user
     */
    defaultValue?: user;
    /**
     * The unique id of the UserSelect used for ARIA and HTML `id` attributes.
     * @default A uniquely generated id
     */
    id?: string;
    /**
     * The callback function called when the UserSelect state changes.
     */
    onChange: (user: string) => void;
    /**
     * The callback function called when the 'other account' option is selected.
     */
    onDismiss?: () => void;
    /**
     * Placeholder text is shown when no defaultValue is set
     * @default 'Selecteer je eigen account'
     */
    placeholder?: string;
    /**
     * The array of users who previously have logged in.
     */
    users: user[];
}

export function UserSelect({
    users,
    defaultValue,
    placeholder = 'Selecteer je eigen account',
    id,
    onChange,
    onDismiss,
    ...props
}: UserSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(defaultValue);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen && menuRef.current) {
            menuRef.current.focus();
        }
    }, [isOpen, menuRef]);

    const userSelectRef = useRef<HTMLDivElement>(null);

    const menuId = `menu-controlled-${useUniqueId()}`;
    const inputId = useUniqueId(id);
    const controlButtonId = `${menuId}-button`;

    useOutsideClick({
        ref: userSelectRef,
        handler: () => {
            setIsOpen(false);
        },
    });

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    function handleSelectionChange(user: user) {
        setSelectedUser(user);
        setIsOpen(!isOpen);
        if (onChange) {
            onChange(user.username);
        }
        if (buttonRef && buttonRef.current) {
            buttonRef.current.focus();
        }
    }

    const remainingUsers = users.filter((user) => {
        return user.id !== selectedUser?.id;
    });

    const handleButtonKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === `ArrowDown`) {
            setIsOpen(true);
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
        if (event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }
        const childrenArray = remainingUsers;
        let nextSelectedIndex = 0;
        let isShortcut = false;
        const getItemCount = () => {
            if (onDismiss) {
                return childrenArray.length + 1;
            }
            return childrenArray.length;
        };
        const itemCount = getItemCount();
        const firstItem = 0;
        const lastItem = itemCount - 1;

        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'Down': // IE/Edge specific value
            case 'Up': // IE/Edge specific value
                const direction = event.key === 'ArrowUp' ? -1 : 1;
                isShortcut = true;
                const nextIndex = selectedItemIndex + direction;
                nextSelectedIndex =
                    nextIndex < 0 ? lastItem : nextIndex >= itemCount ? firstItem : nextIndex;
                break;

            case 'Home':
            case 'End':
                const skipTo = event.key === 'Home' ? firstItem : lastItem;
                isShortcut = true;
                nextSelectedIndex = skipTo;
                break;

            case 'Tab':
                handleClose();
                break;

            case 'Escape':
            case 'Esc': // IE/Edge specific value
                isShortcut = true;
                handleClose();
                break;

            case 'Spacebar':
            case ' ':
            case 'Enter':
                nextSelectedIndex = selectedItemIndex;
                if (onDismiss && selectedItemIndex === remainingUsers.length) {
                    onDismiss();
                }
                if (selectedItemIndex !== remainingUsers.length) {
                    handleSelectionChange(childrenArray[selectedItemIndex]);
                }
                isShortcut = true;
                break;

            default:
        }
        if (isShortcut) {
            event.stopPropagation();
            event.preventDefault();
            setSelectedItemIndex(nextSelectedIndex);
        }
    };

    return (
        <StyledUserSelectContainer ref={userSelectRef} {...props}>
            <StyledUserSelectButton
                onClick={(event) => handleButtonClick(event)}
                onKeyDown={handleButtonKeyDown}
                onKeyUp={(e) => {
                    e.preventDefault();
                }}
                aria-expanded={isOpen}
                aria-haspopup={true}
                aria-controls={menuId}
                ref={buttonRef}
                id={controlButtonId}
            >
                {selectedUser ? (
                    <StyledUserBlock>
                        <Avatar size={54} initials={selectedUser.initials} />
                        <StyledUserName>{selectedUser.name}</StyledUserName>
                    </StyledUserBlock>
                ) : (
                    <StyledUserName style={{ marginLeft: 0 }}>{placeholder}</StyledUserName>
                )}
                <Icon icon="caret-down-big" color={tokens.kdsColorNeutral500} />
            </StyledUserSelectButton>
            <StyledOptions
                role="menu"
                tabIndex={0}
                aria-activedescendant={`${inputId}-${selectedItemIndex}`}
                aria-labelledby={controlButtonId}
                onKeyDown={handleKeyDown}
                onKeyUp={(e) => {
                    e.preventDefault();
                }}
                isOpen={isOpen}
                ref={menuRef}
            >
                {remainingUsers.map((user, index) => {
                    const itemId = `${inputId}-${index}`;

                    return (
                        <StyledOption
                            key={user.id}
                            id={itemId}
                            onClick={() => handleSelectionChange(user)}
                            isFocused={selectedItemIndex === index}
                            onMouseOver={() => setSelectedItemIndex(index)}
                        >
                            <StyledUserBlock>
                                <Avatar size={54} initials={user.initials} />
                                <StyledUserName>{user.name}</StyledUserName>
                            </StyledUserBlock>
                        </StyledOption>
                    );
                })}
                {onDismiss && (
                    <StyledOption
                        onClick={onDismiss}
                        isFocused={selectedItemIndex === remainingUsers.length}
                        onMouseOver={() => setSelectedItemIndex(remainingUsers.length)}
                    >
                        <StyledUserBlock>
                            <StyledIconCircle
                                icon="add"
                                size="small"
                                background={tokens.kdsColorNeutral200}
                            />
                            <StyledUserName style={{ color: tokens.kdsColorNeutral400 }}>
                                Ander account
                            </StyledUserName>
                        </StyledUserBlock>
                    </StyledOption>
                )}
            </StyledOptions>
        </StyledUserSelectContainer>
    );
}

const StyledUserSelectContainer = styled.div`
    position: relative;
    width: 100%;
`;

const StyledUserSelectButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${tokens.kdsColorNeutral900};
    background-color: white;
    margin: 0;
    cursor: pointer;
    outline: none;
    height: 86px;
    border: 1px solid ${tokens.kdsColorNeutral200};
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 16px;
    padding-right: 16px;
    transition: border 0.2s;

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        padding-left: 24px;
        padding-right: 24px;
    }

    &:hover {
        border-color: ${tokens.kdsColorNeutral700};
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        outline: 0;
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, 0px 0px 0px 4px ${tokens.kdsColorBlue300};
    }
`;

const StyledUserBlock = styled.span`
    display: flex;
    align-items: center;
`;

const StyledUserName = styled.p`
    margin: 0;
    margin-left: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        margin-left: 16px;
    }
`;

export interface StyledOptionsProps {
    isOpen: boolean;
}

const StyledOptions = styled.ul<StyledOptionsProps>`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    padding: 0;
    z-index: 1;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 258px;
    overflow: hidden auto;
    box-shadow: 0px 23px 18px -9px rgba(219, 213, 208, 0.16);

    &:focus {
        outline: none;
    }
`;

export interface StyledOptionProps {
    isFocused: boolean;
}

const StyledOption = styled.li<StyledOptionProps>`
    width: 100%;
    height: 86px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    cursor: pointer;
    border-bottom: 1px solid ${tokens.kdsColorNeutral200};
    border-left: 1px solid ${tokens.kdsColorNeutral200};
    border-right: 1px solid ${tokens.kdsColorNeutral200};

    ${(props) =>
        props.isFocused &&
        css`
             {
                background-color: ${(props) => props.theme.menu.backgroundColorFocus};
                color: ${(props) => props.theme.menu.color};
            }
        `}

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        padding-left: 24px;
    }
`;

const StyledIconCircle = styled(IconCircle)`
    margin: 0 11px;
`;
