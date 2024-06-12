import { fetchOne } from '@/services/users';
import { type Store, type StoreState } from '@/types/store';
import createStore from '@/utils/createStore';
import { getError } from '@/utils/error';

interface User {
  id: number;
  name: string;
  username: string;
}

interface UserState extends StoreState {
  user: User | null;
}

interface UserActions {
  fetchUser: (id: number) => Promise<void>;
}

export type UserStore = UserState & UserActions;

const initialState: UserState = {
  user: null,
  isPending: false,
  error: null,
};

const userStore: Store<UserStore> = set => ({
  ...initialState,
  fetchUser: async (id: number) => {
    set(state => {
      state.isPending = true;
      state.error = null;
    });

    try {
      const response = await fetchOne(id);
      set(state => {
        state.user = response;
        state.isPending = false;
      });
    } catch (err) {
      set(state => {
        state.isPending = false;
        state.error = getError(err);
      });
    }
  },
});

const useUserStore = createStore(userStore);

export default useUserStore;
