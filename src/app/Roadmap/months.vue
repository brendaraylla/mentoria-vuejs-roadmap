<template>
    <div class="content">
        <router-link :to="{ name: 'Kanban', params: {month: nameMonth} }">
            <button class="months">{{ nameMonth }}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        nameMonth: String,
        required: true,
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'

.months
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
