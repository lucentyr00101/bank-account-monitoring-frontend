<template lang="pug">
  v-row
    v-col.mx-auto(lg="6")
      v-form(ref="form" @submit.prevent="submitForm" v-model="valid")
        v-card(shaped)
          v-card-text
            v-alert(:type="alert.type" :value="alert.show" transition="scale-transition") {{ alert.message }}
            p.headline Add Funds
            v-text-field(label="Amount" prepend-inner-icon="mdi-currency-php" :rules="[rules.number, rules.required]" v-model="amount")
            v-text-field(label="Date" prepend-inner-icon="mdi-calendar-month" :rules="[rules.required]" disabled :value="getDate")
            v-btn.mt-5(type="submit" color="success" :disabled="!valid" :loading="loading") Save
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import { postFund } from '@/utils/api'

export default {  
  data() {
    return {
      valid: true,
      rules: {
        number: v => !isNaN(v) || 'Amount field must be a number!',
        required: v => !!v || 'This field is required!'
      },
      amount: 0,
      loading: false,
      alert: {
        type: 'success',
        show: false,
        message: '',
      }
    }
  },
  methods: {
    async submitForm() {
      if(this.$refs.form.validate()) {
        this.loading = true
        try {
          let formData = new FormData()
          formData.append('amount', this.amount)
          const res = await axios.post(postFund(), formData, this.$auth.getHeader())
          setTimeout(() => {
            this.showAlert('success', true, 'Funds successfully added!')
          }, 1000)
        } catch(err) {
          console.log(err)
          this.showAlert('error', true, 'Something went wrong. Please try again later.')
        }
      }
    },
    showAlert(type, show, message) {
      this.alert.type = type
      this.alert.show = show
      this.alert.message = message
      this.loading = false
      this.amount = 0
      this.$refs.form.resetValidation()
    }
  },

  computed: {
    getDate() {
      return moment().format('MMMM DD, YYYY')
    }
  }
}
</script>