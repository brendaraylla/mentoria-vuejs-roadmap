<template>
    <div class="content">
        <div class="row">
            <div class="col" v-for="month in months" :key="month.id">
                <months-roadmap :month="month"></months-roadmap>
            </div>
        </div>
    </div>
</template>

<script>
import Months from "./months";
import RoadmapService from "@/service/RoadmapService";

export default {
    data() {
        return {
            months: []
        }
    },
    components: {
        'months-roadmap': Months,
    },
    methods: {
        
    },
    created() {
        const service = new RoadmapService();
        this.months = service.getMonths();
    }

};

</script>

<style lang="sass" scoped>
@import '@/styles/defaults/mobileFirst.sass'
@import '@/styles/defaults/variable.sass'

.content
    background: url('../../../static/img/background-roadmap-vertical.png') no-repeat center center fixed
    background-size: cover
    background-position: center
    width: 100%
    +media-min-sm
    +media-min-md
        position: relative
        overflow: auto
        height: 100%
        background: url('../../../static/img/background-roadmap.png') no-repeat center center fixed
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
        height: 100%
        padding: 80px
    +media-min-sm
    +media-min-md
        flex-direction: row
        position: absolute
        margin: 0 75px
        .col
            padding: 50px
    +media-min-lg
        margin: 0 110px
        

</style>
