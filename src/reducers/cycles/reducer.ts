import { Cycle } from "../../hooks/useCycles"

interface CyclesState{
    cycles: Cycle[],
    activeCycleId: string | null,

}

export enum ActionTypes{
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    MARK_CYCLE_FINISHED = "MARK_CYCLE_FINISHED",
    MARK_CYCLE_STOPPED = "MARK_CYCLE_STOPPED"
}


export function cyclesReducer(state: CyclesState, action: any ){
    
    const { cycles, activeCycleId } = state
    const { type } = action 

    switch(type){
        

        case ActionTypes.ADD_NEW_CYCLE:
            const { newCycle, newCycleId } = action.payload           
            
            return {
                activeCycleId: newCycleId,
                cycles: [...cycles , newCycle]
            }
        
        case ActionTypes.MARK_CYCLE_FINISHED:
            const cyclesWithCycleFinished = cycles.map(cycle=>{
                const { status, id } = cycle
                
                if(activeCycleId === id){
                    status.name = "finished"
                    status.date = new Date()
                }
                
                return cycle 
            })    

            return {
                activeCycleId: null, 
                cycles: cyclesWithCycleFinished
            }
        case ActionTypes.MARK_CYCLE_STOPPED:
            const cyclesWithCycleStopped = cycles.map(cycle=>{
                const { status, id } = cycle

                if(activeCycleId === id){
                    status.name = "stopped"
                }
                
                return cycle 
            })

            return {
                activeCycleId: null,
                cycles: cyclesWithCycleStopped
            }
        default:
            return state
    }
}