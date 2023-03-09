import { create } from 'zustand';

interface CountStore {
  count: number;
  increment: () => void;
}

export const useCountStore = create<CountStore>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));
