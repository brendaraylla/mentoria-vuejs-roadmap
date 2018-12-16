<template>
    <div class="content-months">
        <div class="card" :class="bindClass">
            <card-item v-for="(card, index) in month.status.todo" :key="card.id"
                       v-show="index < 1"
                       :card="card"
                       :status="'todo'"
                       :fromPath="false">
            </card-item>
            <card-item v-for="(card, index) in month.status.doing" :key="card.id"
                       v-show="index < 1"
                       :card="card"
                       :status="'doing'"
                       :fromPath="false">
            </card-item>
            <card-item v-for="(card, index) in month.status.done" :key="card.id"
                       v-show="index < 1"
                       :card="card"
                       :status="'done'"
                       :fromPath="false">
            </card-item>
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
        },
        bindClass() {
            let result = this.month.id % 2;
            if ( result == 0 ) {
                return { 'par': true }
            } else {
                return { 'impar': true }
            }
        }
    },
    components: {
        "card-item" : card
    },
    
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
    position: relative
    &.par
        left: 5%
        width: 200px
    &.impar
        left: 60%
    +media-min-sm
        &.par
            left: 10%
        &.impar
            left: 63%
    +media-min-md
        &.par
            left: 0
            top: 62%
        &.impar
            left: 0
            top: 5%

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
