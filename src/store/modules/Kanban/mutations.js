
import * as Mutations from '@/store/mutations'
import Card from '@/entity/Card'

export default {

    [Mutations.SET_ROADMAP](store, roadmap) {
        store.roadmap = roadmap;
    },

    [Mutations.ADD_CARD_TODO](store, month) {
        const roadmapMonth = store.roadmap.find( n => n.name == month );
        let card = {
            id: Math.random(),
            title: "",
            description: "",
        };
        
        roadmapMonth.status.todo.unshift(new Card(card))
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