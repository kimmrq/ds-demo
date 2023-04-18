import { Link } from 'components/atoms/link';
import React, { useState } from 'react';

import { Collapse } from './collapse';

export default {
    title: 'Atoms/Collapse',
    component: Collapse,
};

export const CollapseExample = () => {
    const [isItemOpen, setIsItemOpen] = useState<boolean>(true);
    return (
        <div style={{ height: '500px' }}>
            <Collapse isOpen={isItemOpen}>
                <div style={{ marginTop: '50px' }}>
                    Collapse contents Anim nulla occaecat commodo id non labore esse incididunt
                    consequat. Deserunt ad irure ullamco ea minim incididunt. Voluptate magna sit
                    est dolore ea in consequat labore dolor qui labore. In irure duis non fugiat
                    laborum nostrud adipisicing cupidatat excepteur veniam deserunt. Aliquip
                    incididunt amet esse exercitation nulla voluptate sunt consequat do labore
                    consectetur quis. Voluptate tempor nulla dolore adipisicing. Pariatur in
                    consequat minim id voluptate amet. Mollit amet dolore sit adipisicing elit.
                    Nulla culpa esse non adipisicing dolore ullamco ut laboris consectetur. Enim
                    dolore est voluptate qui id consequat do culpa dolor laborum. Do eiusmod nostrud
                    cupidatat et adipisicing veniam velit incididunt. Commodo consequat esse enim
                    consectetur. Labore exercitation irure qui est laboris incididunt magna
                    adipisicing tempor nisi. Ea enim deserunt non laboris duis tempor officia ut.
                    Incididunt tempor voluptate cillum tempor. Anim et anim tempor pariatur duis
                    occaecat ipsum eiusmod minim Lorem est nostrud laborum. Ut mollit consectetur eu
                    commodo aliqua ex. Do eu duis anim et nostrud magna ut elit anim id elit sint
                    sunt. Excepteur duis dolore officia Lorem. Eiusmod voluptate aute occaecat id
                    enim proident. Magna est ullamco veniam irure laborum adipisicing. Magna elit
                    aute culpa commodo irure aute. Sit occaecat cillum elit cillum esse. Amet ipsum
                    nostrud ullamco ea ullamco labore adipisicing sit fugiat. Sint anim in commodo
                    occaecat mollit aliquip nisi aute enim.
                </div>
            </Collapse>
            <Link
                as="button"
                color="grey"
                iconLeft={isItemOpen ? 'caret-up' : 'caret-down'}
                onClick={() => setIsItemOpen(!isItemOpen)}
                fontWeight="normal"
                style={{ fontSize: '12px', margin: '8px 0' }}
            >
                {isItemOpen ? 'Klap het onderzoek in' : 'Bekijk het onderzoek'}
            </Link>
        </div>
    );
};

CollapseExample.storyName = 'Default';
