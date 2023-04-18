import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import { NavBar } from './nav-bar';

export default {
    title: 'Organisms/NavBar',
    component: NavBar,
};

export const NavBarExample = () => {
    return (
        <BrowserRouter>
            <NavBar>
                <NavBar.Link as={NavLink} icon="dashboard" to="/home">
                    Home
                </NavBar.Link>
                <NavBar.Link as={NavLink} icon="todo" to="/taken">
                    Taken
                </NavBar.Link>
                <NavBar.Link as={NavLink} icon="patients" to="/patienten">
                    Patiënten
                </NavBar.Link>
                <NavBar.Link as={NavLink} icon="recorder" to="/recorders">
                    Recorders
                </NavBar.Link>
                <NavBar.Link as={NavLink} icon="external" to="/labaanvraag">
                    Naar labaanvraag
                </NavBar.Link>
                <NavBar.Menu title="Financiën" icon="finance">
                    <NavBar.Link as={NavLink} to="Rapportage financieel">
                        Rapportage financieel
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Rapport uitbetalingen">
                        Rapport uitbetalingen
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Rapport bekostiging">
                        Rapport bekostiging
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Uitbetalingen">
                        Uitbetalingen
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Exporteren uitbetalingen">
                        Exporteren uitbetalingen
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Exporteren declaraties">
                        Exporteren declaraties
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Exporteren facturaties">
                        Exporteren facturaties
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Omzetplafond">
                        Omzetplafond
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Bekostiging">
                        Bekostiging
                    </NavBar.Link>
                </NavBar.Menu>
                <NavBar.Menu title="Logs" icon="records">
                    <NavBar.Link as={NavLink} to="Berichten aan derden">
                        Berichten aan derden
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Patiënt toegangslog">
                        Patiënt toegangslog
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Audit records">
                        Audit records
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Desktop processen">
                        Desktop processen
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Binnenkomende berichten">
                        Binnenkomende berichten
                    </NavBar.Link>
                    <NavBar.Link as={NavLink} to="Binnenkomende berichten">
                        Derma app registraties
                    </NavBar.Link>
                </NavBar.Menu>
            </NavBar>
        </BrowserRouter>
    );
};

NavBarExample.storyName = 'Default';
