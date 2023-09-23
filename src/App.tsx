import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import Router from './Router'
import { CyclesProvider } from './hooks/useCycles'


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesProvider>
      
        <BrowserRouter>
          <Router />
        </BrowserRouter>

      </CyclesProvider> 
        
        
        <GlobalStyle />
      
      
    </ThemeProvider>
  )
}
