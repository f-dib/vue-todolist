// const creatApp = Vue.creatApp;
// stessa cosa di scrivere: -->
const { createApp } = Vue

createApp({
    data() {
        return {

            // object with tasks
            tasks: [
                { 
                    text: "100 push-ups",
                    done: true
                },
                {
                    text: "100 sit-ups",
                    done: false
                },
                {
                    text: "100 squats",
                    done: false
                },
                {
                    text: "10K run",
                    done: false
                }
            ],

            // 
            newTask: '',

        }
    },
    methods: {

        deleteTask(taskIndex) {
            
            // delete the element from the tasks array that corresponds to the index reported in the parameter
            this.tasks.splice(taskIndex, 1);

        },

        addTask() {

            // Add the text written inside the input field to the task list
            this.tasks.push({text: this.newTask, done: false}),

            // I delete the contents of the input field
            this.newTask = "";

        },

    }
}).mount('#app');