import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        success: '#dbebc2',
        danger: '#f48894',
        primary: '#acdbc9',
        secondary: '#fdd2b5',
        tertiary: '#f7a7a6'
      }
    }
  }
});
