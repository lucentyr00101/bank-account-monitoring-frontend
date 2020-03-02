<template lang="pug">
  v-row
    v-col.mx-auto(lg="6")
      v-form(ref="form" @submit.prevent="submitForm" v-model="valid")
        v-card(shaped)
          v-card-text
            p.headline Add Funds
            v-text-field(label="Amount" prepend-inner-icon="mdi-currency-php" :rules="[rules.number, rules.required]")
            v-text-field(label="Date" prepend-inner-icon="mdi-calendar-month" :rules="[rules.required]" disabled :value="getDate")
            v-btn.mt-5(type="submit" color="success" :disabled="!valid") Save
</template>

<script>
import moment from 'moment'

export default {  
  data() {
    return {
      valid: true,
      rules: {
        number: v => !isNaN(v) || 'Amount field must be a number!',
        required: v => !!v || 'This field is required!'
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate()
      console.log('form submitted')
    }
  },
  computed: {
    getDate() {
      return moment().format('MMMM DD, YYYY')
    }
  }
}
</script>