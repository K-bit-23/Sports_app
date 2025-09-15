
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

// Define a specific type for the color scheme to exclude null/undefined
export type AppColorScheme = NonNullable<ColorSchemeName>;

// Define the shape of the context value
interface ThemeContextValue {
  colorScheme: AppColorScheme;
  setColorScheme: (colorScheme: AppColorScheme) => void;
}

// Create the context with a default value and correct type
export const ThemeContext = createContext<ThemeContextValue>({
  colorScheme: 'light',
  setColorScheme: () => {},
});

// Define the props for the provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get initial color scheme, default to 'light' if null/undefined
  const [colorScheme, setColorSchemeState] = useState<AppColorScheme>(
    Appearance.getColorScheme() ?? 'light'
  );

  useEffect(() => {
    // Listen for changes in the device's color scheme
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      setColorSchemeState(newColorScheme ?? 'light');
    });

    // Clean up the listener on unmount
    return () => subscription.remove();
  }, []);

  // Function to manually set the color scheme
  const setColorScheme = (newColorScheme: AppColorScheme) => {
    setColorSchemeState(newColorScheme);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
