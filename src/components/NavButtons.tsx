import { NavButton, NavButtonsContainer} from "../styles/Container.styles"
import { Clock as ClockIcon, List} from "react-feather"

export default function NavButtons(){
    return(
        <NavButtonsContainer>
                <NavButton href="/">
                    <ClockIcon size="2rem"/>
                </NavButton>

                <NavButton href="/history">
                    <List size="2rem"/>
                </NavButton>
        </NavButtonsContainer>
    )

}