/** @format */

import { ReactNode, useState } from "react";
import { createContext } from "react";
type ChildrenType = {
  children: ReactNode;
};
type contextType = {
  isContactVisible: boolean;
  setIsContactVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const initial = {
  isContactVisible: false,
  setIsContactVisible: () => {},
};

export const ContactVisiblityContext = createContext<contextType>(initial);
export const ContactVisiblity = ({ children }: ChildrenType) => {
  const [isContactVisible, setIsContactVisible] = useState<boolean>(false);
  return (
    <ContactVisiblityContext.Provider
      value={{ isContactVisible, setIsContactVisible }}>
      {children}
    </ContactVisiblityContext.Provider>
  );
};
