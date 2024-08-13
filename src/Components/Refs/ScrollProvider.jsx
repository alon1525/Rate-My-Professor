import React, { createContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToSection, setScrollToSection] = useState(null);

  const registerScrollSection = (ref) => {
    setScrollToSection(() => ref);
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, registerScrollSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
