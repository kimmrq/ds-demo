import { Box } from 'components/layouts/box';
import { Spacer } from 'components/layouts/spacer';
import { Collection, CollectionLink, CollectionText } from 'components/molecules/collection';
import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Avatar } from '../avatar';
import { Button } from '../button';
import { IconCircle } from '../icon-circle';
import { Link } from '../link';
import { H3, P2 } from '../text';
import { Drawer } from './';

export default {
    title: 'Atoms/Drawer',
    component: Drawer,
};

export const DrawerExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
            <Drawer isVisible={isOpen} onClose={() => setIsOpen(false)} header="Organisatie">
                {/* MemoryRouter only added for it to work in SB / Not needed in CS */}
                <MemoryRouter>
                    <Collection type="nav" aria-label="organisatie lijst">
                        <CollectionLink
                            insetPadding={false}
                            as={Link}
                            mediaItem={
                                <IconCircle icon="organisation" background="#ECECE6" size={40} />
                            }
                        >
                            <Spacer direction="vertical" spacing="small">
                                <Box mb={2}>
                                    <H3>Achterweg Huisartsenpraktijk</H3>
                                </Box>
                                <P2>
                                    <strong>Adres:</strong> Achterweg 73 b<br />
                                    1020VS Amsterdam
                                </P2>
                                <P2>
                                    <strong>Telefoon:</strong> 0345 571 700
                                </P2>
                                <P2>
                                    <strong>E-mail:</strong> info@achterweghuisarts.nl
                                </P2>
                            </Spacer>
                        </CollectionLink>
                    </Collection>
                    <Box mt={6} mb={3}>
                        <H3>Huisartsen</H3>
                    </Box>
                    <Collection type="nav" aria-label="Huisartsen lijst">
                        <CollectionLink
                            insetPadding={false}
                            as={Link}
                            mediaItem={<Avatar initials="AB" size={40} />}
                        >
                            <CollectionText primaryText="Arendsen, A. " align="center" />
                        </CollectionLink>
                        <CollectionLink
                            insetPadding={false}
                            as={Link}
                            mediaItem={<Avatar initials="BB" size={40} />}
                        >
                            <CollectionText primaryText="de Boer, B." align="center" />
                        </CollectionLink>
                    </Collection>
                    <Box mt={6} mb={3}>
                        <H3>POH</H3>
                    </Box>
                    <Collection type="nav" aria-label="Huisartsen lijst">
                        <CollectionLink
                            insetPadding={false}
                            as={Link}
                            mediaItem={<Avatar initials="AB" size={40} />}
                        >
                            <CollectionText primaryText="Arendsen, A. " align="center" />
                        </CollectionLink>
                        <CollectionLink
                            insetPadding={false}
                            as={Link}
                            mediaItem={<Avatar initials="BB" size={40} />}
                        >
                            <CollectionText primaryText="de Boer, B." align="center" />
                        </CollectionLink>
                    </Collection>
                </MemoryRouter>
            </Drawer>
        </>
    );
};
