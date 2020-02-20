<template lang="pug">
  v-app
    v-navigation-drawer(app v-if="this.$auth.isAuthenticated()")
    v-content
      v-container.h-100(fluid)
        router-view
    v-footer(app)
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  home,  body
    margin: 0
    padding: 0
    .h-100
      height 100%
</style>