import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Spacer, TextInput } from 'components';
import React, { useState } from 'react';

import { Filter, FilterProps } from './filter';

export default {
    title: 'Atoms/Filter',
    component: Filter,
} as Meta;

export const FilterExampleWithCheckbox: Story<FilterProps> = (args) => {
    const [state, setState] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
    });

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        if (event.target.checked) {
            setCount(count + 1);
        }
        if (!event.target.checked) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setState({
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
        });
        setCount(0);
        setInputValue('');
    };

    return (
        <div style={{ minHeight: '350px' }}>
            <Filter {...args} onReset={() => handleReset()} onSubmit={action('onClick')} isOpen>
                <Spacer
                    direction="vertical"
                    align="start"
                    isFullWidth
                    style={{ width: '100%' }}
                    lastChildHasNoSpacing
                >
                    <TextInput
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search"
                        suffix={{
                            icon: 'search',
                            labelText: 'aria labelled text',
                            onSuffixClick: action('clicked'),
                        }}
                        type="text"
                    />
                    <Checkbox
                        name="checkbox1"
                        checked={state.checkbox1}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox2"
                        checked={state.checkbox2}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox3"
                        checked={state.checkbox3}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox4"
                        checked={state.checkbox4}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox5"
                        checked={state.checkbox5}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox6"
                        checked={state.checkbox6}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox7"
                        checked={state.checkbox7}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                    <Checkbox
                        name="checkbox8"
                        checked={state.checkbox8}
                        onChange={handleChange}
                        label="Checkbox label"
                    />
                </Spacer>
            </Filter>
        </div>
    );
};

FilterExampleWithCheckbox.storyName = 'With checkbox';

export const FilterExampleWithSection: Story<FilterProps> = (args) => {
    const [state, setState] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
    });

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        if (event.target.checked) {
            setCount(count + 1);
        }
        if (!event.target.checked) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setState({
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
        });
        setCount(0);
        setInputValue('');
    };

    return (
        <div style={{ minHeight: '350px' }}>
            <Filter
                {...args}
                onReset={() => handleReset()}
                onSubmit={action('onClick')}
                isOpen
                noPadding
            >
                <Filter.Section label="Filter 1">
                    <Spacer
                        direction="vertical"
                        align="start"
                        isFullWidth
                        lastChildHasNoSpacing
                        style={{ width: '100%' }}
                    >
                        <TextInput
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Search"
                            suffix={{
                                icon: 'search',
                                labelText: 'aria labelled text',
                                onSuffixClick: action('clicked'),
                            }}
                            type="text"
                        />
                        <Checkbox
                            name="checkbox1"
                            checked={state.checkbox1}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox2"
                            checked={state.checkbox2}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox3"
                            checked={state.checkbox3}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox4"
                            checked={state.checkbox4}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox5"
                            checked={state.checkbox5}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox6"
                            checked={state.checkbox6}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox7"
                            checked={state.checkbox7}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox8"
                            checked={state.checkbox8}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                    </Spacer>
                </Filter.Section>
                <Filter.Section label="Filter 2">
                    <Spacer
                        direction="vertical"
                        align="start"
                        isFullWidth
                        style={{ width: '100%' }}
                        lastChildHasNoSpacing
                    >
                        <TextInput
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Search"
                            suffix={{
                                icon: 'search',
                                labelText: 'aria labelled text',
                                onSuffixClick: action('clicked'),
                            }}
                            type="text"
                        />
                        <Checkbox
                            name="checkbox1"
                            checked={state.checkbox1}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox2"
                            checked={state.checkbox2}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox3"
                            checked={state.checkbox3}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox4"
                            checked={state.checkbox4}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox5"
                            checked={state.checkbox5}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox6"
                            checked={state.checkbox6}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox7"
                            checked={state.checkbox7}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox8"
                            checked={state.checkbox8}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                    </Spacer>
                </Filter.Section>
                <Filter.Section label="Filter 3">
                    <Spacer
                        direction="vertical"
                        align="start"
                        isFullWidth
                        style={{ width: '100%' }}
                        lastChildHasNoSpacing
                    >
                        <TextInput
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Search"
                            suffix={{
                                icon: 'search',
                                labelText: 'aria labelled text',
                                onSuffixClick: action('clicked'),
                            }}
                            type="text"
                        />
                        <Checkbox
                            name="checkbox1"
                            checked={state.checkbox1}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox2"
                            checked={state.checkbox2}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox3"
                            checked={state.checkbox3}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox4"
                            checked={state.checkbox4}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox5"
                            checked={state.checkbox5}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox6"
                            checked={state.checkbox6}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox7"
                            checked={state.checkbox7}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                        <Checkbox
                            name="checkbox8"
                            checked={state.checkbox8}
                            onChange={handleChange}
                            label="Checkbox label"
                        />
                    </Spacer>
                </Filter.Section>
            </Filter>
        </div>
    );
};

FilterExampleWithSection.storyName = 'With section';
