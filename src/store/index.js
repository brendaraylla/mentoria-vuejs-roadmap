import Vue from 'vue';
import Vuex from 'vuex';

import Kanban from './modules/Kanban';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Kanban,
    },

});