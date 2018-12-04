import mock from "./MockMonths";

export default class KanbanService {

    getCardsFromMonth(month, year) {
        return mock.find( kanban => (kanban.year == year && kanban.name == month) ).status;
        
    }
}
