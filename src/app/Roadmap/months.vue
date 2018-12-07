<template>
    <div class="content-months">
        <div class="card">
            <card-item v-for="card in month.status.todo"  :key="card.id" :card="card" :status="'todo'"  :fromPath="false"></card-item>
            <card-item v-for="card in month.status.doing" :key="card.id" :card="card" :status="'doing'" :fromPath="false"></card-item>
            <card-item v-for="card in month.status.done"  :key="card.id" :card="card" :status="'done'"  :fromPath="false"></card-item>
        </div>
        <div class="button">
            <router-link :to="{ name: 'Kanban', params: {year: month.year, month: month.name} }">
                <button class="months">{{ monthUpperCase }}</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import card from "@/components/card";

export default {
    props: {
        month: {
            type: Object,
            required: true,
        },
        
    },
    computed: {
        monthUpperCase() {
            return this.month.name.toUpperCase();
        }
    },
    components: {
        "card-item" : card
    },
    mounted() {
        // console.log(this.month.status);
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'

.content-months
    overflow: hidden
    display: flex
    align-items: center
    width: 100%
    height: 100%
    position: relative
    +media-min-md
        flex-direction: column
        height: 100%

.card
    width: 150px
    position: relative
    +media-min-sm
        left: 5%
        width: 200px
    +media-min-md
        height: 100%
        left: 0

.button
    display: flex
    align-items: center
    position: absolute
    top: 43%
    left: 45%
    +media-min-md
        left: 25%
    +media-min-lg
        left: 22%

.months
    cursor: pointer
    background: transparent
    color: $color-font
    border: 5px solid $color-blue
    height: 65px
    width: 65px
    border-radius: 50%
    padding: 5px
    font-size: 18px
    +media-min-sm
        height: 80px
        width: 80px
        font-size: 22px
    +media-min-md
        border: 7px solid $color-blue
        height: 90px
        width: 90px
        font-size: 24px
    +media-min-lg
        border: 7px solid $color-blue
        height: 110px
        width: 110px
        font-size: 26px
</style>
