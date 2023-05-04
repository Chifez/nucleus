import { createContext, useState, ReactNode } from "react";

export const sideBarContext = createContext({
  isOpen: false,
  toggleOpen: () => {},
});

interface Props {
  children: ReactNode | ReactNode[];
}

const SidebarProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <sideBarContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </sideBarContext.Provider>
  );
};

export default SidebarProvider;
