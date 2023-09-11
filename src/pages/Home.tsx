import { Title, TaskNameInput, StepperInput } from '../styles/Input.styles'
import { ClockContainer, Minutes, MinutesContainer } from '../styles/Clock.styles'
import { MainContainer } from '../styles/MainContainer.styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useEffect, useState } from 'react'
import { ButtonContainer, StartButtonTitle } from '../styles/StartButton.styles'
import { Play } from 'react-feather'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
    taskName: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle extends NewCycleFormData {
    id: string,
    startDate: Date
}

export default function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            taskName: '',
            minutesAmount: 0,
        },
    })

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


    const handleCreateNewCycle = (data: NewCycleFormData) => {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            taskName: data.taskName,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, newCycle])
        setActiveCycleId(newCycle.id)


        reset()

    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    useEffect(()=>{
        const interval = activeCycle ? (
            setInterval(()=>{
                setAmountSecondsPassed(
                        differenceInSeconds(new Date(), activeCycle.startDate)
                )
            }, 1000)
        ) : undefined

        return ()=>{
            clearInterval(interval)
            setAmountSecondsPassed(0)
        }
    
    }, [activeCycle])

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
    
    const minutesAmount = String(Math.floor(currentSeconds / 60))
    const secondsAmount = String(currentSeconds % 60)
    
    const minutes = minutesAmount.padStart(2, "0")
    const seconds = secondsAmount.padStart(2, "0")

    useEffect(()=>{
        if(activeCycle) document.title = `${minutes}:${seconds}`
    }, [minutes, seconds, activeCycle])


    const task = watch('taskName')
    const isButtonDisabled = !task
    return (
        <MainContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <Title>
                    Vou trabalhar em{' '}

                    <TaskNameInput
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto"
                        {...register('taskName')}
                    />

                    <datalist id="task-suggestions">
                        {cycles.map(cycle => <option key={cycle.id} value={cycle.taskName} />)}
                    </datalist>

                    {' '}

                    durante

                    {' '}

                    <StepperInput
                        placeholder="00"
                        {...register('minutesAmount', {
                            valueAsNumber: true,
                        })}
                    />
                    
                    {' '}
                    
                    minutos.
                
                </Title>

                <ClockContainer>
                    <MinutesContainer>
                        <Minutes>{minutes[0]}</Minutes>
                        <Minutes>{minutes[1]}</Minutes>
                    </MinutesContainer>
                    :
                    <MinutesContainer>
                        <Minutes>{seconds[0]}</Minutes>
                        <Minutes>{seconds[1]}</Minutes>
                    </MinutesContainer>
                </ClockContainer>

                
                <ButtonContainer 
                    disabled={isButtonDisabled}
                    type="submit"
                >
                    <Play/>
                    <StartButtonTitle>
                        Começar
                    </StartButtonTitle>
                </ButtonContainer>
            </form>
        </MainContainer>
    )

}
