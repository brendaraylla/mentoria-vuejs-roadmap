
import * as Mutations from '@/store/mutations'

export default {

    [Mutations.SET_KANBAN](store, status) {
        store.todo = status.todo;
        store.doing = status.doing;
        store.done = status.done;
    },

    // add todo
    // [Mutations.ADD_TODO](store, status) {
    //     store.todo = status.todo;
    // },
    
    // // add doing
    // [Mutations.ADD_DOING](store, status) {
    //     store.doing = status.doing;
    // },

    // // add done
    // [Mutations.ADD_DONE](store, status) {
    //     store.done = status.done;
    // },

    [Mutations.MOVE_TO_DOING](store, card) {
        store.doing = card;
        // tirar do todo
        // por no doing
    },
    
    [Mutations.MOVE_TO_DONE](store, card) {
        store.doing = card;
    },
    
}