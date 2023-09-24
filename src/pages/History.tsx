import { useCycles } from '../hooks/useCycles'
import {
  HistoryContainer,
  ListItem,
  ListTitle,
  Status,
} from '../styles/History.styles'

export default function History() {
  const { cycles } = useCycles()

  const statusTexts = {
    finished: 'Concluído',
    inProgress: 'Em andamento',
    stopped: 'Interrompido',
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <ListTitle>
        <label>Tarefa</label>
        <label>Duração</label>
        <label>Início</label>
        <label>Status</label>
      </ListTitle>

      <ul>
        { 
          cycles.map(cycle=>{
            
            return(
              <ListItem key={cycle.id}>
                <label>{cycle.taskName}</label>
                <label>{cycle.minutesAmount}</label>
                <label>{}</label>
                <Status status={cycle.status.name}>
                  {statusTexts[cycle.status.name]}
                </Status>
              </ListItem>
            )


            })


        }
      
        
        
      </ul>
    </HistoryContainer>
  )
}
