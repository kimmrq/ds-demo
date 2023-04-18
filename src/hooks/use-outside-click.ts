import { RefObject, useEffect } from 'react';

interface UseOutsideClickProps {
    handler: (e: Event) => void;
    ref: RefObject<HTMLElement>;
}

export function useOutsideClick({ ref, handler }: UseOutsideClickProps) {
    useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener(`mousedown`, listener);

        return () => {
            document.removeEventListener(`mousedown`, listener);
        };

        // Reload only if ref or handler changes
    }, [ref, handler]);
}
