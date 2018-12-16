<template>
    <div class="content-card" :class="bindClass" @click="openEdit" @mouseleave="closeEdit">
        <button v-if="fromPath && action" class="move-card" @click="moveCard">
            <img src="@/../static/icon/arrow-right-solid.svg" alt="">
        </button>
        <div v-if="!(fromPath && edit)">
            <div class="titulo" v-text="card.title"></div>
            <p v-if="fromPath" v-text="card.description"></p>
        </div>
        <form v-if="fromPath && edit">
            <input class="titulo edit" v-model="card.title" />
            <textarea class="edit" rows="3" v-model="card.description"></textarea>
        </form>
    </div>
</template>

<script>
import Card from '@/entity/Card';

export default {
    data() {
        return {
            edit: false,
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
        action: {
            type: Boolean,
            default: true
        },
        // edit: {
        //     type: Boolean,
        //     default: false
        // },
    }, 
    computed: {
        bindClass() {
            if (this.status == 'todo') {
                return { 'todo': true};
            }
            if (this.status == 'doing') {
                return { 'doing': true};
            }
            if (this.status == 'done') {
                return { 'done': true};
            }
        },
    },
    methods: {
        moveCard() {
            this.$emit('moveCard');
        },
        openEdit() {
            return this.edit = true;
        },
        closeEdit() {
            return this.edit = false;
        }
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/variable.sass'
@import '@/styles/defaults/mobileFirst.sass'

.todo,
.doing,
.done
    padding: 0 40px
    margin: 20px
    border-radius: 10px
    display: flex
    align-items: center
    justify-content: space-around
    height: 40px
    +media-min-sm
    +media-min-md
        height: 45px
    +media-min-lg
    .titulo
        font-size: 16px
        +media-min-sm
            font-size: 18px
        +media-min-md
            font-size: 20px
        +media-min-lg
            font-size: 22px
    .edit
        background-color: transparent
        border-radius: 5px
        border: 1px solid #dadada
        padding: 0.375rem 1.75rem
        width: 100%
    
.todo
    background-color: $color-todo
.doing
    background-color: $color-doing
.done
    background-color: $color-done

.move-card
    position: relative
    left: 50%
    padding-top: 3%
    cursor: pointer
    background-color: transparent
    border: none
    &:focus
        outline: none
    +media-min-md
        left: 54%

</style>
