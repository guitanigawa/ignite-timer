import { useCycles } from '../hooks/useCycles'
import {
  ClockContainer,
  Minutes,
  MinutesContainer,
  Seconds,
  SecondsContainer,
} from '../styles/Clock.styles'

export default function Clock() {
  
  const { activeCycleTime } = useCycles()
  const { minutes, seconds } = activeCycleTime

  return (
    <ClockContainer>
      <MinutesContainer>
        <Minutes>{minutes[0]}</Minutes>
        <Minutes>{minutes[1]}</Minutes>
      </MinutesContainer>
      :
      <SecondsContainer>
        <Seconds>{seconds[0]}</Seconds>
        <Seconds>{seconds[1]}</Seconds>
      </SecondsContainer>
    </ClockContainer>
  )
}
