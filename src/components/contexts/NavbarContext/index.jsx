import React from 'react';


export const NavbarContext = React.createContext(defaultValue);
export const useNavbar = () => {
  return React.useContext(NavbarContext);
};

const NavbarProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [route, setRoute] = React.useState(defaultRoute);

  const value = React.useMemo(() => {
    return {
      currentTab,
      route,
      setRoute,
      setCurrentTab,
    };
  }, [currentTab, route]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
