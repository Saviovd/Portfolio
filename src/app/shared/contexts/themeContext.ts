import { createContext } from "react";

type IContextTheme = {
    theme: object
} 

export const ThemeContext = createContext<IContextTheme>({} as IContextTheme);

