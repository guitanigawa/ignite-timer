import styled from 'styled-components'

export const Container = styled.div`
    max-width: 70rem;
    height: calc(100vh - 10rem);

    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 2.5rem;

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
    gap: 1.5rem;
    
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;

    a{
        &:hover{
            color: ${props=>props.theme["green-500"]};
            border-bottom: 2px solid ${props=>props.theme["green-500"]}
        }
        
        cursor: pointer;
        color: white;

        border-bottom: 2px solid transparent;
        padding-bottom: 0.3rem;

        &.active{
            color: ${props=>props.theme["green-500"]};
        }
    }
`

