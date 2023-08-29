import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Container } from './styles/Container.styles'
import { MainContainer } from './styles/MainContainer.styles'
import Input from './components/Input'
import Clock from './components/Clock'
import Button from './components/Button'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <MainContainer>
          <Input/>
          <Clock/>
          <Button/>
        </MainContainer>
        
      
      
      </Container>

      
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
