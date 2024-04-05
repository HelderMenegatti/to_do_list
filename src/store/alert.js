import {defineStore} from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        type: "error",
        text: "",
        messageAlertTasks: {
            create: {type: 'success', text: 'Task criada com sucesso'},
            update: {type: 'info', text: 'Task editada com sucesso'},
            delete: {type: 'error', text: 'Task deletada com sucesso'}
        }
    }),
    actions: {
        notifyAlert(message_type){
            
            this.showAlert = true;
            this.type = this.messageAlertTasks[message_type].type;
            this.text = this.messageAlertTasks[message_type].text;
            setTimeout(()=>{
                this.showAlert = false
            }, 3000)
        },
    }

})