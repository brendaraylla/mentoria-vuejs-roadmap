import mock from "./MockMonths";
import Card from "@/entity/Card";

export default class KanbanService {

    getCardsFromMonth(month) {
        const cardsStatus = mock.find( kanban => (kanban.name == month) ).status;

        cardsStatus.todo = cardsStatus.todo.map((card) => {
          return new Card(card); 
        });
        cardsStatus.doing = cardsStatus.doing.map((card) => {
          return new Card(card); 
        });
        cardsStatus.done = cardsStatus.done.map((card) => {
          return new Card(card); 
        });
        return cardsStatus;
        // console.log("kanban service", cardsStatus)
    }
}


//1- refatorar metodo getCardsFromMonth
//2- passar o mock pela entidade de card
//3- usar vuex pras alteraçoes de card
