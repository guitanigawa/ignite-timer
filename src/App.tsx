import { Clock as ClockIcon, List} from "react-feather"

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { Container, Logo, NavButtonsContainer, NavButtons } from './styles/Container.styles'
import { MainContainer } from './styles/MainContainer.styles'
import Input from './components/Input'
import Clock from './components/Clock'
import Button from './components/StartButton'
import LogoImg from "./assets/Logo.svg"


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <NavButtonsContainer>
          <NavButtons>
            <ClockIcon size="2rem"/>
          </NavButtons>

          <NavButtons>
            <List size="2rem"/>
          </NavButtons>
        </NavButtonsContainer>

        <Logo src={LogoImg}/>

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
