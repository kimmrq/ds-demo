import React from 'react';
import styled from 'styled-components';

import { CarePathIcon } from './';

export default {
    title: 'Atoms/CarePathIcon',
    component: CarePathIcon,
};

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    text-align: center;
    margin-bottom: 2rem;
    width: 8rem;
`;

const Metadata = styled.div`
    color: #666;
    font-size: 12px;
    padding-top: 0.5rem;
`;

export const CarePathIconLargeMultiColor = () => {
    return (
        <div className="story">
            <List>
                <Item>
                    <CarePathIcon icon="cardiology" />
                    <Metadata>cardiology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="dermatology" />
                    <Metadata>dermatology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="mentalHealth" />
                    <Metadata>mentalHealth</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="ophthalmology" />
                    <Metadata>ophthalmology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="orthopedics" />
                    <Metadata>orthopedics</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="pulmonology" />
                    <Metadata>pulmonology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="somnology" />
                    <Metadata>somnology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="nephrology" />
                    <Metadata>nephrology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="endocrinology" />
                    <Metadata>endocrinology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="general" />
                    <Metadata>general</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="homeconsultation" />
                    <Metadata>homeconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="corona" />
                    <Metadata>corona</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="digitalconsultation" />
                    <Metadata>digitalconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon icon="lab" />
                    <Metadata>lab</Metadata>
                </Item>
            </List>
        </div>
    );
};

CarePathIconLargeMultiColor.storyName = 'Default';

export const CarePathIconsSmall = () => {
    return (
        <div className="story">
            <List>
                <Item>
                    <CarePathIcon variant="small" icon="cardiology" />
                    <Metadata>cardiology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="dermatology" />
                    <Metadata>dermatology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="mentalHealth" />
                    <Metadata>mentalHealth</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="ophthalmology" />
                    <Metadata>ophthalmology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="orthopedics" />
                    <Metadata>orthopedics</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="pulmonology" />
                    <Metadata>pulmonology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="somnology" />
                    <Metadata>somnology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="nephrology" />
                    <Metadata>nephrology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="endocrinology" />
                    <Metadata>endocrinology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="general" />
                    <Metadata>general</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="homeconsultation" />
                    <Metadata>homeconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="corona" />
                    <Metadata>corona</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="digitalconsultation" />
                    <Metadata>digitalconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="small" icon="lab" />
                    <Metadata>lab</Metadata>
                </Item>
            </List>
        </div>
    );
};

CarePathIconsSmall.storyName = 'Small';

export const CarePathIconsLarge = () => {
    return (
        <div className="story">
            <List>
                <Item>
                    <CarePathIcon variant="large" icon="cardiology" />
                    <Metadata>cardiology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="dermatology" />
                    <Metadata>dermatology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="mentalHealth" />
                    <Metadata>mentalHealth</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="ophthalmology" />
                    <Metadata>ophthalmology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="orthopedics" />
                    <Metadata>orthopedics</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="pulmonology" />
                    <Metadata>pulmonology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="somnology" />
                    <Metadata>somnology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="nephrology" />
                    <Metadata>nephrology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="endocrinology" />
                    <Metadata>endocrinology</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="general" />
                    <Metadata>general</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="homeconsultation" />
                    <Metadata>homeconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="corona" />
                    <Metadata>corona</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="digitalconsultation" />
                    <Metadata>digitalconsultation</Metadata>
                </Item>
                <Item>
                    <CarePathIcon variant="large" icon="lab" />
                    <Metadata>lab</Metadata>
                </Item>
            </List>
        </div>
    );
};

CarePathIconsLarge.storyName = 'Large';
