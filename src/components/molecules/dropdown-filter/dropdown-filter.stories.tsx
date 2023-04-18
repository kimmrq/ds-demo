import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Box, Checkbox, Spacer, TextInput } from 'components';
import React, { useState } from 'react';

import { DropdownFilter, DropdownFilterProps } from './dropdown-filter';

export default {
    title: 'Molecules/DropdownFilter',
    component: DropdownFilter,
} as Meta;

export const DropdownFilterExample: Story<DropdownFilterProps> = (args) => {
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
    const [selectionCount, setSelectionCount] = useState(0);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        if (event.target.checked) {
            setSelectionCount(selectionCount + 1);
        }
        if (!event.target.checked) {
            setSelectionCount(selectionCount - 1);
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
        setSelectionCount(0);
        setInputValue('');
    };

    const handleSubmit = () => {
        setCount(selectionCount);
    };

    return (
        <Box width="107px">
            <DropdownFilter count={count} onReset={handleReset} onSubmit={handleSubmit} {...args}>
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
            </DropdownFilter>
        </Box>
    );
};

DropdownFilterExample.storyName = 'Default';
DropdownFilterExample.args = { label: 'Filter' };

export const DropdownFilterExampleWithSection: Story<DropdownFilterProps> = (args) => {
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
    const [selectionCount, setSelectionCount] = useState(0);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        if (event.target.checked) {
            setSelectionCount(selectionCount + 1);
        }
        if (!event.target.checked) {
            setSelectionCount(selectionCount - 1);
        }
    };

    const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
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
        setSelectionCount(0);
        setInputValue('');
    };

    const handleSubmit = () => {
        setCount(selectionCount);
    };

    const ContentExample = () => {
        return (
            <Spacer
                direction="vertical"
                align="start"
                isFullWidth
                style={{ width: '100%' }}
                lastChildHasNoSpacing
            >
                <TextInput
                    value={inputValue}
                    onChange={handleTextInput}
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
        );
    };

    return (
        <Box width="107px">
            <DropdownFilter
                count={count}
                onReset={handleReset}
                onSubmit={handleSubmit}
                noPadding
                {...args}
            >
                <DropdownFilter.Section label="Filter 1">
                    <ContentExample />
                </DropdownFilter.Section>
                <DropdownFilter.Section label="Filter 2">
                    <ContentExample />
                </DropdownFilter.Section>
                <DropdownFilter.Section label="Filter 3">
                    <ContentExample />
                </DropdownFilter.Section>
            </DropdownFilter>
        </Box>
    );
};

DropdownFilterExampleWithSection.storyName = 'With Section';
DropdownFilterExampleWithSection.args = { label: 'Filter' };
