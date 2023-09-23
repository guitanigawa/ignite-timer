import { createContext, useEffect, useState, useContext } from "react";
import { NewCycleFormData } from "../pages/Home"
import { differenceInSeconds } from "date-fns";

interface Cycle extends NewCycleFormData {
    id: string,
    startDate: Date,
    status: {
        name: "finished" | "stopped" | "inProgress"
        date?: Date
    }
}

interface CyclesContext{
    cycles: Cycle[],
    activeCycle: Cycle | undefined,
    activeCycleTime: {
        minutes: string,
        seconds: string
    }
    createNewCycle: (data: NewCycleFormData) => void,
    stopCycle: () => void
}


const CyclesContext = createContext<CyclesContext>({} as CyclesContext)

export function CyclesProvider({ children } : React.PropsWithChildren ){
    
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


    const createNewCycle = (data: NewCycleFormData) => {
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
    }

    const stopCycle = () => {
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

    const activeCycleTime = { minutes, seconds}

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




    return(
        <CyclesContext.Provider value={{ cycles, activeCycle, createNewCycle, stopCycle, activeCycleTime }}>
            { children }
        </CyclesContext.Provider>

    )
}

export function useCycles(){
    return useContext(CyclesContext)
}