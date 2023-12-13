//Descrizione:

/*
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
    Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp ({
    data() {
        return {
            //Variables for mail(array) mail Num (number)
            randomEmailNum : 10,
            mailLists : []
        }
    },
    methods: {
        mailGenerator() {
            // Array lenght 0
            this.mailLists.length = 0;
            //cycle for, 10 randoms mail
            for ( let i = 0; i <= this.randomEmailNum; i++){
                // axios api inclusion
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(
                        response => {
                            this.mailLists.push(response.data.response);
                    }
                );
            }
            console.log(this.mailLists);
            console.log(this.randomEmailNum);
        }
    },
    mounted(){
        this.mailGenerator()
        console.log(this.mailLists);
        console.log('App loaded');
    },
}).mount('#app');