<template>
    <div class="content">
        <div class="roadmap">
            <router-link :to="{ name: 'Roadmap' }">
                <button class="roadmap-entry">Roadmap</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};

</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'
@import url('https://fonts.googleapis.com/css?family=Roboto:300')

+media-min-sm()
+media-min-md()
+media-min-lg()

.content
    background: url('../../../static/img/background-home.png') no-repeat center center fixed
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
    background-position: center
    width: 100%
    height: 100%
    .roadmap
        display: flex
        justify-content: center
        &-entry
            padding: 10px 35px
            background: transparent
            border: 5px solid $color-blue
            border-radius: 30px
            color: $color-font
            margin-top: 70%
            font-family: Roboto
            font-size: 1.0em
            +media-min-sm()
                font-size: 1.2em
                padding: 10px 35px
            +media-min-md()
            +media-min-lg()
                font-size: 1.4em
</style>
