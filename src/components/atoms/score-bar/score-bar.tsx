import React from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

type ColorOption = 'green' | 'yellow' | 'light-orange' | 'dark-orange' | 'red';

export interface ScoreBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * By default the colors are devided equally. Or define a custom color stop position between two colors. A position is expressed with a percentage.
     * For example when using colors=["green","orange-light","red"] use colorStops=["20","60"]
     */
    colorStops?: number[];
    /**
     * The colors to display, minimum of 1, maximum of 5
     */
    colors: ColorOption[];
    /**
     * Hides the left and right min and max value labels
     */
    hideLabels?: boolean;
    /**
     * The maximum value of the scale
     */
    maxValue: number;
    /**
     * The minimum value of the scale
     */
    minValue: number;
    /**
     * The value of the numeric indicator
     */
    value: number;
    /**
     * The color of the numeric indicator
     */
    valueColor?: ColorOption;
    /**
     * Use gradient
     */
    withGradient?: boolean;
}

function getColorValue(color: ColorOption) {
    if (color === 'green') {
        return '#00d06a';
    }
    if (color === 'yellow') {
        return '#ffff33';
    }
    if (color === 'light-orange') {
        return '#f7b500';
    }
    if (color === 'dark-orange') {
        return '#fa6400';
    }
    if (color === 'red') {
        return '#f92549';
    }
    return;
}

export function ScoreBar({
    colors,
    colorStops,
    minValue,
    maxValue,
    value,
    valueColor,
    hideLabels = false,
    withGradient,
    ...props
}: ScoreBarProps) {
    const percentage = ((value - minValue) * 100) / (maxValue - minValue);
    return (
        <StyledScoreBar {...props}>
            {!hideLabels && <StyledLeftLabel>{minValue}</StyledLeftLabel>}
            <StyledBar colors={colors} colorStops={colorStops} withGradient={withGradient}>
                {colors.length === 1 && (
                    <StyledSingleColorScore colors={colors} style={{ width: percentage + '%' }} />
                )}
                <StyledScoreBadge
                    colors={colors}
                    valueColor={valueColor}
                    style={{ left: percentage + '%' }}
                >
                    {value}
                </StyledScoreBadge>
            </StyledBar>
            {!hideLabels && <StyledRightLabel>{maxValue}</StyledRightLabel>}
        </StyledScoreBar>
    );
}

const StyledScoreBar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const StyledLeftLabel = styled.div`
    flex: 0 0 auto;
    align-self: flex-start;
    color: ${tokens.kdsColorNeutral400};
    min-width: 24px;
    margin-right: 8px;
    text-align: right;
    font-size: 12px;
`;

const StyledRightLabel = styled.div`
    flex: 0 0 auto;
    align-self: flex-end;
    color: ${tokens.kdsColorNeutral400};
    min-width: 24px;
    margin-left: 8px;
    text-align: left;
    font-size: 12px;
`;

const StyledBar = styled.div<Pick<ScoreBarProps, 'colors' | 'colorStops' | 'withGradient'>>`
    position: relative;
    width: 100%;
    height: 5px;
    border-radius: 2px;

    ${(props) =>
        props.colors.length === 1 &&
        css`
            background: #ecece6;
        `}

    ${(props) =>
        props.colors.length === 2 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% 50%,
                ${getColorValue(props.colors[1])} 50% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 2 &&
        props.colorStops &&
        props.colorStops.length === 1 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% ${props.colorStops[0]}%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 3 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% 33%,
                ${getColorValue(props.colors[1])} 33% 66%,
                ${getColorValue(props.colors[2])} 66% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 3 &&
        props.colorStops &&
        props.colorStops.length === 2 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% ${props.colorStops[0]}%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}% ${props.colorStops[1]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 4 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% 25%,
                ${getColorValue(props.colors[1])} 25% 50%,
                ${getColorValue(props.colors[2])} 50% 75%,
                ${getColorValue(props.colors[3])} 75% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 4 &&
        props.colorStops &&
        props.colorStops.length === 3 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% ${props.colorStops[0]}%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}% ${props.colorStops[1]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}% ${props.colorStops[2]}%,
                ${getColorValue(props.colors[3])} ${props.colorStops[2]}% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 5 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% 20%,
                ${getColorValue(props.colors[1])} 20% 40%,
                ${getColorValue(props.colors[2])} 40% 60%,
                ${getColorValue(props.colors[3])} 60% 80%,
                ${getColorValue(props.colors[4])} 80% 100%
            );
        `}
    ${(props) =>
        props.colors.length === 5 &&
        props.colorStops &&
        props.colorStops.length === 4 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0% ${props.colorStops[0]}%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}% ${props.colorStops[1]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}% ${props.colorStops[2]}%,
                ${getColorValue(props.colors[3])} ${props.colorStops[2]}% ${props.colorStops[3]}%,
                ${getColorValue(props.colors[4])} ${props.colorStops[3]}% 100%
            );
        `}

    ${(props) =>
        props.withGradient &&
        props.colors.length === 2 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} 50%
            );
        `}
    ${(props) =>
        props.withGradient &&
        props.colors.length === 2 &&
        props.colorStops &&
        props.colorStops.length === 1 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}%
            );
        `}
      ${(props) =>
        props.withGradient &&
        props.colors.length === 3 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} 33%,
                ${getColorValue(props.colors[2])} 66%
            );
        `}
      ${(props) =>
        props.withGradient &&
        props.colors.length === 3 &&
        props.colorStops &&
        props.colorStops.length === 2 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}%
            );
        `}
    ${(props) =>
        props.withGradient &&
        props.colors.length === 4 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} 25%,
                ${getColorValue(props.colors[2])} 50%,
                ${getColorValue(props.colors[3])} 75%
            );
        `}
    ${(props) =>
        props.withGradient &&
        props.colors.length === 4 &&
        props.colorStops &&
        props.colorStops.length === 3 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}%,
                ${getColorValue(props.colors[3])} ${props.colorStops[2]}%
            );
        `}
    ${(props) =>
        props.withGradient &&
        props.colors.length === 5 &&
        props.colorStops === undefined &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} 20%,
                ${getColorValue(props.colors[2])} 40%,
                ${getColorValue(props.colors[3])} 60%,
                ${getColorValue(props.colors[4])} 80%
            );
        `}
    ${(props) =>
        props.withGradient &&
        props.colors.length === 5 &&
        props.colorStops &&
        props.colorStops.length === 4 &&
        css`
            background: linear-gradient(
                to right,
                ${getColorValue(props.colors[0])} 0%,
                ${getColorValue(props.colors[1])} ${props.colorStops[0]}%,
                ${getColorValue(props.colors[2])} ${props.colorStops[1]}%,
                ${getColorValue(props.colors[3])} ${props.colorStops[2]}%,
                ${getColorValue(props.colors[4])} ${props.colorStops[3]}%
            );
        `}
`;

const StyledSingleColorScore = styled.div<Pick<ScoreBarProps, 'colors'>>`
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    max-width: 100%;

    ${(props) =>
        props.colors &&
        css`
            background-color: ${getColorValue(props.colors[0])};
        `}
`;

const StyledScoreBadge = styled.div<Pick<ScoreBarProps, 'colors' | 'valueColor'>>`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 21px;
    height: 21px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    padding: 0 4px;
    background-color: ${(props) => getColorValue(props.colors[0])};

    ${(props) =>
        props.valueColor &&
        css`
            background-color: ${getColorValue(props.valueColor)};
        `}

    ${(props) =>
        props.valueColor === 'yellow' &&
        css`
            color: ${tokens.kdsColorNeutral500};
        `};
`;
