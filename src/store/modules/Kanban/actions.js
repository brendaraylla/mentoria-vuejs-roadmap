import * as Mutations from '@/store/mutations'
import KanbanService from '@/service/KanbanService'

export default {

    // 1 set kanban p trazer as informaçoes do service
    setKanban({ commit }, month) {
        const service = new KanbanService();
        const status = service.getCardsFromMonth(month)
        commit(Mutations.SET_KANBAN, status);
        console.log("month ", status)
    },


    // 1 add card no todo
    addCardTodo({ commit }, ) {

    },

    moveToDoing({ commit }, card) {
        commit(Mutations.MOVE_TO_DOING, card);
    },

    moveToDone({ commit }, card) {
        commit(Mutations.MOVE_TO_DONE, card);
    },
}