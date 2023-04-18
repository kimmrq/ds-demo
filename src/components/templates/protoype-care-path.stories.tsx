import {
    CarePathIcon,
    Collapse,
    Form,
    FormGroup,
    FormSection,
    H1,
    ProfileBar,
    ScoreBar,
    Text,
} from 'components';
import React from 'react';
import styled from 'styled-components';

import { ProcessHeader } from '../molecules/process-header';

export default {
    title: 'Templates/PrototypeCarePath',
};

export const GGZExample = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <Wrapper>
            <ProfileBar
                name="P.R.F. (Petronella) van Schoonhoven - van der Zwart"
                organization=""
            />
            <TitleWrapper>
                <CarePathIcon icon="mentalHealth" size="39px" style={{ marginRight: '16px' }} />
                <H1>GGZ</H1>
            </TitleWrapper>
            <Form
                style={{
                    padding: '32px 24px',
                    marginBottom: '1px',
                }}
            >
                <FormSection>
                    <ProcessHeader
                        title="Aanvraag 4DKL+"
                        date="22 jul '20"
                        practitionerName="M. van der Assen"
                        processId="4368"
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <Collapse isOpen={isOpen}>
                        <FormGroup label="Verstuurd naar" insetPadding>
                            <Text fontSize={300} as="p" fontWeight="medium">
                                P.O.H. van der Geeh
                            </Text>
                        </FormGroup>
                        <FormGroup label="Nameting sturen" insetPadding>
                            <Text fontSize={300} as="p" fontWeight="medium">
                                Ja, na 18 weken (8 februari 2018)
                            </Text>
                        </FormGroup>
                    </Collapse>
                </FormSection>
            </Form>
            <Form style={{ padding: '32px 24px' }}>
                <FormSection>
                    <ProcessHeader
                        title="4DKL+"
                        date="22 aug '20"
                        practitionerName="M. van der Assen"
                        processId="4368"
                    />
                    <FormGroup label="Depressie" insetPadding>
                        <ScoreBar
                            value={3}
                            minValue={0}
                            maxValue={10}
                            colors={['light-orange']}
                            hideLabels
                            style={{ height: '100%' }}
                        />
                    </FormGroup>
                    <FormGroup label="Distress">
                        <ScoreBar
                            value={29}
                            minValue={21}
                            maxValue={32}
                            colors={['red']}
                            hideLabels
                            style={{ height: '100%' }}
                        />
                    </FormGroup>
                    <FormGroup label="Angst">
                        <ScoreBar
                            value={5}
                            minValue={4}
                            maxValue={9}
                            colors={['light-orange']}
                            hideLabels
                            style={{ height: '100%' }}
                        />
                    </FormGroup>
                    <FormGroup label="Somatisatie">
                        <ScoreBar
                            value={1}
                            minValue={0}
                            maxValue={10}
                            colors={['green']}
                            hideLabels
                            style={{ height: '100%' }}
                        />
                    </FormGroup>
                </FormSection>
            </Form>
        </Wrapper>
    );
};

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 0;
`;

const Wrapper = styled.div`
    background-color: #f4f4f2;
    min-height: 100vh;
    padding: 8px;
`;

GGZExample.parameters = {
    layout: 'fullscreen',
};
