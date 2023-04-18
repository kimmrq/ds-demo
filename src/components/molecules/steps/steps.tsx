import React from 'react';
import styled from 'styled-components';

import { Step, StepProps } from './step';

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Set the active step (zero based index).
     * Set to -1 to disable all the steps.
     */
    activeStep?: number;
    /**
     * Two or more `<Steps.Step />` components.
     */
    children: React.ReactElement<StepProps>[];
}

export function Steps({ activeStep = 0, children, ...props }: StepsProps) {
    return (
        <StyledStepsContainer {...props}>
            {React.Children.map(children, (child: React.ReactElement<StepProps>, index: number) => {
                if (child.type === Step) {
                    let status: 'completed' | 'active' | 'disabled' | undefined;
                    if (activeStep === index) {
                        status = 'active';
                    } else if (activeStep > index) {
                        status = 'completed';
                    } else if (activeStep < index) {
                        status = 'disabled';
                    }

                    return React.cloneElement(child, {
                        status,
                    });
                }

                return child;
            })}
        </StyledStepsContainer>
    );
}

const StyledStepsContainer = styled.div`
    display: flex;
    width: 100%;
`;

Steps.Step = Step;
