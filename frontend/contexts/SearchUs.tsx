/** @format */

import { ReactNode, useState } from "react";
import { createContext } from "react";
type ChildrenType = {
  children: ReactNode;
};
type contextType = {
  isSearchVisible: boolean;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const initial = {
  isSearchVisible: false,
  setIsSearchVisible: () => {},
};

export const SearchVisiblityContext = createContext<contextType>(initial);
export const SearchVisiblity = ({ children }: ChildrenType) => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  return (
    <SearchVisiblityContext.Provider
      value={{ isSearchVisible, setIsSearchVisible }}>
      {children}
    </SearchVisiblityContext.Provider>
  );
};
