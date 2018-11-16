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

+media-min-sm()
+media-min-md()
+media-min-lg()

.content
    background: url('../../../static/img/fotoca.png') no-repeat center center fixed
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
            background: transparent
            border: 5px solid $color-blue
            border-radius: 15px
            color: $color-font
            margin-top: 200px
            +media-min-sm()
                padding: 10px
            +media-min-md()
                padding: 50px
            +media-min-lg()
                padding: 200px
</style>
