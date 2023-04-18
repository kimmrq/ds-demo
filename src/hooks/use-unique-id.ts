import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUniqueId = (id?: string) => {
    const [generatedId] = useState(() => uuidv4());
    return id || generatedId;
};
