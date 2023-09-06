import { NavLink } from "react-router-dom"
import { NavButtonsContainer} from "../styles/Container.styles"
import { Clock as ClockIcon, List} from "react-feather"

export default function NavButtons(){
    return(
        <NavButtonsContainer>
                <NavLink to="/">
                    <ClockIcon size="2rem"/>
                </NavLink>

                <NavLink to="/history">
                    <List size="2rem"/>
                </NavLink>
        </NavButtonsContainer>
    )

}