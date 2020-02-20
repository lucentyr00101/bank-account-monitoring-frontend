<template lang="pug">
  v-app
    v-navigation-drawer(app v-if="this.$auth.isAuthenticated()" clipped v-model="drawer" color="primary darken-2")
    v-app-bar(app color="primary" clipped-left)
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-toolbar-title Title
    v-content
      v-container.h-100(fluid)
        router-view
    v-footer(app color='primary' padless)
      v-col.text-center.overline(cols="12") &copy; {{ new Date().getFullYear() }}

</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus">
  home,  body
    margin: 0
    padding: 0
    .h-100
      height 100%
</style>