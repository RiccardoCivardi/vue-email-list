/*
**Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.
*/

const {createApp} = Vue;

createApp({

  data(){
    return {

      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      limit: 10,
      emails: [],
      isLoaded: false

    }
  },

  methods: {

    getRandomEmail() {

      for(let i = 0; i < this.limit; i++) {

        axios.get(this.apiUrl)
        .then(result => {
          const email = result.data.response;
          this.emails.push(email);
          if(this.emails.length === this.limit) this.isLoaded = !this.isLoaded;
        })
        .catch(error => {
          const email = 'error';
          this.emails.push(email);
        })

      }
      
    }


  },

  mounted(){

    this.getRandomEmail();

  }

}).mount('#app');