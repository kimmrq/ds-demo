import { Collection, CollectionItem, CollectionText } from 'components/molecules/collection';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { Avatar } from '../avatar';
import { CardCollapse } from './card-collapse';

export default {
    title: 'Atoms/CardCollapse',
    component: CardCollapse,
};

export const CardCollapseExample = () => {
    const [state, setState] = useState<boolean>(false);
    return (
        <>
            <CardCollapse
                heading="Regulier consult"
                onClick={() => setState(!state)}
                isOpen={state}
                buttonText={state ? 'Inklappen' : 'Rollen tonen'}
                buttonVariant="blue"
            >
                CardCollapse contents Anim nulla occaecat commodo id non labore esse incididunt
                consequat. Deserunt ad irure ullamco ea minim incididunt. Voluptate magna sit est
                dolore ea in consequat labore dolor qui labore. In irure duis non fugiat laborum
                nostrud adipisicing cupidatat excepteur veniam deserunt. Aliquip incididunt amet
                esse exercitation nulla voluptate sunt consequat do labore consectetur quis.
                Voluptate tempor nulla dolore adipisicing. Pariatur in consequat minim id voluptate
                amet. Mollit amet dolore sit adipisicing elit. Nulla culpa esse non adipisicing
                dolore ullamco ut laboris consectetur. Enim dolore est voluptate qui id consequat do
                culpa dolor laborum. Do eiusmod nostrud cupidatat et adipisicing veniam velit
                incididunt. Commodo consequat esse enim consectetur. Labore exercitation irure qui
                est laboris incididunt magna adipisicing tempor nisi. Ea enim deserunt non laboris
                duis tempor officia ut. Incididunt tempor voluptate cillum tempor. Anim et anim
                tempor pariatur duis occaecat ipsum eiusmod minim Lorem est nostrud laborum. Ut
                mollit consectetur eu commodo aliqua ex. Do eu duis anim et nostrud magna ut elit
                anim id elit sint sunt. Excepteur duis dolore officia Lorem. Eiusmod voluptate aute
                occaecat id enim proident. Magna est ullamco veniam irure laborum adipisicing. Magna
                elit aute culpa commodo irure aute. Sit occaecat cillum elit cillum esse. Amet ipsum
                nostrud ullamco ea ullamco labore adipisicing sit fugiat. Sint anim in commodo
                occaecat mollit aliquip nisi aute enim.
            </CardCollapse>
        </>
    );
};

CardCollapseExample.storyName = 'Default';

export const CardCollapseCollection = () => {
    const [state, setState] = useState<boolean>(false);
    const targetRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<number>(0);

    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions(targetRef.current.clientHeight);
        }
    }, []);

    return (
        <>
            <CardCollapse
                onClick={() => setState(!state)}
                isOpen={state}
                buttonText={state ? 'Inklappen' : 'Toon inactieve zorgpaden'}
                buttonVariant="grey"
                spacing="none"
                initialHeight={`${dimensions}px`}
            >
                <Collection type="ul" aria-label="organisatie lijst">
                    <div
                        ref={targetRef}
                        style={{
                            boxShadow: '0 2px 0px -1px rgba(236, 236, 230, 1)',
                        }}
                    >
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                        </CollectionItem>
                        <CollectionItem mediaItem={<Avatar size="medium" />}>
                            <CollectionText align="center" primaryText="P.J.R Bloemen" />
                        </CollectionItem>
                    </div>
                    <CollectionItem mediaItem={<Avatar size="medium" />}>
                        <CollectionText align="center" primaryText="P.J.R Bloemen" />
                    </CollectionItem>
                    <CollectionItem mediaItem={<Avatar size="medium" />}>
                        <CollectionText align="center" primaryText="P.J.R Bloemen" />
                    </CollectionItem>
                </Collection>
            </CardCollapse>
        </>
    );
};

CardCollapseCollection.storyName = 'With collection';
