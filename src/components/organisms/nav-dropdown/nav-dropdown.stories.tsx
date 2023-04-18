/* eslint-disable react/destructuring-assignment */
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import styled from 'styled-components';

import { NavDropdown } from './nav-dropdown';

export default {
    title: 'Organisms/NavDropdown',
    component: NavDropdown,
};

export interface Employment {
    hasActiveService: boolean;
    id: string;
    isReferralProvider: boolean;
    organization: {
        id: string;
        name: string;
    };
    practitionerId: string;
}

const singleEmployment: Employment[] = [
    {
        id: '4df80cef-0a4c-4575-9fe4-2e3bff534771',
        organization: {
            id: '81ea2a7a-2cf8-43bd-94b2-966b883bdf6f',
            name: 'Nieuwe Huisartspraktijk',
        },
        practitionerId: '8c5bfbe0-b89b-4bd7-9601-16e7699bfe0e',
        hasActiveService: true,
        isReferralProvider: false,
    },
];

const multipleEmployments: Employment[] = [
    {
        id: '4df80cef-0a4c-4575-9fe4-2e3bff534771',
        organization: {
            id: '81ea2a7a-2cf8-43bd-94b2-966b883bdf6f',
            name: 'Nieuwe Huisartspraktijk',
        },
        practitionerId: '8c5bfbe0-b89b-4bd7-9601-16e7699bfe0e',
        hasActiveService: true,
        isReferralProvider: false,
    },
    {
        id: '90501a07-f8a9-4f32-b2b7-d54b14adb057',
        organization: {
            id: '0209df94-f828-4d3f-9179-762bcaa7733d',
            name: 'Nieuwe HuisartspraktijkTwee',
        },
        practitionerId: '8c5bfbe0-b89b-4bd7-9601-16e7699bfe0e',
        hasActiveService: true,
        isReferralProvider: false,
    },
];

function EmploymentItems({
    employment,
    isSelected,
}: {
    employment: Employment;
    isSelected: boolean;
}) {
    return (
        <>
            <NavDropdown.Title>{employment.organization.name}</NavDropdown.Title>
            {isSelected && (
                <>
                    <NavDropdown.Item style={{ marginTop: '8px' }} icon="organisation">
                        Organisatie
                    </NavDropdown.Item>
                    <NavDropdown.Item icon="settings">Persoonlijke instellingen</NavDropdown.Item>
                </>
            )}
        </>
    );
}

const NavDropdownExample = (employments: Employment[]) => {
    const fullName = 'P. Vermeulen';
    const organization = 'Nieuwe Huisartspraktijk';
    const initials = 'PV';
    const selectedEmploymentId = '4df80cef-0a4c-4575-9fe4-2e3bff534771';
    const [id, setId] = useState(selectedEmploymentId);
    const [language, setLanguage] = useState('nl');

    return (
        <Wrapper>
            <Nav>
                <NavBar>
                    <NavDropdown
                        fullName={fullName}
                        organization={organization}
                        initials={initials}
                    >
                        {employments.length === 1 &&
                            employments.map((employment, key) => {
                                const isSelected = id === employment.id;
                                return (
                                    employment.hasActiveService && (
                                        <EmploymentItems
                                            key={key}
                                            employment={employment}
                                            isSelected={isSelected}
                                        />
                                    )
                                );
                            })}

                        {employments.length > 1 &&
                            employments.map((employment, key) => {
                                const isSelected = id === employment.id;
                                return (
                                    employment.hasActiveService && (
                                        <NavDropdown.Switcher
                                            key={key}
                                            isSelected={isSelected}
                                            onClick={() => setId(employment.id)}
                                        >
                                            <EmploymentItems
                                                employment={employment}
                                                isSelected={isSelected}
                                            />
                                        </NavDropdown.Switcher>
                                    )
                                );
                            })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item icon="practitioner">Profiel</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => action('Logout')} icon="logout">
                            Uitloggen
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            className={language === 'nl' ? 'active' : ''}
                            onClick={() => setLanguage('nl')}
                            toggle={false}
                        >
                            Nederlands
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className={language === 'en' ? 'active' : ''}
                            onClick={() => setLanguage('en')}
                            toggle={false}
                        >
                            English
                        </NavDropdown.Item>
                    </NavDropdown>
                </NavBar>
            </Nav>
        </Wrapper>
    );
};

export const NavDropdownExampleSingle = () => {
    return NavDropdownExample(singleEmployment);
};

NavDropdownExampleSingle.storyName = 'Single employment';

export const NavDropdownExampleMultiple = () => {
    return NavDropdownExample(multipleEmployments);
};

NavDropdownExampleMultiple.storyName = 'Multiple employments';

const Wrapper = styled.div`
    background-color: #fbfaf9;
    height: 550px;
`;

const Nav = styled.nav`
    padding-left: 18px;
    padding-right: 18px;
    box-shadow: 0 1px 0 0 #ecece6;
    background-color: white;
`;

const NavBar = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
