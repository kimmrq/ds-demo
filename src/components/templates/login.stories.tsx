import { Button } from 'components/atoms/button';
import { Card } from 'components/atoms/card';
import { Link } from 'components/atoms/link';
import { PasswordInput } from 'components/atoms/password-input';
import { Text } from 'components/atoms/text';
import { TextInput } from 'components/atoms/text-input';
import { UserSelect } from 'components/atoms/user-select';
import { FormLayout } from 'components/layouts/form-layout';
import { InputLayout } from 'components/layouts/input-layout';
import { Spacer } from 'components/layouts/spacer';
import { ButtonRow } from 'components/molecules/button-row';
import { Form } from 'components/molecules/form';
import { FormGroup } from 'components/molecules/form-group';
import { FormSection } from 'components/molecules/form-section';
import { useViewportWidth } from 'hooks/use-viewport-width';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

export default {
    title: 'Templates/LoginExamples',
    parameters: {
        layout: 'fullscreen',
    },
};

export const LoginExample = () => {
    const { width } = useViewportWidth();
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    return (
        <StyledLoginContainer>
            <StyledForm spacing="xxlarge">
                <FormSection isBorderless>
                    <StyledLogo>
                        <img src="/logo-ksyos.png" alt="logo" />
                    </StyledLogo>
                    <Text as="h3" fontSize={700} fontWeight="bold" style={{ textAlign: 'center' }}>
                        Inloggen
                    </Text>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '44px' }}>
                    <FormGroup label="Gebruikersnaam" layout="vertical">
                        <TextInput
                            type="text"
                            name="username"
                            value={state.username}
                            placeholder="Gebruikersnaam invoeren"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup label="Wachtwoord" layout="vertical">
                        <PasswordInput
                            name="password"
                            value={state.password}
                            placeholder="Type your password here"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '44px' }}>
                    <ButtonRow>
                        <Button width="full" size="large" color="magenta">
                            Verder
                        </Button>
                    </ButtonRow>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '24px' }}>
                    <StyledFormLayout justify="center" align="center" layout="condensed">
                        <InputLayout>
                            <StyledLink
                                to="#"
                                color="lightGrey"
                                fontWeight="normal"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Wachtwoord vergeten
                            </StyledLink>
                        </InputLayout>
                        <InputLayout style={{ display: width > 576 ? 'inherit' : 'none' }}>
                            <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                                .
                            </Text>
                        </InputLayout>
                        <InputLayout>
                            <Link
                                to="#"
                                color="lightGrey"
                                fontWeight="normal"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Gebruikersnaam vergeten
                            </Link>
                        </InputLayout>
                    </StyledFormLayout>
                </FormSection>
            </StyledForm>
            <Card
                spacing="medium"
                boxShadow="none"
                backgroundColor="transparent"
                style={{ textAlign: 'center' }}
            >
                <Spacer direction="vertical" spacing="medium">
                    <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                        Heb je nog geen account?
                        <StyledLink
                            to="#"
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            fontWeight="medium"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Account activeren
                        </StyledLink>
                    </Text>
                    <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                        Hulp nodig bij inloggen? Bel
                        <StyledLink
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            to="tel:020-600 00 600"
                            fontWeight="medium"
                        >
                            020-600 00 600
                        </StyledLink>{' '}
                        of mail
                        <StyledLink
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            to="mailto:info@ksyos.nl"
                            fontWeight="medium"
                        >
                            info@ksyos.nl
                        </StyledLink>
                    </Text>
                </Spacer>
            </Card>
        </StyledLoginContainer>
    );
};

LoginExample.storyName = 'Default';

