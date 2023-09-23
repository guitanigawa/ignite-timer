import styled from 'styled-components'

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  text-align: center;
`

export const TaskNameInput = styled.input.attrs({
  type: 'text',
})`
  width: 17rem;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['gray-800']};

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  font-weight: 800;
  text-align: center;

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const StepperInput = styled(TaskNameInput).attrs({
  type: "number",
  step: 5,
})`
  width: 4rem;
`
