import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Link } from '../../atoms/link';
import { Popover } from '../../atoms/popover';
import {
    Table,
    TableBody,
    TableCell,
    TableCellExpanded,
    TableCellExpandRow,
    TableCellSelectRow,
    TableContainer,
    TableHead,
    TableHeader,
    TableHeaderSelectAll,
    TableRow,
    TableRowExpanded,
} from './';
import { TableProps } from './table';

export default {
    title: 'Molecules/Table',
    component: Table,
} as Meta;

const rowdata = [
    {
        id: '1001',
        organisatie: 'Arkade Amsterdam',
        plaats: 'Amsterdam',
        aanmeldwachttijd: '2 weken',
        behandelwachttijd: '20 weken',
        specialismen: ['Verslavingshulp', 'Jeugd en gezin', 'Depressies', 'Echtscheidingen'],
    },
    {
        id: '1002',
        organisatie: 'Arkade Basis GGZ',
        plaats: 'Amsterdam',
        aanmeldwachttijd: '3 weken',
        behandelwachttijd: '4 weken',
        specialismen: ['Jeugd en gezin'],
    },
    {
        id: '1003',
        organisatie: 'Arkade Basis GGZ',
        plaats: 'Amsterdam',
        aanmeldwachttijd: '12 weken',
        behandelwachttijd: '6 weken',
        specialismen: ['Verslavingshulp'],
    },
    {
        id: '1004',
        organisatie: 'Arkade Jeugd en Gezin',
        plaats: 'Amsterdam',
        aanmeldwachttijd: '2 weken',
        behandelwachttijd: '12 weken',
        specialismen: ['Jeugd en gezin'],
    },
    {
        id: '1005',
        organisatie: 'Arkade Jeugd en Gezin',
        plaats: 'Amsterdam',
        aanmeldwachttijd: '4 weken',
        behandelwachttijd: '6 weken',
        specialismen: ['Jeugd en gezin'],
    },
];

