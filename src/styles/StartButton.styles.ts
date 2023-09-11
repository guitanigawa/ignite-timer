import styled from 'styled-components'

export const ButtonContainer = styled.button`
  margin-top: 3.5rem;

  width: 100%;

  padding: 1rem;

  background-color: ${(props) => props.theme['green-500']};

  color: ${(props) => props.theme.white};
  font-weight: 800;
  font-size: 1rem;

  border: 0;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const StartButtonTitle = styled.span`
  margin-left: 0.3rem;
`
