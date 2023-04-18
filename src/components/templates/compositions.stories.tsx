import { Avatar } from 'components/atoms/avatar';
import { Badge } from 'components/atoms/badge';
import { Link } from 'components/atoms/link';
import { Switch } from 'components/atoms/switch';
import { H3, H4, P1 } from 'components/atoms/text';
import { Spacer } from 'components/layouts/spacer';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useViewportWidth } from '../../hooks/use-viewport-width';
import * as tokens from '../../tokens/tokens';
import { Card } from '../atoms/card';
import { MediaObject } from '../molecules/media-object';

export default {
    title: 'Templates/Compositions',
};

export const ExampleCompositions = () => {
    const { width } = useViewportWidth();
    return (
        <StyledCard>
            <MediaObject
                align="center"
                mediaItem={
                    <div
                        style={{ width: '54px', height: '54px', backgroundColor: '#ddd' }}
                        title="Place your icon or image here"
                    />
                }
                mediaSpacing={width > 768 ? 'large' : 'medium'}
                header="Tip"
                subHeader="Maak foto’s als je het verzekeringsoverzicht per post hebt ontvangen"
            />
        </StyledCard>
    );
};

ExampleCompositions.storyName = 'Example compositions';

const StyledCard = styled(Card)`
    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const StackedMediaObjects = () => {
    const [state, setState] = useState({
        switch1: false,
        switch2: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Card>
            <MediaObject
                align="start"
                mediaItem={<Avatar size="large" />}
                mediaSpacing="large"
                header={
                    <Spacer direction="horizontal" spacing="small">
                        <H3>Verificatieapp</H3>
                        <Badge text="Badge" size="small" color="lime" />
                    </Spacer>
                }
                action={
                    <Switch
                        name="switch1"
                        checked={state.switch1}
                        ariaLabel="checkbox"
                        onChange={handleChange}
                        leftLabel="Aan"
                        rightLabel="Uit"
                    />
                }
            >
                <Spacer direction="vertical" spacing="medium" lastChildHasNoSpacing>
                    <P1 color={tokens.kdsColorNeutral600}>
                        Gebruik een app op je smartphone om verificatiecodes te genereren
                    </P1>
                    <Link to="#" onClick={(e) => e.preventDefault()}>
                        Verificatieapp instellen
                    </Link>
                </Spacer>
            </MediaObject>
            <MediaObject
                align="start"
                mediaItem={<Avatar size="large" />}
                mediaSpacing="large"
                header="Sms"
                action={
                    <Switch
                        name="switch2"
                        checked={state.switch2}
                        ariaLabel="checkbox"
                        onChange={handleChange}
                        leftLabel="Aan"
                        rightLabel="Uit"
                    />
                }
            >
                <Spacer direction="vertical" spacing="medium" lastChildHasNoSpacing>
                    <P1 color={tokens.kdsColorNeutral600}>
                        Ontvang een verificatiecode via een sms-bericht.
                    </P1>
                    <Link to="#" onClick={(e) => e.preventDefault()}>
                        Sms instellen
                    </Link>
                </Spacer>
            </MediaObject>
        </Card>
    );
};

StackedMediaObjects.storyName = 'StackedMediaObjects';

export const EmptyStateCarePath = () => {
    return (
        <Card backgroundColor="transparent" borderColor="#a69a91" boxShadow="none">
            <H4 className="text-center">Er zijn geen openstaande taken voor deze patiënt</H4>
        </Card>
    );
};

EmptyStateCarePath.storyName = 'Example empty state block carepath';
