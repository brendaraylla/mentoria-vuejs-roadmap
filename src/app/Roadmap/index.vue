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
            <div class="col">
                <months-roadmap nameMonth="JUL"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="AGO"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="SET"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="OUT"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="NOV"></months-roadmap>
            </div>
            <div class="col">
                <months-roadmap nameMonth="DEZ"></months-roadmap>
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
    padding: 80px
    +media-min-sm
    +media-min-md
        overflow: auto
        height: 100%
        padding: 0
        background: url('../../../static/img/background-roadmap.png') no-repeat center center fixed
        -webkit-background-size: cover
        -moz-background-size: cover
        -o-background-size: cover
        background-size: cover
        background-position: center
    +media-min-lg

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
    +media-min-sm
    +media-min-md
        flex-direction: row
        .col
            padding: 40px
    +media-min-lg

</style>
