<template>
    <div class="card-content">
        <h2 >{{ card.title }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
</template>

<script>
import Card from '@/entity/Card';

export default {
    data() {
        return {
            card: new Card()
        }
    }

}
</script>

<style lang="sass" scoped>
@import '@/styles/defaults/variable.sass'

.card-content
    margin: 0 40px
    background-color: #FE5D5D
    width: 370px
    border-radius: 10px
    color: #fff
</style>
