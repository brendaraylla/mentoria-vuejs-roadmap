
import Card from './Card';

export default class Kanban {
    constructor(status) {
        // console.log("status todo", status.todo)
        // this.todo = [new Card(status.todo)];
        this.todo = status.todo;
        this.doing = status.doing;
        this.done = status.done;
    }

    addCardTodo(card) {
        if(card instanceof Card){
            this.todo.push(card);
            return;
        }

        throw new Error("Precisa ser um card")
    }
    moveToDoing(card) {
        // procurar o card no todo com FindIndex
        // remover o card do TODO com splice
        // adicioar o card no doing com splice ou push  
        // ou
        // https://github.com/SortableJS/Vue.Draggable
    }
}
