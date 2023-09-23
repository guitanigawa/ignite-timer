import { useCycles } from '../hooks/useCycles'
import {
  HistoryContainer,
  ListItem,
  ListTitle,
  Status,
} from '../styles/History.styles'

export default function History() {
  const { cycles } = useCycles()


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
              <ListItem>
                <label>{cycle.taskName}</label>
                <label>{cycle.minutesAmount}</label>
                <label>{cycle.startDate}</label>
                <Status status={cycle.status.name} />
              </ListItem>
            )


          })


        }
      
        
        
      </ul>
    </HistoryContainer>
  )
}
