import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function usePrevious(value: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
