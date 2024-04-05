<template>
    <v-row justify="center">
      <v-dialog
        v-model="taskStore.ShowDialogDeleteTasks"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">
            Excluir item {{ taskStore.titleTaskUpdadeOrDelete }}
          </v-card-title>
          <v-card-text>Tem certeza de que dejase apagar este item permanentemente?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red-darken-1"
              variant="elevated"
              @click="taskStore.toggleDialogDeleteTasks(index)"
            >
              não
            </v-btn>
            <v-btn
              color="red-darken-1"
              variant="outlined"
              @click="taskStore.deleteTask"
            >
              sim
            </v-btn>    
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<script setup>

import { useTaskStore } from '@/store/tasks';
import { useAlertStore } from '@/store/alert';

const taskStore = useTaskStore();

let index = taskStore.indexTaskSelected


</script>

<style>

</style>