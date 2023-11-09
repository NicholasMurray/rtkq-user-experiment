import { useState, createContext, useContext, useMemo } from "react";

const GlobalStore = createContext(null);

export const EditUserProvider = ({ children }) => {
  const [user, setUser] = useState(0);

  const newVal = useMemo(() => [user, setUser], [user]);

  return <GlobalStore.Provider value={newVal}>{children}</GlobalStore.Provider>;
};

export function useEditUserStore() {
  return useContext(GlobalStore);
}
