import { defineStore } from 'pinia'
import { ref } from 'vue';
import { useAlertStore } from '@/store/alert';

const useAlet = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks:ref([]),
        titleTaskCreating: "",
        titleTaskUpdadeOrDelete: "",
        indexTaskSelected: 0,
        ShowDialogDeleteTasks: false,
        showDialogTaskFields: false,
        // taskSelected: this.tasks[this.indexTaskSelected]
    }),
    actions:{
        addTask(){
            if(this.titleTaskCreating.length >= 5){
                this.tasks.push({
                    id: this.tasks.length + 1,
                    title: this.titleTaskCreating,
                    done: false
                })
                this.titleTaskCreating = ""
                this.saveLocalData();
                useAlet.notifyAlert('create');
            };
        },
        toggleDialogDeleteTasks(index){
            this.ShowDialogDeleteTasks = !this.ShowDialogDeleteTasks;
            if(index != null){
                this.indexTaskSelected = index;
                // debugger
                if(this.tasks[this.indexTaskSelected].title != undefined){
                    this.titleTaskUpdadeOrDelete = this.tasks[this.indexTaskSelected].title
                }
            }
        },
        deleteTask(){
            this.tasks.splice(this.indexTaskSelected, 1);
            if (this.indexTaskSelected >= 0) {
                this.indexTaskSelected--;
            }

            this.toggleDialogDeleteTasks();
            this.saveLocalData();
            useAlet.notifyAlert('delete');
        },
        toggleDialogEditTasks(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if(index != null){
                this.indexTaskSelected = index;
                this.titleTaskUpdadeOrDelete = this.tasks[this.indexTaskSelected].title
            };
        },
        updateTask(index){
            this.saveLocalData();
            this.toggleDialogEditTasks(index)
            useAlet.notifyAlert('update')
        },
     
        saveLocalData(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks(){
            let items = localStorage.getItem('tasks');
            if(items){
                this.tasks = JSON.parse(items);
            }
            
        },
        ToogleDoneTasks(index){
            this.tasks[index].done = !this.tasks[index].done
            this.saveLocalData()
        }
        
    }
})