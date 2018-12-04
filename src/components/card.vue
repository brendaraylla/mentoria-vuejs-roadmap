<template>
    <div class="card-content" :class="bindClass">
        <div v-text="card.title"></div>
        <p v-if="fromPath" v-text="card.description"></p>
    </div>
</template>

<script>
import Card from '@/entity/Card';

export default {
    data() {
        return {
            // status: "doing"
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        fromPath: {
            type: Boolean,
            required: true
        },
    }, 
    computed: {
        bindClass() {
            // { 'todo': status == 'todo', 'doing': status == 'doing', 'done': status == 'done' }
            if (this.status == 'todo') {
                return { 'todo': true};
            }
            if (this.status == 'doing') {
                return { 'doing': true};
            }
            if (this.status == 'done') {
                return { 'done': true};
            }
        }
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/variable.sass'

.todo,
.doing,
.done
    padding: 0 30px
    margin: 20px
    border-radius: 10px
    height: 40px
    display: flex
    align-items: center
    justify-content: space-around
    
.todo
    background-color: $color-todo
.doing
    background-color: $color-doing
.done
    background-color: $color-done
</style>
