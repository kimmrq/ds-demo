import React from 'react';
import styled from 'styled-components';

import { Icon } from './';

export default {
    title: 'Atoms/Icon',
    component: Icon,
};

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 8rem;
`;

const Metadata = styled.div`
    color: #666;
    font-size: 12px;
    padding-top: 0.5rem;
`;

export const IconExamples = () => {
    return (
        <div className="story">
            <h3>Admin</h3>
            <List>
                <Item>
                    <Icon icon="honoraria" />
                    <Metadata>honoraria</Metadata>
                </Item>
                <Item>
                    <Icon icon="finance" />
                    <Metadata>finance</Metadata>
                </Item>
                <Item>
                    <Icon icon="jobs" />
                    <Metadata>jobs</Metadata>
                </Item>
                <Item>
                    <Icon icon="records" />
                    <Metadata>records</Metadata>
                </Item>
                <Item>
                    <Icon icon="import" />
                    <Metadata>import</Metadata>
                </Item>
                <Item>
                    <Icon icon="organisation" />
                    <Metadata>organisation</Metadata>
                </Item>
                <Item>
                    <Icon icon="healthcare-institution" />
                    <Metadata>healthcare-institution</Metadata>
                </Item>
            </List>
            <h3>Arrows</h3>
            <List>
                <Item>
                    <Icon icon="caret-up" />
                    <Metadata>caret-up</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-down" />
                    <Metadata>caret-down</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-left" />
                    <Metadata>caret-left</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-right" />
                    <Metadata>caret-right</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-skip-backward" />
                    <Metadata>caret-skip-backward</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-skip-forward" />
                    <Metadata>caret-skip-forward</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-double" />
                    <Metadata>caret-double</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-up-big" />
                    <Metadata>caret-up-big</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-down-big" />
                    <Metadata>caret-down-big</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-left-big" />
                    <Metadata>caret-left-big</Metadata>
                </Item>
                <Item>
                    <Icon icon="caret-right-big" />
                    <Metadata>caret-right-big</Metadata>
                </Item>
                <Item>
                    <Icon icon="arrow-left" />
                    <Metadata>arrow-left</Metadata>
                </Item>
                <Item>
                    <Icon icon="arrow-right" />
                    <Metadata>arrow-right</Metadata>
                </Item>
                <Item>
                    <Icon icon="arrow-up" />
                    <Metadata>arrow-up</Metadata>
                </Item>
                <Item>
                    <Icon icon="arrow-down" />
                    <Metadata>arrow-down</Metadata>
                </Item>
            </List>
            <h3>Status</h3>
            <List>
                <Item>
                    <Icon icon="waiting" />
                    <Metadata>waiting</Metadata>
                </Item>
                <Item>
                    <Icon icon="todo" />
                    <Metadata>todo</Metadata>
                </Item>
                <Item>
                    <Icon icon="closed" />
                    <Metadata>closed</Metadata>
                </Item>
                <Item>
                    <Icon icon="warning" />
                    <Metadata>warning</Metadata>
                </Item>
            </List>
            <h3>Controls</h3>
            <List>
                <Item>
                    <Icon icon="zoom-in" />
                    <Metadata>zoom-in</Metadata>
                </Item>
                <Item>
                    <Icon icon="visible" />
                    <Metadata>visible</Metadata>
                </Item>
                <Item>
                    <Icon icon="upload" />
                    <Metadata>upload</Metadata>
                </Item>
                <Item>
                    <Icon icon="star" />
                    <Metadata>star</Metadata>
                </Item>
                <Item>
                    <Icon icon="search" />
                    <Metadata>search</Metadata>
                </Item>
                <Item>
                    <Icon icon="refresh" />
                    <Metadata>refresh</Metadata>
                </Item>
                <Item>
                    <Icon icon="question" />
                    <Metadata>question</Metadata>
                </Item>
                <Item>
                    <Icon icon="play" />
                    <Metadata>play</Metadata>
                </Item>
                <Item>
                    <Icon icon="invisible" />
                    <Metadata>invisible</Metadata>
                </Item>
                <Item>
                    <Icon icon="information" />
                    <Metadata>information</Metadata>
                </Item>
                <Item>
                    <Icon icon="edit" />
                    <Metadata>edit</Metadata>
                </Item>
                <Item>
                    <Icon icon="edit-light" />
                    <Metadata>edit-light</Metadata>
                </Item>
                <Item>
                    <Icon icon="download" />
                    <Metadata>download</Metadata>
                </Item>
                <Item>
                    <Icon icon="delete" />
                    <Metadata>delete</Metadata>
                </Item>
                <Item>
                    <Icon icon="close" />
                    <Metadata>close</Metadata>
                </Item>
                <Item>
                    <Icon icon="calender" />
                    <Metadata>calender</Metadata>
                </Item>
                <Item>
                    <Icon icon="add" />
                    <Metadata>add</Metadata>
                </Item>
                <Item>
                    <Icon icon="check" />
                    <Metadata>check</Metadata>
                </Item>
                <Item>
                    <Icon icon="checked" />
                    <Metadata>checked</Metadata>
                </Item>
                <Item>
                    <Icon icon="stopped" />
                    <Metadata>stopped</Metadata>
                </Item>
                <Item>
                    <Icon icon="file" />
                    <Metadata>file</Metadata>
                </Item>
                <Item>
                    <Icon icon="devices" />
                    <Metadata>devices</Metadata>
                </Item>
                <Item>
                    <Icon icon="checkup" />
                    <Metadata>checkup</Metadata>
                </Item>
                <Item>
                    <Icon icon="medication" />
                    <Metadata>medication</Metadata>
                </Item>
                <Item>
                    <Icon icon="episodes" />
                    <Metadata>episodes</Metadata>
                </Item>
                <Item>
                    <Icon icon="print" />
                    <Metadata>print</Metadata>
                </Item>
            </List>
            <h3>People</h3>
            <List>
                <Item>
                    <Icon icon="practitioner" />
                    <Metadata>practitioner</Metadata>
                </Item>
                <Item>
                    <Icon icon="patient" />
                    <Metadata>patient</Metadata>
                </Item>
                <Item>
                    <Icon icon="patients" />
                    <Metadata>patients</Metadata>
                </Item>
                <Item>
                    <Icon icon="add-patient" />
                    <Metadata>add-patient</Metadata>
                </Item>
            </List>
            <h3>Navigation</h3>
            <List>
                <Item>
                    <Icon icon="dashboard" />
                    <Metadata>dashboard</Metadata>
                </Item>
                <Item>
                    <Icon icon="telephone" />
                    <Metadata>telephone</Metadata>
                </Item>
                <Item>
                    <Icon icon="settings" />
                    <Metadata>settings</Metadata>
                </Item>
                <Item>
                    <Icon icon="logout" />
                    <Metadata>logout</Metadata>
                </Item>
                <Item>
                    <Icon icon="external" />
                    <Metadata>external</Metadata>
                </Item>

                <Item>
                    <Icon icon="recorder" />
                    <Metadata>recorder</Metadata>
                </Item>
                <Item>
                    <Icon icon="more" />
                    <Metadata>more</Metadata>
                </Item>
            </List>
            <h3>Service Type</h3>
            <List>
                <Item>
                    <Icon icon="inquiry" />
                    <Metadata>inquiry</Metadata>
                </Item>
                <Item>
                    <Icon icon="consultation" />
                    <Metadata>consultation</Metadata>
                </Item>
                <Item>
                    <Icon icon="referral" />
                    <Metadata>referral</Metadata>
                </Item>
                <Item>
                    <Icon icon="referralSmall" />
                    <Metadata>referralSmall</Metadata>
                </Item>
                <Item>
                    <Icon icon="examination" />
                    <Metadata>examination</Metadata>
                </Item>
                <Item>
                    <Icon icon="other" />
                    <Metadata>other</Metadata>
                </Item>
                <Item>
                    <Icon icon="counseling" />
                    <Metadata>counseling</Metadata>
                </Item>
                <Item>
                    <Icon icon="contact" />
                    <Metadata>contact</Metadata>
                </Item>
                <Item>
                    <Icon icon="invitation" />
                    <Metadata>invitation</Metadata>
                </Item>
            </List>
        </div>
    );
};

IconExamples.storyName = 'Default';
