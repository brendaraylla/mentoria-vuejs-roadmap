<template>
    <div class="content-kanban">
        <div class="container">
            <router-link class="icon-back" :to="{ name: 'Roadmap' }">
                <img src="@/../static/icon/arrow-left-solid.svg" alt="">
            </router-link>
            <div class="todo">
                <h2 class="status">TO DO</h2>
                <div class="cards">
                    <card-item v-for="card in status.todo" :key="card.id" 
                               @moveCard="localMoveToDoing(month, card)" :card="card" :status="'todo'" :fromPath="true">
                    </card-item>
                </div>
            </div>
            <div class="doing">
                <h2 class="status">DOING</h2>
                <div class="cards">
                    <card-item v-for="card in status.doing" :key="card.id" 
                               @moveCard="localMoveToDone(month, card)" :card="card" :status="'doing'" :fromPath="true">
                    </card-item>
                </div>
            </div>
            <div class="done">
                <h2 class="status">DONE</h2>
                <div class="cards">
                    <card-item v-for="card in status.done" :key="card.id" 
                               :card="card" :status="'done'" :fromPath="true" :action="false">
                    </card-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card';
import KanbanService from '@/service/KanbanService';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    components: {
        "card-item": Card
    },
    props: {
        year: {
            type: Number,
            required: true
        },
        month: {
            type: String,
            required: true
        },
    },
    computed: {
        ...mapGetters([
            'getKanban',
        ]),
        status() {
            return this.getKanban(this.month);
        }
    },
    methods: {
        ...mapActions([
            'moveToDoing',
            'moveToDone',
        ]),
        localMoveToDoing(month, card) {
            const payload = { month, card }
            this.moveToDoing( payload );
        },
        localMoveToDone(month, card) {
            const payload = { month, card }
            this.moveToDone( payload );
        }, 
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'
@import url('https://fonts.googleapis.com/css?family=Roboto:300')

.icon-back
    position: absolute
    left: 25px
    top: 25px

.content-kanban
    background: url('../../../static/img/background-kanban.png') no-repeat center center fixed
    background-size: cover
    background-position: center
    width: 100%
    height: 100%
    overflow: auto
    
.container
    display: flex
    flex-direction: column
    flex: 1
    .todo
        display: flex
        flex-direction: column
        border-right: 2px solid $color-blue
    .doing
        display: flex
        flex-direction: column
        border-right: 1px solid $color-blue
        border-left: 1px solid $color-blue
    .done
        display: flex
        flex-direction: column
        border-left: 2px solid $color-blue
    +media-min-md
        height: 100%
        flex-direction: row
        .todo, .doing, .done
            flex: 1

.status
    color: $color-blue
    text-align: center
    font-size: 1.8em
    font-family: Roboto

.cards
    height: 100%
    .content-card
        height: 120px
    
</style>
