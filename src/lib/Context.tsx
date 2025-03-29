"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveItemContextType {
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const ActiveItemContext = createContext<ActiveItemContextType | undefined>(undefined);

export const useActiveItem = () => {
    const context = useContext(ActiveItemContext);
    if (!context) {
        throw new Error('useActiveItem must be used within an ActiveItemProvider');
    }
    return context;
};

export const Provider = ({ children }: { children: ReactNode }) => {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
            {children}
        </ActiveItemContext.Provider>
    );
};