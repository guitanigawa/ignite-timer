
import { MainContainer } from '../styles/MainContainer.styles'

import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


import Clock from '../components/Clock'
import Button from '../components/Button'
import { useCycles } from '../hooks/useCycles'
import { useForm } from 'react-hook-form'
import Inputs from '../components/Inputs'


const newCycleFormValidationSchema = zod.object({
    taskName: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
    const { register, handleSubmit, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            taskName: '',
            minutesAmount: 0,
        },
    })


    const { createNewCycle } = useCycles()

  
    return (


        <MainContainer>
            <form onSubmit={handleSubmit(
                (data: NewCycleFormData)=>{
                    createNewCycle(data)
                    reset()
                })}
            >
                <Inputs register={register}/>

                <Clock/>
                
                <Button/>
                
            </form>
        </MainContainer>

        
    )

}
