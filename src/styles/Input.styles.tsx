import styled from "styled-components"

export const Title = styled.h1`
    color: ${props=>props.theme["white"]};
    font-size: 1.125rem;
    text-align: center
`


export const TaskNameInput = styled.input.attrs({
    type: "text",
    placeholder:"Dê um nome para o seu projeto",
})`

    width: 17rem;
    padding: 0.5rem;
    
    background-color: ${props=>props.theme["gray-800"]};
        
    border: 0;
    border-bottom: 2px solid ${props=>props.theme["gray-500"]};

    color: ${props=>props.theme["white"]};
    font-size: 1.125rem;
    font-weight: 800;
    text-align: center;

    &:focus{
        border-bottom: 2px solid ${props=>props.theme["green-500"]};
    }
`

export const StepperInput = styled.input.attrs({
    type: "number",
    max: "60",
    min: "0"
})`
    width: 4rem


    

`