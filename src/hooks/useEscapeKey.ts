import { useEffect } from 'react';

const useEscapeKey = (callback: () => void) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            callback();
        }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
};

export default useEscapeKey