
import * as Mutations from '@/store/mutations'

export default {

    [Mutations.SET_ROADMAP](store, roadmap) {
        store.roadmap = roadmap;
    },

    [Mutations.MOVE_TO_DOING](store, { month, card }) {
        const roadmapMonth = store.roadmap.find( n => n.name == month );
        // const todo = roadmapMonth.status.todo.filter( c => c.id != card.id);
        roadmapMonth.status.todo = roadmapMonth.status.todo.filter( c => c.id != card.id);
        roadmapMonth.status.doing.push(card);
    },
    
    [Mutations.MOVE_TO_DONE](store, { month, card }) {
        const roadmapMonth = store.roadmap.find( n => n.name == month );
        const doing = roadmapMonth.status.doing.filter( c => c.id != card.id);
        roadmapMonth.status.doing = doing;
        roadmapMonth.status.done.push(card);
    },
    
}