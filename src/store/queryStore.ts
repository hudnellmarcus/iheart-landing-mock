import {create } from 'zustand';

interface QueryState {
    initialQuery: string | undefined;
    setInitialQuery: (query: string | undefined) => void;
}

export const useQueryStore = create<QueryState>((set) => ({
    initialQuery: undefined,
    setInitialQuery: (query) => set({ initialQuery: query }),
}));