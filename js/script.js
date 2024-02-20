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


        deleteTask(taskIndex) {

            this.tasks.splice(taskIndex, 1);

        },

    }
}).mount('#app');