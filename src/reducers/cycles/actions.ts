import { Cycle } from "../../hooks/useCycles";
import { ActionTypes } from "./reducer";

export const Actions = {
    addNewCycle: (newCycle: Cycle)=>{
        return {
            type: ActionTypes.ADD_NEW_CYCLE,
            payload: {
                newCycle,
                newCycleId: newCycle.id
            }
        }
    },
    markCycleStopped: ()=>{
        return { 
            type: "MARK_CYCLE_STOPPED" 
        }
    },
    markCycleFinished: ()=>{
        return { 
            type: "MARK_CYCLE_FINISHED"
        }
    }
}