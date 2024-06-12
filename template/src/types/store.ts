import type { StateCreator } from 'zustand';

export interface StoreState {
  isPending: boolean;
  error: Error | null;
}

export type Store<T> = StateCreator<T, [['zustand/immer', never]]>;
