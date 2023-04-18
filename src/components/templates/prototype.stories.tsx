import React, { useReducer, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { FormSection } from '../../index';
import { Button } from '../atoms/button/button';
import { Text } from '../atoms/text/text';
import { TextInput } from '../atoms/text-input';
import { AvatarBlock } from '../molecules/avatar-block';
import { ButtonRow } from '../molecules/button-row';
import { FormGroup } from '../molecules/form-group';
import { FormHeader } from '../molecules/form-header';
import { FormToggle } from '../molecules/form-toggle';
import { ProfileBar } from '../organisms/profile-bar';
import { SideBar } from '../organisms/side-bar';
export default {
    title: 'Templates/Prototype',
    // includeStories: [], // or don't load this file at all
};

export const PrototypePage = () => {
    const [formType, setFormType] = useState<'edit' | 'read'>('read');

    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (formType === 'read') {
            setFormType('edit');
        } else {
            setFormType('read');
        }
    };

    return (
        <App>
            <StyledNav>
                <StyledLogo>
                    <img src="/logo-ksyos.png" alt="logo" />
                </StyledLogo>
            </StyledNav>
            <StyledProfileBar
                name="P. Vermeulen"
                organization="Huisartsenpraktijk Vermeulen"
                at="bij"
            />
            <StyledContainer>
                <Row>
                    <Col lg={3}>
                        <StyledSideBar
                            header={
                                <StyledAvatarBlock
                                    size="large"
                                    name="P. Vermeulen"
                                    organization="Huisartsenpraktijk Vermeulen"
                                    direction="vertical"
                                    at="bij"
                                />
                            }
                        />
                    </Col>
                    <Col lg={9} xl={8}>
                        <StyledSection>
                            <PageHeaderSection>
                                <StyledHeader>PageHeaderSection</StyledHeader>
                            </PageHeaderSection>

                            <FormToggle type={formType}>
                                <FormHeader
                                    title={formType === 'read' ? 'Read form' : 'Edit form'}
                                    icon={formType === 'read' ? 'edit-light' : undefined}
                                    onClick={(e) => handleClick(e)}
                                />
                                <RenderForm type={formType} onClick={(e) => handleClick(e)} />
                            </FormToggle>
                        </StyledSection>
                    </Col>
                </Row>
            </StyledContainer>
        </App>
    );
};

const RenderForm = (props: { onClick?: React.MouseEventHandler; type: 'read' | 'edit' }) => {
    const { type, onClick } = props;
    return type === 'edit' ? <EditForm onClick={onClick} /> : <ReadForm />;
};

const initialState = {
    active: '04-02-2016',
    agb: '04-02-2016',
    register: '04-02-2016',
};

interface State {
    [key: string]: string;
}
interface Action {
    field: string;
    value: string;
}

function reducer(state: State, action: Action) {
    return {
        ...state,
        [action.field]: action.value,
    };
}

const EditForm = (props: { onClick?: React.MouseEventHandler }) => {
    const { onClick } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (name: string, value: string) => {
        dispatch({ field: name, value: value });
    };

    const { active, agb, register } = state;

    return (
        <>
            <FormSection title="FormSection">
                <FormGroup label="Actief van">
                    <TextInput
                        name="active"
                        value={active}
                        onChange={(e) => onChange('active', e.target.value)}
                    />
                </FormGroup>
                <FormGroup label="AGB-code">
                    <TextInput
                        name="agb"
                        value={agb}
                        onChange={(e) => onChange('agb', e.target.value)}
                    />
                </FormGroup>
                <FormGroup label="Register KP">
                    <TextInput
                        name="register"
                        value={register}
                        onChange={(e) => onChange('register', e.target.value)}
                    />
                </FormGroup>
            </FormSection>
            <FormSection isBorderless>
                <ButtonRow justify="right">
                    <Button type="button" color="blue" variant="outline" onClick={onClick}>
                        Annuleren
                    </Button>
                    <Button type="button" variant="solid" color="blue">
                        Opslaan
                    </Button>
                </ButtonRow>
            </FormSection>
        </>
    );
};

const ReadForm = () => {
    return (
        <>
            <FormSection title="FormSection">
                <FormGroup label="Actief van" insetPadding>
                    <Text fontSize={300} as="p" fontWeight="medium">
                        Read variant example with a Text Component
                    </Text>
                </FormGroup>
                <FormGroup label="AGB-code" insetPadding>
                    <Text fontSize={300} as="p" fontWeight="medium">
                        Read variant example with a Text Component
                    </Text>
                </FormGroup>
                <FormGroup label="Register KP" insetPadding>
                    <Text fontSize={300} as="p" fontWeight="medium">
                        Read variant example with a Text Component
                    </Text>
                </FormGroup>
            </FormSection>
            <FormSection title="FormSection with a top border">
                <FormGroup label="Actief van">
                    <TextInput
                        value="Read variant example with a readOnly textinput"
                        onChange={() => null}
                        readOnly
                    />
                </FormGroup>
            </FormSection>
            <FormSection title="FormSection without a top border" isBorderless>
                <FormGroup label="Register KP">
                    <TextInput
                        value="Read variant example with a readOnly textinput"
                        onChange={() => null}
                        readOnly
                    />
                </FormGroup>
            </FormSection>
        </>
    );
};

PrototypePage.storyName = 'Prototype';

const App = styled.div`
    background: #faf9f8;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;

const StyledNav = styled.div`
    background: #fff;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
`;

const StyledLogo = styled.div`
    width: 105px;
    height: 32px;
    margin-left: 1rem;

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

const StyledSideBar = styled(SideBar)`
    display: none;
    @media (min-width: 992px) {
        display: block;
    }
`;
const StyledProfileBar = styled(ProfileBar)`
    @media (min-width: 992px) {
        display: none;
    }
`;

const StyledAvatarBlock = styled(AvatarBlock)``;

const StyledContainer = styled(Container)`
    max-width: 100%;

    @media (min-width: 1440px) {
        max-width: 100%;
    }
    @media (min-width: 1681px) {
        max-width: 1680px;
    }
`;

const PageHeaderSection = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 992px) {
        margin-top: 8rem;
    }
`;

const StyledHeader = styled.h2`
    color: rgb(49, 42, 37);
    font-weight: 400;
    font-size: 25px;
    font-weight: normal;
    height: 25px;
`;

const StyledSection = styled.div`
    @media (min-width: 992px) {
        padding-left: 40px;
    }
`;
