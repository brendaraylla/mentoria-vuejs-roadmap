
import { Card } from 'Card';

export default class Kanban {
    constructor() {
        this.todo = [];
        this.doing = [];
        this.done = [];
    }

    addCardTodo(card) {
        if(card instanceof Card){
            this.todo.push(card);
            return;
        }

        throw new Error("Precisa ser um card")
    }
    moveToDoing(card) {

        
    }
}
