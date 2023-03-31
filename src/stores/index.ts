import {createContext, useContext} from 'react';

class RootStore {
  constructor() {}
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext(StoreContext);
};
export default rootStore;
