import { Button } from 'components/atoms/button';
import { H1 } from 'components/atoms/text';
import { FormLayout } from 'components/layouts/form-layout';
import { Spacer } from 'components/layouts/spacer';
import { AvatarBlock } from 'components/molecules/avatar-block';
import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export default {
    title: 'Templates/PrototypeCarePathSettings',
};

export const PrototypePage = () => {
    return (
        <StyledPageWrap>
            <StyledPageInner>
                <Container>
                    <Spacer spacing="large">
                        <H1>Zorgpad toevoegen</H1>
                        <AvatarBlock
                            size="small"
                            name="P. Vermeulen"
                            organization="Huisartsenpraktijk Vermeulen"
                            direction="horizontal"
                            at="bij"
                        />
                    </Spacer>
                </Container>
            </StyledPageInner>
            <StyledFooter>
                <Container>
                    <FormLayout align="center" justify="space-between" style={{ height: '72px' }}>
                        <Button variant="outline" color="blue">
                            Annuleren
                        </Button>
                        <Button variant="solid" color="blue">
                            Volgende stap
                        </Button>
                    </FormLayout>
                </Container>
            </StyledFooter>
        </StyledPageWrap>
    );
};

const StyledPageWrap = styled.div`
    height: 100%;
    margin: 0;
`;

const StyledPageInner = styled.div`
    min-height: calc(100vh - 72px);
    background-color: #faf9f8;
    padding-top: 40px;
`;

const StyledFooter = styled.div`
    height: 72px;
    background-color: white;
`;

PrototypePage.storyName = 'Prototype Carepath settings';
