import React, { useState } from 'react';

import { PasswordInput } from './password-input';

export default {
    title: 'Atoms/PasswordInput',
    component: PasswordInput,
};

export const PasswordField = () => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <PasswordInput
            value={inputValue}
            placeholder="Type your password here"
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};

PasswordField.storyName = 'Default';

export const Error = () => {
    return (
        <PasswordInput
            value=""
            onChange={() => null}
            error="There are some errors"
            placeholder="Error state"
        />
    );
};

export const Disabled = () => {
    return <PasswordInput value="" onChange={() => null} disabled placeholder="Disabled state" />;
};

export const ValidateFeedback = () => {
    const [password, setPassword] = useState('');
    const [contains10C, setContains10C] = useState(false);

    const validatePassword = () => {
        const characterCount = password.length >= 10;
        setContains10C(characterCount);
    };

    const testCharacterCount = () => {
        return contains10C ? 'success' : 'default';
    };

    return (
        <PasswordInput
            value={password}
            placeholder="With ValidateFeedback"
            onKeyUp={validatePassword}
            messages={[
                {
                    text: 'Minimaal 10 karakters',
                    type: testCharacterCount(),
                },
            ]}
            onChange={(e) => setPassword(e.target.value)}
            capslockText="Capslock staat aan"
        />
    );
};

ValidateFeedback.storyName = 'ValidateFeedback';
