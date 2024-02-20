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

            newTask: '',

        }
    },
    methods: {

        deleteTask(taskIndex) {

            this.tasks.splice(taskIndex, 1);

        },

        addTask() {

            // aggiungo il testo scritto dentro il campo di input alla lista dei task
            // testo del campo di input:
            // console.log(this.newTask)

            this.tasks.push({text: this.newTask, done: false}),

            // cancello il contenuto del campo di input
            this.newTask = "";

        },

    }
}).mount('#app');