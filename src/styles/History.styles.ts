import styled from 'styled-components'

interface StatusProps {
  status: 'inProgress' | 'finished' | 'stopped'
}

const statusVariants = {
  finished: 'green',
  inProgress: 'yellow',
  stopped: 'red',
}

const statusTexts = {
  finished: 'Concluído',
  inProgress: 'Em andamento',
  stopped: 'Interrompido',
}

export const HistoryContainer = styled.div`
  height: 100%;

  padding: 4rem;
  padding-top: 6rem;

  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.white};

  h1 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  ul {
    width: 100%;
    height: 100%;

    overflow-y: scroll;
  }
`

export const ListItem = styled.div`
  list-style: none;

  display: grid;
  grid-template-columns: 4fr repeat(3, 2fr);
  gap: 3.5rem;
  align-items: center;

  background-color: ${(props) => props.theme['gray-700']};

  margin-bottom: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-300']};
  line-height: 1.6;

  padding: 1rem 1.5rem;
`

export const ListTitle = styled(ListItem)`
  background-color: ${(props) => props.theme['gray-600']};

  border-radius: 8px 8px 0 0;

  color: ${(props) => props.theme.white};
`

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';

    padding: 0.5rem;

    border-radius: 50%;

    background-color: ${(props) => statusVariants[props.status]};
  }

  &::after {
    content: ${statusTexts.inProgress};

    color: white;
    font-size: 1rem;
  }
`