const rowdata2 = [
    {
        id: '1001',
        organisatie: 'Arkade Amsterdam',
        plaats: 'Amsterdam',
        practitioners: [],
    },
    {
        id: '1002',
        organisatie: 'Arkade Amsterdam',
        plaats: 'Amsterdam',
        practitioners: [
            {
                id: '10021',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
            {
                id: '10022',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
            {
                id: '10023',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
        ],
    },
    {
        id: '1003',
        organisatie: 'Arkade Amsterdam',
        plaats: 'Amsterdam',
        practitioners: [
            {
                id: '10031',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
            {
                id: '10032',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
            {
                id: '10033',
                naam: 'J.B de Zwart',
                functie: 'Klinisch psycholoog',
                specialisatie: ['Verslavingshulp', 'Jeugd en gezin'],
            },
        ],
    },
];

export const TableExample = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Organisatie</TableHeader>
                        <TableHeader>Plaats</TableHeader>
                        <TableHeader>Aanmeld wachttijd</TableHeader>
                        <TableHeader>Behandel wachttijd</TableHeader>
                        <TableHeader>Specialismen</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontWeight: 500 }}>{row.organisatie}</TableCell>
                                <TableCell>{row.plaats}</TableCell>
                                <TableCell>{row.aanmeldwachttijd}</TableCell>
                                <TableCell>{row.behandelwachttijd}</TableCell>
                                <TableCell ellipsis>{row.specialismen}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableExample.storyName = 'Default';

export const TablePopoverExample = () => {
    const renderPopoverContent = (specialisms: string[]) => {
        const values = [...specialisms];
        if (values.length > 1) {
            const lastValue = values.pop();
            return `${values.join(', ')} en ${lastValue}`;
        }
        return values[0];
    };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Organisatie</TableHeader>
                        <TableHeader>Plaats</TableHeader>
                        <TableHeader>Aanmeld wachttijd</TableHeader>
                        <TableHeader>Behandel wachttijd</TableHeader>
                        <TableHeader style={{ width: '200px' }}>Specialismen</TableHeader>
                        <TableHeader />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontWeight: 500 }}>{row.organisatie}</TableCell>
                                <TableCell>{row.plaats}</TableCell>
                                <TableCell>{row.aanmeldwachttijd}</TableCell>
                                <TableCell>{row.behandelwachttijd}</TableCell>
                                <TableCell ellipsis style={{ paddingRight: '8px' }}>
                                    {renderPopoverContent(row.specialismen)}
                                </TableCell>
                                <TableCell style={{ paddingLeft: 0 }}>
                                    <Popover
                                        content={renderPopoverContent(row.specialismen)}
                                        placement="bottom-end"
                                    >
                                        <Link onClick={(e) => e.preventDefault()} tabIndex={0}>
                                            Meer
                                        </Link>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TablePopoverExample.storyName = 'With Popover';

export const TableSortableExample = () => {
    const [sortKey, setSortKey] = useState<string>();
    const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('DESC');

    const handleSort = (key: string) => {
        if (sortKey === key) {
            if (sortDirection === 'ASC') {
                setSortDirection('DESC');
            }
            if (sortDirection === 'DESC') {
                setSortDirection('ASC');
            }
        }
        setSortKey(key);
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader
                            isSortable
                            isSortHeader={sortKey === 'organisatie'}
                            sortDirection={sortDirection}
                            onClick={() => handleSort('organisatie')}
                        >
                            Organisatie
                        </TableHeader>
                        <TableHeader
                            isSortable
                            isSortHeader={sortKey === 'plaats'}
                            sortDirection={sortDirection}
                            onClick={() => handleSort('plaats')}
                        >
                            Plaats
                        </TableHeader>
                        <TableHeader
                            isSortable
                            isSortHeader={sortKey === 'aanmeld wachttijd'}
                            sortDirection={sortDirection}
                            onClick={() => handleSort('aanmeld wachttijd')}
                        >
                            Aanmeld wachttijd
                        </TableHeader>
                        <TableHeader
                            isSortable
                            isSortHeader={sortKey === 'behandel wachttijd'}
                            sortDirection={sortDirection}
                            onClick={() => handleSort('behandel wachttijd')}
                        >
                            Behandel wachttijd
                        </TableHeader>
                        <TableHeader>Specialismen</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontWeight: 500 }}>{row.organisatie}</TableCell>
                                <TableCell>{row.plaats}</TableCell>
                                <TableCell>{row.aanmeldwachttijd}</TableCell>
                                <TableCell>{row.behandelwachttijd}</TableCell>
                                <TableCell ellipsis>{row.specialismen}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableSortableExample.storyName = 'With sorting';

const TableSelectionTemplate: Story<TableProps> = (args) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const isRowSelected = (id: string) => selectedRows.indexOf(id) !== -1;
    const numSelected = selectedRows.length;
    const rowCount = rowdata.length;

    const handleSelectAll = () => {
        if (numSelected >= 0 && numSelected < rowCount) {
            const newSelecteds = rowdata.map((row) => row.id);
            setSelectedRows(newSelecteds);
            return;
        }
        setSelectedRows([]);
    };

    const handleSelectRow = (id: string) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedRows, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1),
            );
        }

        setSelectedRows(newSelected);
    };

    return (
        <TableContainer>
            <Table {...args}>
                <TableHead>
                    <TableRow>
                        <TableHeaderSelectAll
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected > 0}
                            onSelect={handleSelectAll}
                        />
                        <TableHeader>Organisatie</TableHeader>
                        <TableHeader>Plaats</TableHeader>
                        <TableHeader>Aanmeld wachttijd</TableHeader>
                        <TableHeader>Behandel wachttijd</TableHeader>
                        <TableHeader>Specialismen</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata.map((row) => {
                        const isSelected = isRowSelected(row.id);
                        return (
                            <TableRow key={row.id}>
                                <TableCellSelectRow
                                    isSelected={isSelected}
                                    onSelect={() => handleSelectRow(row.id)}
                                />
                                <TableCell style={{ fontWeight: 500 }}>{row.organisatie}</TableCell>
                                <TableCell>{row.plaats}</TableCell>
                                <TableCell>{row.aanmeldwachttijd}</TableCell>
                                <TableCell>{row.behandelwachttijd}</TableCell>
                                <TableCell ellipsis>{row.specialismen}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export const WithSelection = TableSelectionTemplate.bind({});

WithSelection.args = {
    spacing: 'none',
    transparentHeader: false,
};
WithSelection.storyName = 'With selection';

export const WithSelectionAndSpacing = TableSelectionTemplate.bind({});

WithSelectionAndSpacing.args = {
    spacing: 'medium',
    transparentHeader: true,
};

WithSelectionAndSpacing.decorators = [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => <div style={{ padding: '3em', background: '#faf9f8' }}>{Story()}</div>,
];

WithSelectionAndSpacing.storyName = 'With selection and spacing';

export const TableExpandableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const handleOnExpandRow = (rowId: string) => {
        const newExpandedRows = expandedRows.slice();
        const index = newExpandedRows.indexOf(rowId);
        if (index >= 0) {
            newExpandedRows.splice(index, 1);
            setExpandedRows(newExpandedRows);
        } else {
            newExpandedRows.push(rowId);
            setExpandedRows(newExpandedRows);
        }
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader />
                        <TableHeader>Organisatie, specialist</TableHeader>
                        <TableHeader>Plaats</TableHeader>
                        <TableHeader>Functie specialist</TableHeader>
                        <TableHeader>Specialisatie</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata2.map((row) => {
                        const isExpanded = expandedRows.includes(row.id);
                        return (
                            <React.Fragment key={row.id}>
                                <TableRow>
                                    <TableCellExpandRow
                                        onExpand={() => handleOnExpandRow(row.id)}
                                        isExpandable={row.practitioners.length !== 0}
                                        isExpanded={isExpanded}
                                    />
                                    <TableCell style={{ fontWeight: 500 }}>
                                        {row.organisatie}
                                    </TableCell>
                                    <TableCell>{row.plaats}</TableCell>
                                    <TableCell />
                                    <TableCell />
                                </TableRow>
                                {row.practitioners.map((row) => {
                                    return (
                                        <TableRowExpanded key={row.id} isExpanded={isExpanded}>
                                            <TableCellExpanded />
                                            <TableCellExpanded>{row.naam}</TableCellExpanded>
                                            <TableCellExpanded />
                                            <TableCellExpanded>{row.functie}</TableCellExpanded>
                                            <TableCellExpanded>
                                                {row.specialisatie}
                                            </TableCellExpanded>
                                        </TableRowExpanded>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableExpandableExample.storyName = 'With expansion';

export const TableSelectableExpandableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const isRowSelected = (id: string) => selectedRows.indexOf(id) !== -1;
    const numSelected = selectedRows.length;
    const rowCount = rowdata.length;

    const handleSelectAll = () => {
        if (numSelected >= 0 && numSelected < rowCount) {
            const newSelecteds = rowdata.map((row) => row.id);
            setSelectedRows(newSelecteds);
            return;
        }
        setSelectedRows([]);
    };

    const handleSelectRow = (id: string) => {
        const selectedIndex = selectedRows.indexOf(id);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedRows, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1),
            );
        }

        setSelectedRows(newSelected);
    };

    const handleOnExpandRow = (rowId: string) => {
        const newExpandedRows = expandedRows.slice();
        const index = newExpandedRows.indexOf(rowId);
        if (index >= 0) {
            newExpandedRows.splice(index, 1);
            setExpandedRows(newExpandedRows);
        } else {
            newExpandedRows.push(rowId);
            setExpandedRows(newExpandedRows);
        }
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderSelectAll
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected > 0}
                            onSelect={handleSelectAll}
                        />
                        <TableHeader />
                        <TableHeader>Organisatie, specialist</TableHeader>
                        <TableHeader>Plaats</TableHeader>
                        <TableHeader>Functie specialist</TableHeader>
                        <TableHeader>Specialisatie</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowdata2.map((row) => {
                        const isExpanded = expandedRows.includes(row.id);
                        const isSelected = isRowSelected(row.id);
                        return (
                            <React.Fragment key={row.id}>
                                <TableRow>
                                    <TableCellSelectRow
                                        isSelected={isSelected}
                                        onSelect={() => handleSelectRow(row.id)}
                                    />
                                    <TableCellExpandRow
                                        onExpand={() => handleOnExpandRow(row.id)}
                                        isExpandable={row.practitioners.length !== 0}
                                        isExpanded={isExpanded}
                                    />
                                    <TableCell style={{ fontWeight: 500 }}>
                                        {row.organisatie}
                                    </TableCell>
                                    <TableCell>{row.plaats}</TableCell>
                                    <TableCell />
                                    <TableCell />
                                </TableRow>
                                {row.practitioners.map((row) => {
                                    return (
                                        <TableRowExpanded key={row.id} isExpanded={isExpanded}>
                                            <TableCellExpanded isSelected={isSelected} />
                                            <TableCellExpanded />
                                            <TableCellExpanded>{row.naam}</TableCellExpanded>
                                            <TableCellExpanded />
                                            <TableCellExpanded>{row.functie}</TableCellExpanded>
                                            <TableCellExpanded>
                                                {row.specialisatie}
                                            </TableCellExpanded>
                                        </TableRowExpanded>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableSelectableExpandableExample.storyName = 'With selection & expansion';
