import {
  ClockContainer,
  Minutes,
  MinutesContainer,
  Seconds,
  SecondsContainer,
} from '../styles/Clock.styles'

interface ClockProps{
  minutes: string,
  seconds: string
}

export default function Clock({minutes, seconds}: ClockProps) {
 
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
