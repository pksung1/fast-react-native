import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface CountState {
  count: number;
  increase: () => void;
}

const useCountPersistStore = create<CountState>()(
  persist(
    (set, get) => ({
      count: 0,
      increase: () => set({count: get().count + 1}),
    }),
    {
      name: 'count-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export {useCountPersistStore};
