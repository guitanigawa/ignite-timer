import { Title, TaskNameInput, StepperInput } from "../styles/Input.styles";

export default function Input(){

    return(
        <Title>
            Vou trabalhar em
            {" "}
            <TaskNameInput/>
            {" "}
            durante
            {" "}
            <StepperInput/>
            {" "}
            minutos.
        </Title>



    )


}