<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
@import "normalize.css"

html, body
    height: 100%
    width: 100%
    font-family: Arial, Helvetica, sans-serif

* 
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box

</style>
