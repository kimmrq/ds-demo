import React from 'react';

import { Link } from '../../atoms/link';
import { H4 } from '../../atoms/text';
import { List, ListItem } from './';

export default {
    title: 'Molecules/List',
    component: List,
    // includeStories: [],
};

export const UnorderedNoBullets = () => {
    return (
        <List>
            <ListItem>Een volwaardig medisch consult</ListItem>
            <ListItem>Vanaf je eigen plek</ListItem>
            <ListItem>Vergoed door je zorgverzekeraar</ListItem>
            <ListItem>Voor jou, via je huisarts</ListItem>
            <ListItem>Uitleg over je onderzoek</ListItem>
            <ListItem>Inzicht in de vervolstappen</ListItem>
        </List>
    );
};

UnorderedNoBullets.storyName = 'Default';

export const UnorderedWithBullets = () => {
    return (
        <List styleType="bullet">
            <ListItem>Een volwaardig medisch consult</ListItem>
            <ListItem>Vanaf je eigen plek</ListItem>
            <ListItem>Vergoed door je zorgverzekeraar</ListItem>
            <ListItem>Voor jou, via je huisarts</ListItem>
            <ListItem>Uitleg over je onderzoek</ListItem>
            <ListItem>Inzicht in de vervolstappen</ListItem>
        </List>
    );
};

UnorderedWithBullets.storyName = 'Bullet List';

export const UnorderedWithIcons = () => {
    return (
        <List>
            <ListItem icon="inquiry" iconColor="magenta">
                Een volwaardig medisch consult
            </ListItem>
            <ListItem icon="counseling" iconColor="magenta">
                Vanaf je eigen plek
            </ListItem>
            <ListItem icon="honoraria" iconColor="magenta">
                Vergoed door je zorgverzekeraar
            </ListItem>
            <ListItem icon="practitioner" iconColor="magenta">
                Voor jou, via je huisarts
            </ListItem>
            <ListItem icon="examination" iconColor="magenta">
                Uitleg over je onderzoek
            </ListItem>
            <ListItem icon="referral" iconColor="magenta">
                Inzicht in de vervolstappen
            </ListItem>
        </List>
    );
};

UnorderedWithIcons.storyName = 'Icon List';

export const UnorderedWithLink = () => {
    return (
        <List>
            <ListItem>
                <Link iconLeft="arrow-right" color="magenta" to="#" fontWeight="normal">
                    Wat betaal je, en hoe?
                </Link>
            </ListItem>
            <ListItem>
                <Link iconLeft="arrow-right" color="magenta" to="#" fontWeight="normal">
                    Upload je vergoedingsoverzicht
                </Link>
            </ListItem>
        </List>
    );
};

UnorderedWithLink.storyName = 'Link list';

export const Unordered = () => {
    return (
        <List styleType="number">
            <ListItem>Een volwaardig medisch consult</ListItem>
            <ListItem>Vanaf je eigen plek</ListItem>
            <ListItem>Vergoed door je zorgverzekeraar</ListItem>
            <ListItem>Voor jou, via je huisarts</ListItem>
            <ListItem>Uitleg over je onderzoek</ListItem>
            <ListItem>Inzicht in de vervolstappen</ListItem>
            <ListItem>Een volwaardig medisch consult</ListItem>
            <ListItem>Vanaf je eigen plek</ListItem>
            <ListItem>Vergoed door je zorgverzekeraar</ListItem>
            <ListItem>Voor jou, via je huisarts</ListItem>
            <ListItem>Uitleg over je onderzoek</ListItem>
            <ListItem>Inzicht in de vervolstappen</ListItem>
            <ListItem>Een volwaardig medisch consult</ListItem>
            <ListItem>Vanaf je eigen plek</ListItem>
        </List>
    );
};

Unordered.storyName = 'Ordered list';

export const Counter = () => {
    return (
        <List styleType="counter" counterColor="#ff37f0">
            <ListItem>
                <div style={{ display: 'inline-block' }}>
                    <H4 color="inherit" style={{ marginBottom: '8px' }}>
                        Hoe voelt de aandoening?
                    </H4>
                    <List styleType="none">
                        <ListItem spacing="condensed">Het jeukt</ListItem>
                        <ListItem spacing="condensed">Het doet pijn</ListItem>
                    </List>
                </div>
            </ListItem>
            <ListItem>
                <div style={{ display: 'inline-block' }}>
                    <H4 color="inherit" style={{ marginBottom: '8px' }}>
                        Wanneer is het begonnen?
                    </H4>
                    <List styleType="none">
                        <ListItem spacing="condensed">Vandaag/vannacht</ListItem>
                    </List>
                </div>
            </ListItem>
            <ListItem>
                <div style={{ display: 'inline-block' }}>
                    <H4 color="inherit" style={{ marginBottom: '8px' }}>
                        Is het ondertussen veranderd?
                    </H4>
                    <List styleType="none">
                        <ListItem spacing="condensed">Verslechterd</ListItem>
                    </List>
                </div>
            </ListItem>
        </List>
    );
};

Counter.storyName = 'Counter list';
