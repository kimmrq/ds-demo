import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import { Checkbox } from '../atoms/checkbox';
import { Link } from '../atoms/link';
import { H3, Text } from '../atoms/text/text';
import { TextInput } from '../atoms/text-input';
import { FormLayout } from '../layouts/form-layout';
import { InputLayout } from '../layouts/input-layout';
import { FormGroup } from '../molecules/form-group';
import { FormSection } from '../molecules/form-section';
import { ListRow } from '../molecules/list-row';

export default {
    title: 'Templates/Formlayouts',
    // includeStories: [], // or don't load this file at all
};

export const Overview = () => {
    return (
        <>
            <p style={{ margin: '3rem' }}>
                Example sections build with ListRows, FormLayout and InputLayout
            </p>

            <FormLayout>
                <InputLayout colSize={2} style={{ border: '1px solid', padding: '10px' }}>
                    <FormGroup label="Actief van">
                        <TextInput name="agb" value={'agb'} onChange={() => null} />
                    </FormGroup>
                </InputLayout>
                <InputLayout colSize={2} style={{ border: '1px solid', padding: '10px' }}>
                    <FormGroup label="Actief van" insetPadding>
                        <Text fontSize={300} as="p" fontWeight="medium">
                            agb
                        </Text>
                    </FormGroup>
                </InputLayout>
                <InputLayout colSize={2} style={{ border: '1px solid', padding: '10px' }}>
                    <FormGroup label="Actief van">
                        <TextInput name="agb" value={'agb'} onChange={() => null} readOnly />
                    </FormGroup>
                </InputLayout>
            </FormLayout>
        </>
    );
};

Overview.storyName = 'Overview';

export const ListRowEdit = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [anotherValue, setAnotherValue] = useState<string>('');

    return (
        <>
            <ListRow onClick={action('Clicked trash icon button')} icon="delete">
                <FormGroup label="Formlabel">
                    <FormLayout
                        align="center"
                        items={[
                            <TextInput
                                key={1}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="inputfield"
                            />,
                            <Text as="small" fontSize={100} key={2}>
                                t/m
                            </Text>,
                            <TextInput
                                key={3}
                                value={anotherValue}
                                onChange={(e) => setAnotherValue(e.target.value)}
                                placeholder="inputfield"
                            />,
                        ]}
                    />
                </FormGroup>
            </ListRow>
        </>
    );
};

ListRowEdit.storyName = 'ListRowEdit';

export const ListRowsRead = () => {
    return (
        <FormSection>
            <ListRow>
                <FormGroup label="Formlabel" insetPadding>
                    <FormLayout
                        items={[
                            <Text fontSize={300} as="p" fontWeight="medium" key={1}>
                                Text Component
                            </Text>,
                            <Text as="small" fontSize={100} key={2}>
                                t/m
                            </Text>,
                            <Text fontSize={300} as="p" fontWeight="medium" key={3}>
                                Text Component
                            </Text>,
                        ]}
                    />
                </FormGroup>
            </ListRow>
        </FormSection>
    );
};

ListRowsRead.storyName = 'ListRowsRead';

export const StackedInputs = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [email, setEmail] = useState<boolean>(false);
    const [persEmail, setPersEmail] = useState<boolean>(false);
    const [errors, setErrors] = useState<boolean>(false);

    const customStyles = {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: '10px',
    };
    return (
        <FormSection>
            <Link style={{ marginBottom: '16px' }} onClick={() => setErrors(!errors)}>
                Toggle error state
            </Link>
            <FormGroup label="Ontvangen op" haserrors={errors}>
                <FormLayout
                    layout="stacked"
                    items={[
                        <FormLayout layout="condensed" key={1}>
                            <InputLayout style={customStyles}>
                                <Checkbox
                                    checked={email}
                                    value="value"
                                    id="1"
                                    onChange={() => setEmail(!email)}
                                />
                            </InputLayout>
                            <InputLayout isExpanded>
                                <TextInput
                                    readOnly
                                    value="petra85@outlook.nl (persoonlijke e-mail)"
                                    onChange={() => null}
                                />
                            </InputLayout>
                        </FormLayout>,
                        <FormLayout layout="condensed" key={2}>
                            <InputLayout style={customStyles}>
                                <Checkbox
                                    checked={persEmail}
                                    value="value"
                                    id="1"
                                    onChange={() => setPersEmail(!persEmail)}
                                />
                            </InputLayout>
                            <InputLayout isExpanded>
                                <TextInput
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    error={errors ? 'error message' : undefined}
                                    placeholder="Persoonlijke werkmail"
                                />
                            </InputLayout>
                        </FormLayout>,
                    ]}
                />
            </FormGroup>
        </FormSection>
    );
};

StackedInputs.storyName = 'StackedInputs';

export const AvailabilityList = () => {
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [available, setAvailable] = useState<boolean>(false);
    const [errors, setErrors] = useState<boolean>(false);

    const customStyles = {
        display: 'flex',
        alignItems: 'flex-start',
        height: '40px',
        marginTop: '10px',
    };

    return (
        <>
            <ListRow spacing="large">
                <Link onClick={() => setErrors(!errors)} style={{ marginBottom: '16px' }}>
                    Toggle error state
                </Link>
                <H3 style={{ marginBottom: '16px' }}>Maandag</H3>
                <FormGroup label="Telefonisch beschikbaar" haserrors={errors}>
                    <FormLayout>
                        <InputLayout>
                            <FormLayout layout="condensed">
                                <InputLayout style={customStyles}>
                                    <Checkbox
                                        checked={available}
                                        value="value"
                                        id="1"
                                        onChange={() => setAvailable(!available)}
                                    />
                                </InputLayout>
                                <TextInput
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    placeholder="09:00"
                                    style={{ width: '70px' }}
                                    error={errors ? 'error message' : undefined}
                                    feedbackSize={120}
                                />
                            </FormLayout>
                        </InputLayout>
                        <InputLayout>
                            <Text
                                as="small"
                                fontSize={100}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100%',
                                    height: '40px',
                                    marginTop: '10px',
                                }}
                            >
                                t/m
                            </Text>
                        </InputLayout>
                        <InputLayout>
                            <TextInput
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                placeholder="09:00"
                                style={{ width: '70px' }}
                            />
                        </InputLayout>
                    </FormLayout>
                </FormGroup>
                <FormGroup label="Telefonisch beschikbaar">
                    <FormLayout>
                        <InputLayout>
                            <FormLayout layout="condensed">
                                <Checkbox
                                    checked={available}
                                    value="value"
                                    id="1"
                                    onChange={() => setAvailable(!available)}
                                />
                                <TextInput
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    placeholder="09:00"
                                    style={{ width: '70px' }}
                                />
                            </FormLayout>
                        </InputLayout>
                        <InputLayout>
                            <Text
                                as="small"
                                fontSize={100}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100%',
                                    height: '40px',
                                    padding: '10px',
                                }}
                            >
                                t/m
                            </Text>
                        </InputLayout>
                        <InputLayout>
                            <TextInput
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                placeholder="09:00"
                                style={{ width: '70px' }}
                            />
                        </InputLayout>
                    </FormLayout>
                </FormGroup>
            </ListRow>
        </>
    );
};

AvailabilityList.storyName = 'AvailabilityList';