export const LoginExampleWithUserSelect = () => {
    const storedUsers = [
        {
            id: 1,
            name: 'F. Boelsma',
            initials: 'FB',
            username: 'f.boelsma@ksyos.nl',
        },
        {
            id: 2,
            name: 'A.S. van der Assen',
            initials: 'AA',
            username: 'a.vanderassen@ksyos.nl',
        },
        {
            id: 3,
            name: 'J.H. van de Velden',
            initials: 'JV',
            username: 'j.vandevelden@ksyos.nl',
        },
    ];
    const { width } = useViewportWidth();
    const [state, setState] = useState({
        username: '',
        password: '',
    });
    const [hasStoredUsers, setHasStoredUsers] = useState(storedUsers.length !== 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const handleUserChange = (username: string) => {
        setState({ ...state, username: username });
    };

    const handleDismiss = () => {
        setHasStoredUsers(false);
        setState({ ...state, username: '' });
    };

    return (
        <StyledLoginContainer>
            <StyledForm spacing="xxlarge">
                <FormSection isBorderless>
                    <StyledLogo>
                        <img src="/logo-ksyos.png" alt="logo" />
                    </StyledLogo>
                    <Text as="h3" fontSize={700} fontWeight="bold" style={{ textAlign: 'center' }}>
                        Inloggen
                    </Text>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '44px' }}>
                    {hasStoredUsers && (
                        <UserSelect
                            style={{ marginBottom: '16px' }}
                            users={storedUsers}
                            onChange={handleUserChange}
                            onDismiss={handleDismiss}
                            defaultValue={storedUsers[0]}
                        />
                    )}
                    <FormGroup
                        style={{ display: hasStoredUsers ? 'none' : 'block' }}
                        label="Gebruikersnaam"
                        layout="vertical"
                    >
                        <TextInput
                            type="text"
                            name="username"
                            value={state.username}
                            placeholder="Gebruikersnaam invoeren"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup label="Wachtwoord" layout="vertical">
                        <PasswordInput
                            name="password"
                            value={state.password}
                            placeholder="Type your password here"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '44px' }}>
                    <ButtonRow>
                        <Button width="full" size="large" color="magenta">
                            Verder
                        </Button>
                    </ButtonRow>
                </FormSection>
                <FormSection isBorderless style={{ marginTop: width > 576 ? '56px' : '24px' }}>
                    <StyledFormLayout justify="center" align="center" layout="condensed">
                        <InputLayout>
                            <StyledLink
                                to="#"
                                color="lightGrey"
                                fontWeight="normal"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Wachtwoord vergeten
                            </StyledLink>
                        </InputLayout>
                        <InputLayout style={{ display: width > 576 ? 'inherit' : 'none' }}>
                            <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                                .
                            </Text>
                        </InputLayout>
                        <InputLayout>
                            <Link
                                to="#"
                                color="lightGrey"
                                fontWeight="normal"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Gebruikersnaam vergeten
                            </Link>
                        </InputLayout>
                    </StyledFormLayout>
                </FormSection>
            </StyledForm>
            <Card
                spacing="medium"
                boxShadow="none"
                backgroundColor="transparent"
                style={{ textAlign: 'center' }}
            >
                <Spacer direction="vertical" spacing="medium">
                    <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                        Heb je nog geen account?
                        <StyledLink
                            to="#"
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            fontWeight="medium"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Account activeren
                        </StyledLink>
                    </Text>
                    <Text fontSize={200} color={tokens.kdsColorNeutral500}>
                        Hulp nodig bij inloggen? Bel
                        <StyledLink
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            to="tel:020-600 00 600"
                            fontWeight="medium"
                        >
                            020-600 00 600
                        </StyledLink>{' '}
                        of mail
                        <StyledLink
                            color="lightGrey"
                            style={{ paddingLeft: '4px' }}
                            to="mailto:info@ksyos.nl"
                            fontWeight="medium"
                        >
                            info@ksyos.nl
                        </StyledLink>
                    </Text>
                </Spacer>
            </Card>
        </StyledLoginContainer>
    );
};

LoginExampleWithUserSelect.storyName = 'UserSelect';

const StyledLoginContainer = styled.div`
    background-color: ${tokens.kdsColorNeutral50};
    padding: 1rem;
    @media screen and (min-width: 576px) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        flex-direction: column;
    }
`;

const StyledForm = styled(Form)`
    width: 100%;

    @media screen and (min-width: 576px) {
        width: 544px;
    }
`;

const StyledFormLayout = styled(FormLayout)`
    @media screen and (max-width: 575px) {
        display: block;
        text-align: center;
    }
`;

const StyledLogo = styled.div`
    width: 120px;
    height: 37px;
    margin: 0 auto 16px auto;

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

const StyledLink = styled(Link)`
    @media screen and (max-width: 575px) {
        margin-bottom: 12px;
    }
`;
