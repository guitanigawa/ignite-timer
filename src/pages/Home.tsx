import { MainContainer } from '../styles/MainContainer.styles'
import Input from '../components/Input'
import Clock from '../components/Clock'
import Button from '../components/StartButton'

export default function Home(){
    return(
        <MainContainer>
            <Input/>
            <Clock/>
            <Button/>
        </MainContainer>
        
    )


}