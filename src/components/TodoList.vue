<template>
    <v-text-field 
        clearable label="add task" 
        v-model="taskStore.titleTaskCreating"
        :rules="rules"
        variant="solo-filled"
        @keyup.enter="taskStore.addTask"
    ></v-text-field> 

    <ListTasks></ListTasks>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useTaskStore } from '@/store/tasks';

    const taskStore = useTaskStore();

    onMounted(()=>{
        taskStore.getTasks()
    })

    const rules = [value=>{
        if (value.length >= 5 || value.length == 0) return true
        return 'Digite no minimo 5 caracteres'
    }]
</script>

<style>

</style>