import React from 'react';
import styled from 'styled-components';

import { FileTypeIcon } from './';

export default {
    title: 'Atoms/FileTypeIcon',
    component: FileTypeIcon,
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

export const FileTypeExample = () => {
    return (
        <List>
            <Item>
                <FileTypeIcon icon="doc" width={44} />
                <Metadata>doc</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="heic" width={44} />
                <Metadata>heic</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="jpg" width={44} />
                <Metadata>jpg</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="mov" width={44} />
                <Metadata>mov</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="mp4" width={44} />
                <Metadata>mp4</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="pdf" width={44} />
                <Metadata>pdf</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="png" width={44} />
                <Metadata>png</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="ppt" width={44} />
                <Metadata>ppt</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="tiff" width={44} />
                <Metadata>tiff</Metadata>
            </Item>
            <Item>
                <FileTypeIcon icon="xls" width={44} />
                <Metadata>xls</Metadata>
            </Item>
        </List>
    );
};

FileTypeExample.storyName = 'Default';
