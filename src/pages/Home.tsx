import { Title, TaskNameInput, StepperInput } from "../styles/Input.styles";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MainContainer } from '../styles/MainContainer.styles'
import Clock from '../components/Clock'
import Button from '../components/StartButton'
import zod from "zod"




const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60) 
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home(){
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0
        }
    })

    const handleCreateNewCycle = (data: NewCycleFormData) => {
        console.log(data)
        reset()
    }

    const task = watch("task")
    const isButtonDisabled = !task



    return(
        <MainContainer>
           <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                    <Title>
                        Vou trabalhar em
                        {" "}
                        <TaskNameInput 
                            list="task-suggestions"   
                            placeholder="Dê um nome para o seu projeto"
                            {...register("task")}
                        />
                        
                        <datalist id="task-suggestions">
                            <option value="oi"/>
                        </datalist>

                        {" "}
                        durante
                        {" "}
                        <StepperInput 
                            placeholder="00"
                            {...register("minutesAmount", {
                                valueAsNumber: true
                            })}
                        />
                        {" "}
                        minutos.
                     </Title>
                
                
                <Clock/>
                <Button disabled={isButtonDisabled}/>
            </form>
        </MainContainer>
        
    )


}