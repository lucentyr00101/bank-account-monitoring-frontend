<template lang="pug">
  v-row
    v-col.mx-auto(lg="6")
      v-form(ref="form" @submit.prevent="submitForm" v-model="valid")
        v-card(shaped)
          v-card-text
            p.headline Add Funds
            v-text-field(label="Amount" prepend-inner-icon="mdi-currency-php" :rules="amountRules")
            .d-flex.justify-end.my-1
              v-btn(type="submit" color="success" :disabled="!valid") Save
</template>

<script>
export default {  
  data() {
    return {
      valid: true,
      amountRules: [
        v => !!v || 'Amount field is required!',
        v => !isNaN(v) || 'Amount field must be a number!'
      ]
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate()
      console.log('form submitted')
    }
  }
}
</script>