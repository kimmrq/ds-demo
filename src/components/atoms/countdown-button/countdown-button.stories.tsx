import React, { useEffect, useState } from 'react';

import { ButtonRow } from '../../molecules/button-row';
import { CountdownButton } from './';

export default {
    title: 'Atoms/CountdownButton',
    component: CountdownButton,
    // includeStories: [],
};

const initialCounterValueInSeconds = 10;

export const ExampleHolterDashboard = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(initialCounterValueInSeconds);
    const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

    const handleClick = (seconds: number) => {
        if (!seconds) return;
        setIsLoading(true);
        setRemainingSeconds(seconds * 1000);
    };

    useEffect(() => {
        if (!seconds) return;
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
            if (seconds === 1) {
                setIsLoading(false);
                setSeconds(initialCounterValueInSeconds);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, isLoading]);

    return (
        <ButtonRow>
            <CountdownButton
                color="magenta"
                isLoading={isLoading}
                onClick={() => handleClick(seconds)}
                duration={remainingSeconds}
                disabled={isLoading}
            >{`Holter uitlezen ${seconds ? seconds : ''}`}</CountdownButton>
        </ButtonRow>
    );
};

ExampleHolterDashboard.storyName = 'ExampleHolterDashboard';
