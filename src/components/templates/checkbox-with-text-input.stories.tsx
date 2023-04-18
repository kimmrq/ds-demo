import { Card } from 'components/atoms/card';
import { FormSection } from 'components/molecules/form-section';
import React, { useState } from 'react';

import { Checkbox } from '../atoms/checkbox';
import { TextInput } from '../atoms/text-input';
import { FormGroup } from '../molecules/form-group';

export default {
    title: 'Templates/CheckboxWithTextInput',
    // includeStories: [], // or don't load this file at all
};

export const CheckboxWithTextInput = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <Card>
            <FormSection title="Maandag">
                <FormGroup label="Beschikbaarheid">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={checked}
                            value="whatever"
                            id="1"
                            onChange={() => setChecked(!checked)}
                        />
                        <TextInput
                            style={{ marginLeft: '12px', width: '60px', textAlign: 'right' }}
                            disabled={!checked}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="9:00"
                        />
                        <p style={{ margin: '0 24px' }}>tot</p>{' '}
                        <TextInput
                            style={{ width: '60px', textAlign: 'right' }}
                            disabled={!checked}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="12:00"
                        />
                    </div>
                </FormGroup>
            </FormSection>
        </Card>
    );
};

CheckboxWithTextInput.storyName = 'Checkbox with TextInput';
