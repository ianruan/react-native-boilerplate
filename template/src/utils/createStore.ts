import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Store } from '@/types/store';

const createStore = <T>(store: Store<T>) => create(immer(store));

export default createStore;
