import styled from "styled-components"

export const ClockContainer = styled.div`
    margin-top: 4rem;
    
    display: flex;
    justify-content: space-between;

    font-size: 10rem;
    color: ${props=>props.theme["green-500"]};
    font-weight: 800;

`

export const MinutesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
`
export const Minutes = styled.label`
    background-color: ${props=>props.theme["gray-700"]};
    
    font-size: 10rem;
    font-weight: 700rem;
    font-family: "Roboto Mono", "sans-serif";
    color: ${props=>props.theme["white"]};
    line-height: 80%;

    padding: 2.5rem 1rem; 

    border-radius: 0.5rem
`
export const SecondsContainer = MinutesContainer

export const Seconds = Minutes

export const TwoDots = styled.span`


`