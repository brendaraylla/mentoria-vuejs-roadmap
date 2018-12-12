import * as Mutations from '@/store/mutations'
import RoadmapService from '@/service/RoadmapService'

export default {

    setRoadmap({ commit }) {
        const service = new RoadmapService();
        const months = service.getMonths();
        commit(Mutations.SET_ROADMAP, months);
    },

    // 1 add card no todo
    addCardTodo({ commit }, ) {

    },

    moveToDoing({ commit }, payload) {
        commit(Mutations.MOVE_TO_DOING, payload);
    },

    moveToDone({ commit }, payload) {
        commit(Mutations.MOVE_TO_DONE, payload);
    },

}