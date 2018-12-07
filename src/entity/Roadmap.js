
import Kanban from './Kanban';

export default class Roadmap {
    constructor(months) {
        this.id = months.id,
        this.name = months.name,
        this.year = months.year,
        this.status = new Kanban(months.status)
    };

}