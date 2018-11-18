<template>
    <div class="content">
        <div class="row">
            <div class="col">
                <months-roadmap nameMonth="JAN"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="FEV"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="MAR"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="ABR"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="MAI"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="JUN"></months-roadmap>
            </div>
        </div>
    </div>
</template>

<script>
import Months from "./months";

export default {
    components: {
        'months-roadmap': Months,
    }


};

</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'

.content
    background: url('../../../static/img/background-roadmap-vertical.png') no-repeat center center fixed
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
    background-position: center
    width: 100%
    height: 100%
    +media-min-md
        background: url('../../../static/img/background-roadmap.png') no-repeat center center fixed
        -webkit-background-size: cover
        -moz-background-size: cover
        -o-background-size: cover
        background-size: cover
        background-position: center

.row
    display: flex
    flex-direction: column
    flex: 1
    text-align: center
    justify-content: space-around
    height: 100%
    .col
        align-self: center
        display: flex
        flex-direction: column
    +media-min-sm
    +media-min-md
        flex-direction: row
        align-content: center
        padding: 0 100px
    +media-min-lg
        padding: 0 120px

</style>
