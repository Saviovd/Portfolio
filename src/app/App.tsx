import GlobalStyle from "../styles/global"
import { useState } from 'react'
import { variables } from "./shared/variables/variables"
import { Home } from "./pages"
import { ThemeContext } from "./shared/contexts/themeContext"
import { ThemeProvider } from "styled-components"


function App() {
  const [theme] = useState(variables)
  return (<>
  <ThemeContext.Provider value={{theme}}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
    </ThemeProvider>
  </ThemeContext.Provider>
  </>)
}

export default App
