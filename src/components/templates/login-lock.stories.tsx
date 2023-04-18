import { Button } from 'components/atoms/button';
import { Spacer } from 'components/layouts/spacer';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';

export default {
    title: 'Templates/AnimatedLock',
};

export interface AnimationProps {
    children?: React.ReactNode;
    color: 'danger' | 'success' | 'default';
}

export const Lock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [appearance, setAppearance] = useState<'danger' | 'success' | 'default'>('default');

    const clickhandler = (type: 'danger' | 'success' | 'default') => {
        setIsVisible(true);
        setAppearance(type);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setAppearance('default');
        }, 1500);
        return () => clearTimeout(timer);
    }, [isVisible, appearance]);

    function Circle({ color }: AnimationProps) {
        return (
            <StyledCircle viewBox="0 0 132 132" xmlns="http://www.w3.org/2000/svg" color={color}>
                <circle cx="102" cy="81" r="66" transform="translate(-36 -15)" fillRule="nonzero" />
            </StyledCircle>
        );
    }

    function LockWrapper({ color = 'default', children }: AnimationProps) {
        return <StyledLockWrapper color={color}>{children}</StyledLockWrapper>;
    }

    function Handle({ color = 'default' }: AnimationProps) {
        return (
            <StyledHandle width="35" height="49" xmlns="http://www.w3.org/2000/svg" color={color}>
                <path
                    d="M17.91 1.004c9.004.157 16.198 7.498 16.212 16.464l-.002.321-4-.07c.12-6.902-5.377-12.596-12.28-12.716-6.8-.119-12.425 5.215-12.707 11.972l-.009.308L4.88 31.28c-.119 6.8 5.214 12.425 11.972 12.707l.308.009-.07 4C8.086 47.838.892 40.497.878 31.531l.002-.321.245-13.998C1.284 8.102 8.799.845 17.91 1.003z"
                    fillRule="nonzero"
                />
            </StyledHandle>
        );
    }

    function LockBody({ color = 'default' }: AnimationProps) {
        return (
            <StyledLockBody width="57" height="47" xmlns="http://www.w3.org/2000/svg" color={color}>
                <g fillRule="nonzero" fill="none">
                    <rect width="57" height="47" rx="6" />
                    <rect fill="#FFF" x="50" y="7" width="2" height="13" rx="1" />
                    <rect fill="#FFF" x="50" y="22" width="2" height="6" rx="1" />
                </g>
            </StyledLockBody>
        );
    }

    function LockHole({ color = 'default' }: AnimationProps) {
        return (
            <StyledLockHole width="14" height="23" xmlns="http://www.w3.org/2000/svg" color={color}>
                <g fillRule="nonzero">
                    <ellipse cx="7" cy="7.263" rx="7" ry="7.263" />
                    <rect x="4.667" y="12.105" width="4.667" height="10.895" rx="2.333" />
                </g>
            </StyledLockHole>
        );
    }

    return (
        <>
            <Spacer direction="horizontal">
                <Button
                    variant="ghost"
                    isDisabled={appearance !== 'default'}
                    onClick={() => clickhandler('danger')}
                >
                    Demo danger state
                </Button>
                <p style={{ lineHeight: '40px' }}>or</p>
                <Button
                    isDisabled={appearance !== 'default'}
                    onClick={() => clickhandler('success')}
                    variant="ghost"
                >
                    Demo success state
                </Button>
            </Spacer>

            <StyledLock>
                <Circle color={appearance} />
                <LockWrapper color={appearance}>
                    <Handle color={appearance} />
                    <LockBody color={appearance} />
                    <LockHole color={appearance} />
                </LockWrapper>
                <CSSTransition
                    in={isVisible}
                    timeout={1000}
                    classNames={appearance}
                    exit={false}
                    unmountOnExit
                    mountOnEnter={true}
                >
                    <StyledBackgroundCircle />
                </CSSTransition>
            </StyledLock>
        </>
    );
};

Lock.storyName = 'Animated Lock';

const StyledLock = styled.div`
    position: relative;
    width: 132px;
    height: 132px;
    margin: 5rem;
`;

const StyledBackgroundCircle = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    z-index: 0;

    &.danger-enter {
        opacity: 0;
        background: rgb(186, 14, 43);
    }
    &.danger-enter-active {
        animation-iteration-count: 1;
        animation-name: zoomIn;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.41, -0.54, 0.02, 1.57);
    }

    &.success-enter {
        opacity: 0;
        background: #6ff8b5;
    }
    &.success-enter-active {
        animation-iteration-count: 1;
        animation-name: zoomIn;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.41, -0.54, 0.02, 1.57);
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }

        50% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(3);
        }
        75% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(0);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;

