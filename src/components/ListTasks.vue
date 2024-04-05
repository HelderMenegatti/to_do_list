<template>
    <div>   
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>Tasks</v-list-subheader>
    
            <v-list-item 
            v-for="task, index in taskStore.tasks"
            :key="task.id"
            :value="index"
            @click="taskStore.ToogleDoneTasks(index)"
            >
                <template v-slot:prepend="{  }">
        
                    <v-list-item-action start>
                    <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
         
                <v-list-item-title>{{ task.title }}</v-list-item-title>
        
                <v-list-item-subtitle>
                    {{ task.description }}
                </v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn
                        
                                color="grey-lighten"
                                icon="mdi-dots-vertical"
                                variant="text"
                                v-bind="props"
                            >
                            
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskStore.toggleDialogEditTasks(index)">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskStore.toggleDialogDeleteTasks(index)">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>            
                        </v-list>
                    </v-menu>
                    
                </template>
            </v-list-item>
            <DialogTaskFields></DialogTaskFields>

            <DialogDeletaTask></DialogDeletaTask>
        </v-list>        
    </div>
</template>

<script setup>

    import { useTaskStore } from '@/store/tasks';

    const taskStore = useTaskStore();

</script>

<style>

</style>