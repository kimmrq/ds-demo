import React from 'react';
import styled from 'styled-components';

import { tokenlist } from './tokenlist';

export default {
    title: 'Tokens/Token List',
};

const DemoTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    display: table;
    text-align: left;
    td,
    th {
        padding: 0.5rem;
        width: 50%;
        border: 1px solid #dee2e6;
    }
`;

export const FullTokenList = () => {
    return (
        <>
            <h2>Typography</h2>
            <h4>Tokens Font Weight</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.fontWeight).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Font Family</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.fontFamily).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Font Size</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.fontSize).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Font Style</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.fontStyle).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Line Height</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.LineHeight).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Letter spacing</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.LetterSpacing).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h2>Breakpoints</h2>
            <h4>Tokens Breakpoints</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Breakpoints).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h2>Spacing and sizes</h2>
            <h4>Tokens Spacing</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Spacing).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Spacing Stacked</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Stack).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Spacing Inset</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Stack).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Sizing</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Sizing).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens IconSize</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.IconSize).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h2>Animation</h2>
            <h4>Tokens Easing transitions</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Easing).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Animation duration</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Duration).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Misc.</h4>
            <h4>Tokens Border Radius</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.BorderRadius).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Scrims</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Scrims).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Box shadow</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.BoxShadow).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
            <h4>Tokens Gradients</h4>
            <DemoTable>
                <tbody>
                    {Object.entries(tokenlist.Gradients).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.toString()}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </DemoTable>
        </>
    );
};
