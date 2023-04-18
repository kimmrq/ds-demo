import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import styled from 'styled-components';

import { NavBar } from '../organisms/nav-bar';
import { NavDropdown } from '../organisms/nav-dropdown';

export default {
    title: 'Templates/Header',
    component: NavBar,
    parameters: {
        layout: 'fullscreen',
    },
};

export const HeaderExample = () => {
    const fullName = 'P. Vermeulen';
    const organization = 'Nieuwe Huisartspraktijk';
    const selectedEmploymentId = '4df80cef-0a4c-4575-9fe4-2e3bff534771';
    const [id, setId] = useState(selectedEmploymentId);
    const [language, setLanguage] = useState('nl');
    const employments = [
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

    return (
        <Wrapper>
            <Header>
                <HeaderItem style={{ marginRight: '32px' }}>
                    <LogoLink href="#">
                        <Logo width="99px" height="30px" />
                    </LogoLink>
                </HeaderItem>
                <NavBar>
                    <NavBar.Link title="Home" icon="dashboard" className="active" href="#">
                        Home
                    </NavBar.Link>
                    <NavBar.Link icon="todo" href="#">
                        Taken
                    </NavBar.Link>
                    <NavBar.Link icon="patients" href="#">
                        Patiënten
                    </NavBar.Link>
                    <NavBar.Link icon="recorder" href="#">
                        Recorders
                    </NavBar.Link>
                    <NavBar.Link icon="external" href="#">
                        Naar labaanvraag
                    </NavBar.Link>
                    <NavBar.Menu title="Financiën" icon="finance">
                        <NavBar.Link href="#">Rapportage financieel</NavBar.Link>
                        <NavBar.Link href="#">Rapport uitbetalingen</NavBar.Link>
                        <NavBar.Link href="#">Rapport bekostiging</NavBar.Link>
                        <NavBar.Link href="#">Uitbetalingen</NavBar.Link>
                        <NavBar.Menu title="Test">
                            <NavBar.Link href="#">Test Uitbetalingen 1</NavBar.Link>
                            <NavBar.Link href="#">Test Uitbetalingen 2</NavBar.Link>
                        </NavBar.Menu>
                        <NavBar.Menu title="Test 3">
                            <NavBar.Link href="#">Test Uitbetalingen 4</NavBar.Link>
                            <NavBar.Link href="#">Test Uitbetalingen 5</NavBar.Link>
                        </NavBar.Menu>
                        <NavBar.Link href="#">Exporteren uitbetalingen</NavBar.Link>
                        <NavBar.Link href="#">Exporteren declaraties</NavBar.Link>
                        <NavBar.Link href="#">Exporteren facturaties</NavBar.Link>
                        <NavBar.Link href="#">Omzetplafond</NavBar.Link>
                        <NavBar.Link href="#">Bekostiging</NavBar.Link>
                    </NavBar.Menu>
                    <NavBar.Menu title="Logs" icon="records">
                        <NavBar.Link href="#">Berichten aan derden</NavBar.Link>
                        <NavBar.Link href="#">Patiënt toegangslog</NavBar.Link>
                        <NavBar.Link href="#">Audit records</NavBar.Link>
                        <NavBar.Link href="#">Desktop processen</NavBar.Link>
                        <NavBar.Link href="#">Binnenkomende berichten</NavBar.Link>
                        <NavBar.Link href="#">Derma app registraties</NavBar.Link>
                    </NavBar.Menu>
                </NavBar>
                <HeaderItem>
                    <EnvLabel>development omgeving</EnvLabel>
                </HeaderItem>
                <HeaderItem>
                    <NavDropdown fullName={fullName} organization={organization}>
                        {employments.map((employment, key) => {
                            const isSelected = id === employment.id;
                            return (
                                employment.hasActiveService && (
                                    <NavDropdown.Switcher
                                        key={key}
                                        isSelected={isSelected}
                                        onClick={() => setId(employment.id)}
                                    >
                                        <NavDropdown.Title>
                                            {employment.organization.name}
                                        </NavDropdown.Title>
                                        {isSelected && (
                                            <>
                                                <NavDropdown.Item
                                                    style={{ marginTop: '8px' }}
                                                    icon="organisation"
                                                >
                                                    Organisatie
                                                </NavDropdown.Item>
                                                <NavDropdown.Item icon="settings">
                                                    Persoonlijke instellingen
                                                </NavDropdown.Item>
                                            </>
                                        )}
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
                        >
                            Nederlands
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className={language === 'en' ? 'active' : ''}
                            onClick={() => setLanguage('en')}
                        >
                            English
                        </NavDropdown.Item>
                    </NavDropdown>
                </HeaderItem>
            </Header>
        </Wrapper>
    );
};

HeaderExample.storyName = 'Default';

const Wrapper = styled.div`
    background-color: #fbfaf9;
    height: 150vh;
`;

const Header = styled.header`
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    font-size: 14px;
    line-height: 1.5;
    background-color: white;
    box-shadow: 0 1px 0 0 #ecece6;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 0;
    padding-bottom: 0;
    transition: all 0.2s ease;
    position: fixed;
    width: 100%;
    z-index: 999;
`;

const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    align-self: stretch;
`;

const EnvLabel = styled.div`
    color: #ff9a1e;
    font-weight: 700;
    font-size: 0.75rem;
`;

const LogoLink = styled.a`
    text-decoration: none;
`;

export interface LogoProps {
    height: string;
    width: string;
}

const Logo = ({ width, height }: LogoProps) => {
    return (
        <svg
            id="Logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 209.8 63.8"
            width={width}
            height={height}
        >
            <path
                fill="#322a24"
                d="M65.7 30.5l13.8 19.9H68.3L57.2 34v16.3H48V-.1h9.2v28l11-14.5H79L65.7 30.5zm95.9-17.7c11.6 0 19.3 8.1 19.3 19 0 10.8-7.9 19.1-19.3 19.1-11.5 0-19.2-8.1-19.2-19-.1-10.9 8.1-19.1 19.2-19.1zm0 29.8c6.1 0 10-4.5 10-10.7s-4.1-10.8-10.1-10.8c-6.1 0-10 4.5-10 10.8.1 6.2 4.2 10.7 10.1 10.7zm34.2-15.9c1.7.5 3.2.8 5 1.3 5.9 1.8 8.8 4.7 8.8 11.4 0 7.5-6.2 11.4-13.4 11.4-10.2 0-13.4-6-13.2-12.4h8.8c0 2.6.9 5 4.5 5 2.4 0 4.3-1.2 4.3-3.3s-1.1-3.1-3.7-3.8c-2-.6-3.6-.9-5.6-1.7-5.1-1.9-7.6-5.3-7.6-10.9 0-6.2 5.2-10.8 12.6-10.8 7.8 0 12.4 3.9 12.5 11.6h-8.5c-.1-2.8-1.4-4.5-4.2-4.5-2.2 0-3.7 1.2-3.7 3.1.2 1.9 1.2 2.9 3.4 3.6z"
            />
            <path
                fill="#322a24"
                d="M91.4 26.7c1.7.5 3.2.8 5 1.3 5.9 1.8 8.8 4.7 8.8 11.4 0 7.5-6.2 11.4-13.4 11.4-10.2 0-13.4-6-13.2-12.4h8.8c0 2.6.9 5 4.5 5 2.4 0 4.3-1.2 4.3-3.3s-1.1-3.1-3.7-3.8c-2-.6-3.6-.9-5.6-1.7-5.1-1.9-7.7-5.3-7.7-10.9 0-6.2 5.2-10.8 12.6-10.8 7.8 0 12.4 3.9 12.5 11.6H96c-.1-2.8-1.4-4.5-4.2-4.5-2.2 0-3.7 1.2-3.7 3.1.1 1.9 1.1 2.9 3.3 3.6zm42.1-13.3l-8.8 25.4-9.4-25.4h-9.6l13.7 35.9c-2.4 5.8-8.6 5.5-8.6 5.5v8.9c.5.1 1.2.1 1.8.1 3.1 0 7-1.2 10.4-4.2 3.4-3 5.6-6.7 8-12.8 2-5.2 3.7-9.8 5.2-14l7.3-19.3-10-.1z"
            />
            <path fill="none" d="M-36.9-37h283.5v137.5H-36.9z" />
            <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="-132.214"
                y1="972.718"
                x2="-169.214"
                y2="943.292"
                gradientTransform="translate(174.275 -949.851)"
            >
                <stop offset=".33" stopColor="#ff9a1e" stopOpacity="0" />
                <stop offset=".71" stopColor="#ff9a1e" />
            </linearGradient>
            <path fill="url(#SVGID_1_)" d="M38.7-.1H0l19.3 25.2z" />
            <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="-171.049"
                y1="981.015"
                x2="-136.825"
                y2="1015.861"
                gradientTransform="translate(174.275 -949.851)"
            >
                <stop offset=".07" stopColor="#ff37f0" />
                <stop offset=".755" stopColor="#ff37f0" stopOpacity="0" />
            </linearGradient>
            <path fill="url(#SVGID_2_)" d="M0 50.3h38.7L19.3 25.1z" />
            <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="-167.106"
                y1="994.604"
                x2="-204.105"
                y2="965.177"
                gradientTransform="translate(191.76 -949.851)"
            >
                <stop offset=".352" stopColor="#ff5ae2" />
                <stop offset=".655" stopColor="#ff211c" />
            </linearGradient>
            <path fill="url(#SVGID_3_)" d="M0-.1v50.4l19.3-25.2z" />
        </svg>
    );
};
