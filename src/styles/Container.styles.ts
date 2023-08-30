import styled from 'styled-components'

export const Container = styled.div`
    max-width: 70rem;

    display: flex;
    align-items: center;
    justify-content: center;
 
    padding: 10rem 0;
    margin: auto;

    background-color: ${props=>props.theme["gray-800"]};
    
    border-radius: 0.5rem;

    position: relative;
`

export const Logo = styled.img`
    position: absolute;
    top: 2.5rem;
    left: 2.5rem
`

export const NavButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
`
export const NavButtons = styled.span`
    :hover{
        color: ${props=>props.theme["green-500"]}
    }

    cursor: pointer;
    color: white;
`
