<template lang="pug">
  v-app

    nav-drawer

    nav-bar

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
    navBar: () => import('@/components/nav-bar')
  },
}
</script>

<style lang="stylus">
  home,  body
    margin: 0
    padding: 0
    .h-100
      height 100%
    .menu-active-list
      color #f7a7a6 !important
</style>