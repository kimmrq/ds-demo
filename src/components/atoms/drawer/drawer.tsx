import { Box } from 'components/layouts/box';
import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { IconButton } from '../icon-button';
import { H2 } from '../text';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    header?: string;
    isVisible: boolean;
    onClose: () => void;
}

export const Drawer = memo(function Drawer({
    children,
    isVisible = false,
    header,
    onClose,
}: DrawerProps) {
    const backdropVariants = {
        show: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const modalVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        closed: {
            x: 484,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.defaultPrevented) {
                return;
            }
            if (event.key === 'Escape' || (event.key == 'Esc' && isVisible)) {
                onClose();
            }
        };

        isVisible
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');

        document.addEventListener('keydown', onKeyDown, false);

        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [isVisible, onClose]);

    const modal = (
        <React.Fragment>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <StyledMotionBackdrop
                            key="child"
                            initial={'hidden'}
                            animate={isVisible ? 'show' : 'hidden'}
                            variants={backdropVariants}
                            onClick={onClose}
                            exit={'hidden'}
                        />
                        <FocusLock>
                            <StyledMotionWrapper
                                key="child"
                                initial={'closed'}
                                animate={isVisible ? 'open' : 'closed'}
                                exit={'closed'}
                                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                                variants={modalVariants}
                                aria-modal
                                aria-label={header}
                                tabIndex={-1}
                                role="dialog"
                            >
                                <StyledModal>
                                    <Box mb={6} display="flex" justifyContent="space-between">
                                        <H2>{header}</H2>
                                        <IconButton
                                            icon="close"
                                            variant="filled"
                                            labelText="close"
                                            onClick={onClose}
                                        />
                                    </Box>
                                    <StyledModalContent>{children}</StyledModalContent>
                                </StyledModal>
                            </StyledMotionWrapper>
                        </FocusLock>
                    </>
                )}
            </AnimatePresence>
        </React.Fragment>
    );

    return ReactDOM.createPortal(modal, document.body);
});

const StyledMotionBackdrop = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 999;
`;
const StyledMotionWrapper = styled(motion.div)`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    outline: 0;
    right: 0;
    top: 0;
    left: auto;
    background: #fff;

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        width: 484px;
    }
`;
const StyledModal = styled.div`
    z-index: 100;
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${tokens.kdsSpacing7};
`;

const StyledModalContent = styled.div``;
