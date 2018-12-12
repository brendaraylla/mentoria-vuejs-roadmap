
import Card from "@/entity/Card";

export default {
    
    getCardNewValue: store => store.card,

    getRoadmap: store => store.roadmap,

    getKanban: store => month => ((store.roadmap.find( kanban => (kanban.name == month) ) || { status: {} }).status),

}