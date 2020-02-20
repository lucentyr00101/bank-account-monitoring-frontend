<template lang="pug">
  v-app

    nav-drawer(v-if="this.$auth.isAuthenticated()")
    app-bar(v-if="this.$auth.isAuthenticated()")

    v-content
      v-container.h-100(fluid)
        router-view
    v-footer(app color='primary' padless)
      v-col.text-center.overline(cols="12") &copy; {{ new Date().getFullYear() }}

</template>

<script>
export default {
  components: {
    navDrawer: () => import('@/components/nav-drawer'),
    appBar: () => import('@/components/app-bar')
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