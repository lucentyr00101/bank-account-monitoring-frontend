<template lang="pug">
  v-data-table(:headers="headers" :items="logs" :items-per-page="5")
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
      ]
    }
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get(listFunds(), this.$auth.getHeader())
        this.logs = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>