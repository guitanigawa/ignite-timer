import { useCycles } from "../hooks/useCycles";
import { StepperInput, TaskNameInput, Title } from "../styles/Input.styles";
import { UseFormRegister } from "../../node_modules/react-hook-form/dist/types/form"
import { NewCycleFormData } from "../pages/Home";

interface InputsProps{
    register: UseFormRegister<NewCycleFormData>
}


export default function Inputs({ register }: InputsProps){
    const { activeCycle, cycles } = useCycles()
    

    return(
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

    )
}