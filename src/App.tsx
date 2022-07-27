import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'

interface ThemeContextType {
  isDefaultTheme: boolean
  toogleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function App() {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true)

  function toogleTheme() {
    setIsDefaultTheme((state) => !state)
  }

  return (
    <ThemeProvider theme={isDefaultTheme ? defaultTheme : lightTheme}>
      <ThemeContext.Provider value={{ isDefaultTheme, toogleTheme }}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
