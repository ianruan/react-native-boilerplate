import type { Store, StoreState } from '@/types/store';
import createStore from '@/utils/createStore';

interface User {
  id: number;
  name: string;
  username: string;
}

interface UserState extends StoreState {
  user: User | null;
}

interface UserActions {
  setUser: (data: User | null) => void;
}

export type UserStore = UserState & UserActions;

const initialState: UserState = {
  user: null,
  isPending: false,
  error: null,
};

const userStore: Store<UserStore> = set => ({
  ...initialState,
  setUser: (data: User | null) => {
    set(state => {
      state.user = data;
    });
  },
});

const useUserStore = createStore(userStore);

export default useUserStore;
