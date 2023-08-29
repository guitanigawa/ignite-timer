import styled from 'styled-components'

export const Container = styled.div`
    max-width: 70rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10rem 15rem;
    margin: auto;

    background-color: ${props=>props.theme["gray-800"]};
    
    border-radius: 0.5rem;
`
