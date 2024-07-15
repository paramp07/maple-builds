import React, { createContext, useState } from 'react';

// Create a context
const MenuContext = createContext();

// Create a provider component
const MenuProvider = ({ children }) => {
  // State to manage the menu open/close status
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(true);

  return (
    <MenuContext.Provider value={{ open, setOpen, finished, setFinished }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };