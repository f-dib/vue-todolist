// const creatApp = Vue.creatApp;
// stessa cosa di scrivere: -->
const { createApp } = Vue

createApp({
    data() {
        return {

            tasks: [
            { 
                text: "ciao",
                done: false
            },
            {
                text: "ciao",
                done: true
            },
            {
                text: "ciao",
                done: true
            }

            ],

        }
    },
    methods: {

        // linethroughTask() {

        //     this.tasks

        // },

    }
}).mount('#app');