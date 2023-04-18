import { createContext } from 'react';

export type TableStyleType = {
    spacing?: 'none' | 'medium';
    transparentHeader?: boolean;
};

export const TableContext = createContext<TableStyleType>({});
