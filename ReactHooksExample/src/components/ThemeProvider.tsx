import { createContext, useContext, useState } from "react";
interface ThemeProviderProps {
  children: React.ReactNode;
}
type ThemeType = "dark" | "light";
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => { },
});
export const ThemeProvider = (props: ThemeProviderProps) =>{
  const [theme, setTheme] = useState<ThemeType>("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.classList.toggle("dark");
  }
  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
};
export const useTheme = () => useContext(ThemeContext);