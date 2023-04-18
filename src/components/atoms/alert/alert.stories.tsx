import React from 'react';

import { Link } from '../link';
import { Alert } from './';

export default {
    title: 'Atoms/Alert',
    component: Alert,
};

export const AlertExample = () => {
    return (
        <>
            <Alert appearance="danger">
                Het formulier is niet verstuurd{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </Alert>
            <Alert appearance="success">
                Uw consult is verstuurd{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </Alert>
            <Alert appearance="info">
                We versturen de ECG opname naar de analist. Volg de voortgang op{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    het recorderoverzicht
                </Link>
                .
            </Alert>
        </>
    );
};

AlertExample.storyName = 'Default';

export const AlertWithIconExample = () => {
    return (
        <>
            <Alert appearance="danger" withIcon>
                Het formulier is niet verstuurd{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </Alert>
            <Alert appearance="success" withIcon>
                Uw consult is verstuurd{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </Alert>
            <Alert appearance="info" withIcon>
                We versturen de ECG opname naar de analist. Volg de voortgang op{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    het recorderoverzicht
                </Link>
                .
            </Alert>
        </>
    );
};

AlertWithIconExample.storyName = 'With icon';
