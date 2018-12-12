
import Card from './Card';

export default class Kanban {
    constructor(status) {
        this.todo = status.todo.map((card) => {
            return new Card(card); 
          });
        this.doing = status.doing.map((card) => {
            return new Card(card); 
          });
        this.done = status.done.map((card) => {
            return new Card(card); 
          });
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