const StyledCircle = styled.svg<AnimationProps>`
    position: absolute;
    top: 0;
    left: 0;

    circle {
        animation-iteration-count: 1;
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }
    ${(props) =>
        props.color === 'default' &&
        css`
            circle {
                fill: rgba(250, 249, 248, 1);
            }
        `};
    ${(props) =>
        props.color === 'danger' &&
        css`
            circle {
                animation-name: circleFillRed;
            }
        `};

    ${(props) =>
        props.color === 'success' &&
        css`
            circle {
                animation-name: circleFillGreen;
            }
        `};

    @keyframes circleFillRed {
        0% {
            fill: rgba(250, 249, 248, 1);
        }

        100% {
            fill: rgba(249, 37, 73, 0.2);
        }
    }
    @keyframes circleFillGreen {
        0% {
            fill: rgba(250, 249, 248, 1);
        }

        100% {
            fill: rgba(215, 253, 234, 1);
        }
    }
`;

const StyledLockWrapper = styled.div<AnimationProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${(props) =>
        props.color === 'danger' &&
        css`
            animation-iteration-count: 1;
            animation-name: swing;
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-delay: 0.5s;
        `};

    @keyframes swing {
        20% {
            transform: rotate3d(0, 0, 1, 15deg);
        }

        40% {
            transform: rotate3d(0, 0, 1, -10deg);
        }

        60% {
            transform: rotate3d(0, 0, 1, 5deg);
        }

        80% {
            transform: rotate3d(0, 0, 1, -5deg);
        }

        to {
            transform: rotate3d(0, 0, 1, 0deg);
        }
    }
`;

const StyledHandle = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    overflow: visible;

    path {
        animation-iteration-count: 1;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    ${(props) =>
        props.color === 'default' &&
        css`
            path {
                fill: #a69a91;
            }
        `};

    ${(props) =>
        props.color === 'danger' &&
        css`
            path {
                animation-name: handleFill;
                animation-duration: 0.25s;
                animation-delay: 0.25s;
            }
        `};

    ${(props) =>
        props.color === 'success' &&
        css`
            path {
                animation-name: handleTilt;
                animation-duration: 0.5s;
                animation-delay: 0.35s;
                transform-origin: center center;
            }
        `};

    @keyframes handleFill {
        0% {
            fill: #a69a91;
        }

        100% {
            fill: #ba0e2b;
        }
    }

    @keyframes handleTilt {
        0% {
            fill: #a69a91;
            transform: translateY(0) rotate(0);
        }
        50% {
            transform: translateY(-8px) rotate(0);
        }

        100% {
            fill: #00d06a;
            transform: translateY(-8px) rotate(-10deg);
        }
    }
`;

const StyledLockBody = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);

    rect {
        animation-iteration-count: 1;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-duration: 0.25s;
        animation-delay: 0.25s;
    }
    ${(props) =>
        props.color === 'default' &&
        css`
            rect:first-child {
                fill: #dbd5d0;
            }
        `};

    ${(props) =>
        props.color === 'danger' &&
        css`
            rect:first-child {
                animation-name: lockBodyFillRed;
            }
        `};

    ${(props) =>
        props.color === 'success' &&
        css`
            rect:first-child {
                animation-name: lockBodyFillGreen;
            }
        `};

    @keyframes lockBodyFillRed {
        0% {
            fill: #dbd5d0;
        }

        100% {
            fill: #f92549;
        }
    }

    @keyframes lockBodyFillGreen {
        0% {
            fill: #dbd5d0;
        }

        100% {
            fill: #23f28d;
        }
    }
`;

const StyledLockHole = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -19%);

    g {
        animation-iteration-count: 1;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-delay: 0.25s;
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    ${(props) =>
        props.color === 'default' &&
        css`
            g {
                fill: #a69a91;
            }
        `};

    ${(props) =>
        props.color === 'danger' &&
        css`
            g {
                animation-name: lockHoleFillRed;
            }
        `};

    ${(props) =>
        props.color === 'success' &&
        css`
            g {
                animation-name: lockHoleFillGreen;
            }
        `};

    @keyframes lockHoleFillRed {
        0% {
            fill: #a69a91;
        }

        100% {
            fill: #ba0e2b;
        }
    }

    @keyframes lockHoleFillGreen {
        0% {
            fill: #a69a91;
        }

        100% {
            fill: #01a052;
        }
    }
`;
