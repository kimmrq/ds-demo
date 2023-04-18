import { Link } from 'components';
import React from 'react';
import { Link as ReactRouterDomLink, MemoryRouter } from 'react-router-dom';

import { Avatar } from '../../atoms/avatar/avatar';
import { Card } from '../../atoms/card/card';
import { CarePathIcon } from '../../atoms/care-path-icon';
import { Collection, CollectionItem, CollectionLink, CollectionText } from '.';

export default {
    title: 'Molecules/Collection',
    component: Collection,
};

export const CollectionLinkExample = () => {
    return (
        <>
            <MemoryRouter>
                <Card spacing="none">
                    <Collection type="nav" aria-label="organisatie lijst">
                        <CollectionLink
                            as={ReactRouterDomLink}
                            mediaItem={<CarePathIcon icon="cardiology" size={40} />}
                        >
                            <CollectionText
                                primaryText="Cardio (Holter)"
                                secondaryText="Actief sinds 04-02-2016"
                            />
                        </CollectionLink>
                        <CollectionLink
                            as={ReactRouterDomLink}
                            mediaItem={<CarePathIcon icon="cardiology" size={40} />}
                        >
                            <CollectionText
                                primaryText="Cardio (Holter)"
                                secondaryText="Actief sinds 04-02-2016"
                            />
                        </CollectionLink>
                    </Collection>
                </Card>
            </MemoryRouter>
        </>
    );
};

CollectionLinkExample.storyName = 'With CollectionLink';

export const CollectionItemExample = () => {
    return (
        <>
            <MemoryRouter>
                <Card spacing="none">
                    <Collection type="ul" aria-label="organisatie lijst">
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                        </CollectionItem>
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                        </CollectionItem>
                    </Collection>
                </Card>
            </MemoryRouter>
        </>
    );
};

CollectionItemExample.storyName = 'With CollectionItem';

export const CollectionItemWithLinkExample = () => {
    return (
        <>
            <MemoryRouter>
                <Card spacing="none">
                    <Collection type="ul" aria-label="organisatie lijst">
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                            <Link
                                style={{ marginLeft: 'auto', alignSelf: 'center' }}
                                iconRight="caret-right"
                            >
                                Instellingen
                            </Link>
                        </CollectionItem>
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                            <Link
                                style={{ marginLeft: 'auto', alignSelf: 'center' }}
                                iconRight="caret-right"
                            >
                                Instellingen
                            </Link>
                        </CollectionItem>
                    </Collection>
                </Card>
            </MemoryRouter>
        </>
    );
};

CollectionItemWithLinkExample.storyName = 'With CollectionItem and Link';
