<template lang="pug">
  v-data-table(:headers="headers" :items="logs" :items-per-page="10" :options.sync="options" :loading="loading" :server-items-length="totalItems" @update:page="getData()")
</template>

<script>
import axios from 'axios'
import { listFunds } from '@/utils/api'
import moment from 'moment'

export default {
  data() {
    return {
      logs: [],
      headers: [
        { text: 'ID', align: 'center', value: 'id' },
        { text: 'Amount', align: 'center', value: 'amount' },
        { text: 'User', align: 'center', value: 'user.full_name' },
        { text: 'Date Posted', align: 'center', value: 'created_at' },
      ],
      loading: true,
      options: {
        page: 1,
        itemsPerPage: 10,
      },
      totalItems: 0,
    }
  },
  methods: {
    async getData() {
      this.loading = true
      try {
        const url = `${listFunds()}?page=${this.options.page}`
        const res = await axios.get(url, this.$auth.getHeader())
        setTimeout(() => {
          console.log(res)
          this.logs                 = res.data.data
          this.loading              = false
          this.options.page         = res.data.meta.current_page
          this.options.itemsPerPage = res.data.meta.per_page
          this.totalItems           = res.data.meta.total
        }, 1000)
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>