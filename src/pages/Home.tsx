import { Title, TaskNameInput, StepperInput } from '../styles/Input.styles'
import { MainContainer } from '../styles/MainContainer.styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import Clock from '../components/Clock'
import { Button } from '../components/Button'

const newCycleFormValidationSchema = zod.object({
    taskName: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export interface Cycle extends NewCycleFormData {
    id: string,
    startDate: Date,
    status: {
        name: "finished" | "stopped" | "inProgress"
        date?: Date
    }
}

export default function Home() {
    const { register, handleSubmit, reset } = useForm<NewCycleFormData>({
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
            startDate: new Date(),
            status: {
                name: "inProgress"
            }
        }

        setCycles((state) => [...state, newCycle])
        setActiveCycleId(newCycle.id)


        reset()

    }

    const handleStopCycle = () => {
        setCycles(state=>{
            return (
                state.map(cycle=>{
                    if(activeCycleId === cycle.id){
                        cycle.status.name = "stopped"
                        cycle.status.date = new Date()
                    }
                    return cycle 
                })
            )
        })

        setActiveCycleId(null)
        document.title = "Ignite Timer"
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

    console.log(cycles)

    useEffect(()=>{
        if(activeCycle) document.title = `${minutes}:${seconds}`
        if(amountSecondsPassed === totalSeconds){
            setCycles(state=>{
                return (
                    state.map(cycle=>{
                        if(activeCycleId === cycle.id){
                            cycle.status.name = "finished"
                            cycle.status.date = new Date()
                        }
                        return cycle 
                    })
                )
            })

            setActiveCycleId(null)
            document.title = "Ignite Timer"
        }
    }, [minutes, seconds, activeCycle])


    return (
        <MainContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <Title>
                    Vou trabalhar em{' '}

                    <TaskNameInput
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto"
                        disabled={!!activeCycle}
                        
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
                        disabled={!!activeCycle}
                        
                        {...register('minutesAmount', {
                            valueAsNumber: true,
                        })}
                    />
                    
                    {' '}
                    
                    minutos.
                
                </Title>

                <Clock minutes={minutes} seconds={seconds}/>
                
                <Button 
                    activeCycle={activeCycle}
                    stopCycle={handleStopCycle}
                />
                
            </form>
        </MainContainer>
    )

}
