<template>
    <div class="content">
        <div class="container">
            <router-link class="icon-back" :to="{ name: 'Roadmap' }">
                <img src="@/../static/icon/arrow-left-solid.svg" alt="">
            </router-link>
            <div class="todo">
                <h2 class="status">TO DO</h2>
                <card-item></card-item>
            </div>
            <div class="doing">
                <h2 class="status">DOING</h2>

            </div>
            <div class="done">
                <h2 class="status">DONE</h2>

            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card';

export default {
    components: {
        "card-item": Card
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

.content
    background: url('../../../static/img/background-kanban.png') no-repeat center center fixed
    background-size: cover
    background-position: center
    width: 100%
    height: 100%

.container
    display: flex
    flex: 1
    height: 100%
    width: 100%
    justify-content: space-between
    position: relative
    .todo
        flex: 1
        display: flex
        flex-direction: column
        border-right: 2px solid $color-blue
    .doing
        flex: 1
        display: flex
        flex-direction: column
        border-right: 1px solid $color-blue
        border-left: 1px solid $color-blue
    .done
        flex: 1
        display: flex
        flex-direction: column
        border-left: 2px solid $color-blue

.status
    color: $color-blue
    text-align: center
    font-size: 1.8em
    font-family: Roboto
</style>
